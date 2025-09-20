import os
import re
import tempfile
import json
import base64
from http.server import BaseHTTPRequestHandler
from fpdf import FPDF

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

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            # Parse multipart form data
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Simple boundary parsing (this is a basic implementation)
            boundary = None
            for line in self.headers.get_all('Content-Type', []):
                if 'boundary=' in line:
                    boundary = line.split('boundary=')[1]
                    break
            
            if not boundary:
                self.send_error(400, "No boundary found")
                return
                
            # Parse the multipart data
            parts = post_data.split(f'--{boundary}'.encode())
            
            file_data = None
            filename = None
            
            for part in parts:
                if b'Content-Disposition: form-data' in part:
                    if b'filename=' in part:
                        # Extract filename
                        filename_line = [line for line in part.split(b'\r\n') if b'filename=' in line][0]
                        filename = filename_line.decode().split('filename="')[1].split('"')[0]
                        
                        # Extract file data (everything after the headers)
                        file_data_start = part.find(b'\r\n\r\n') + 4
                        file_data = part[file_data_start:]
                        # Remove trailing boundary markers
                        file_data = file_data.rstrip(b'\r\n--')
                        break
            
            if not file_data or not filename:
                self.send_error(400, "No file uploaded")
                return
            
            # Save uploaded file to a temporary location
            with tempfile.NamedTemporaryFile(delete=False) as tmp:
                tmp.write(file_data)
                tmp_path = tmp.name
            
            try:
                text = read_text_file(tmp_path)
                cleaned = clean_text(text)
                
                # Prepare output path
                base_name = os.path.splitext(filename)[0]
                output_path = tempfile.mktemp(suffix='.pdf')
                
                convert_to_pdf(cleaned, output_path)
                
                # Read the generated PDF
                with open(output_path, 'rb') as pdf_file:
                    pdf_data = pdf_file.read()
                
                # Send response
                self.send_response(200)
                self.send_header('Content-Type', 'application/pdf')
                self.send_header('Content-Disposition', f'attachment; filename="{base_name}.pdf"')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Length', str(len(pdf_data)))
                self.end_headers()
                self.wfile.write(pdf_data)
                
            except Exception as e:
                self.send_error(500, f"Conversion error: {str(e)}")
            finally:
                # Clean up temporary files
                try:
                    os.remove(tmp_path)
                    if 'output_path' in locals():
                        os.remove(output_path)
                except OSError:
                    pass
                    
        except Exception as e:
            self.send_error(500, f"Server error: {str(e)}")