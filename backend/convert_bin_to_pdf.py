import os
import re
from fpdf import FPDF

INPUT_DIR = os.path.join(os.path.dirname(__file__), "input")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")

# Supported encodings (order matters, first successful one will be used)
ENCODINGS = ["utf-8", "iso-8859-1", "cp1252", "ascii"]

def read_text_file(filepath):
    """Reads a file with unknown encoding, trying multiple decoders."""
    with open(filepath, "rb") as file:
        raw_data = file.read()
    
    for encoding in ENCODINGS:
        try:
            return raw_data.decode(encoding)
        except UnicodeDecodeError:
            continue
    
    # Fallback: Replace non-decodable bytes with placeholder
    return raw_data.decode("utf-8", errors="replace")

def clean_text(text):
    """Removes non-printable chars but preserves line breaks and spacing."""
    # Remove ANSI escape sequences (e.g., colors, cursor movements)
    text = re.sub(r"\x1B[@-_][0-?]*[ -/]*[@-~]", "", text)
    # Replace other non-printable chars (except \n, \t, \r)
    text = re.sub(r"[^\x20-\x7E\n\t\r]+", "", text)
    return text.strip()

class PDF(FPDF):
    def header(self):
        self.set_font("Courier", "B", 10)
        # self.cell(0, 5, "Text Report", ln=True, align="C")
        self.ln(5)  # Add spacing after header

    def footer(self):
        self.set_y(-15)
        self.set_font("Courier", "I", 8)
        self.cell(0, 5, f"Page {self.page_no()}", 0, 0, "C")

def convert_to_pdf(text, output_path):
    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Courier", size=8)  # Monospace for fixed-width text
    
    for line in text.splitlines():
        # Trim excessively long lines to avoid PDF overflow
        if len(line) > 150:
            line = line[:147] + "..."
        pdf.cell(0, 4, line, ln=True)
    
    pdf.output(output_path)
    print(f"[✓] Converted: {os.path.basename(output_path)}")

def process_files():
    os.makedirs(INPUT_DIR, exist_ok=True)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Process ALL files in input/ (not just .bin)
    for filename in os.listdir(INPUT_DIR):
        input_path = os.path.join(INPUT_DIR, filename)
        if not os.path.isfile(input_path):
            continue

        try:
            # Output filename: same as input but with .pdf
            base_name = os.path.splitext(filename)[0]
            output_path = os.path.join(OUTPUT_DIR, f"{base_name}.pdf")

            text = read_text_file(input_path)
            cleaned_text = clean_text(text)
            convert_to_pdf(cleaned_text, output_path)
        except Exception as e:
            print(f"[✗] Failed {filename}: {str(e)}")

if __name__ == "__main__":
    process_files()