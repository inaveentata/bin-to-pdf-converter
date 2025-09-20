import os
import re
import tempfile
from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from fpdf import FPDF

app = Flask(__name__)
CORS(app)

# Supported encodings (order matters, first successful one will be used)
ENCODINGS = ["utf-8", "iso-8859-1", "cp1252", "ascii"]

def read_text_file(filepath):
    """Read a file with unknown encoding, trying multiple decoders."""
    with open(filepath, "rb") as file:
        raw_data = file.read()
    for encoding in ENCODINGS:
        try:
            return raw_data.decode(encoding)
        except UnicodeDecodeError:
            continue
    # Fallback: replace undecodable bytes
    return raw_data.decode("utf-8", errors="replace")

def clean_text(text):
    """Remove non‑printable characters while preserving line breaks."""
    # Strip ANSI escape sequences
    text = re.sub(r"\x1B[@-_][0-?]*[ -/]*[@-~]", "", text)
    # Remove other non‑printable chars (except \n, \t, \r)
    text = re.sub(r"[^\x20-\x7E\n\t\r]+", "", text)
    return text.strip()

class PDF(FPDF):
    def header(self):
        self.set_font("Courier", "B", 10)
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("Courier", "I", 8)
        self.cell(0, 5, f"Page {self.page_no()}", 0, 0, "C")

def convert_to_pdf(text, output_path):
    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Courier", size=8)
    for line in text.splitlines():
        if len(line) > 150:
            line = line[:147] + "..."
        pdf.cell(0, 4, line, ln=True)
    pdf.output(output_path)

@app.route('/convert', methods=['POST'])
def convert():
    """
    Expects a multipart/form‑data request with a file field named 'file'.
    Returns the generated PDF as an attachment.
    """
    if "file" not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    uploaded = request.files["file"]
    if uploaded.filename == "":
        return jsonify({"error": "No selected file"}), 400

    # Save uploaded file to a temporary location
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        uploaded.save(tmp.name)
        tmp_path = tmp.name

    try:
        text = read_text_file(tmp_path)
        cleaned = clean_text(text)

        # Prepare output path
        base_name = os.path.splitext(uploaded.filename)[0]
        output_path = tempfile.mktemp(suffix='.pdf')

        convert_to_pdf(cleaned, output_path)

        return send_file(
            output_path,
            as_attachment=True,
            download_name=f"{base_name}.pdf",
            mimetype="application/pdf",
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Clean up temporary files
        try:
            os.remove(tmp_path)
            if 'output_path' in locals():
                os.remove(output_path)
        except OSError:
            pass

# This is the handler that Vercel will use
def handler(request):
    return app(request.environ, lambda *args: None)