# Backend - Bin to PDF Converter

Python backend for the Bin to PDF Converter application, providing both a Flask API and standalone conversion utility.

## Features

- Flask REST API for file conversion
- Standalone Python script for batch conversion
- Multi-encoding support (UTF-8, ISO-8859-1, CP1252, ASCII)
- Text cleaning and sanitization
- PDF generation with monospace formatting

## Prerequisites

- Python 3.11 or later
- Virtual environment (recommended)

## Getting Started

### 1. Set up Virtual Environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Application

#### Option A: Flask API Server
```bash
python app.py
```
The API will be available at `http://localhost:5000`

#### Option B: Standalone Batch Converter
```bash
python convert_bin_to_pdf.py
```
This processes all files in the `input/` directory and outputs PDFs to `output/`

## API Endpoints

### POST /convert

Converts an uploaded binary file to PDF.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: File upload with field name 'file'

**Response:**
- Success: PDF file as attachment
- Error: JSON error message

**Example:**
```bash
curl -X POST -F "file=@yourfile.bin" http://localhost:5000/convert --output result.pdf
```

## Configuration

The backend uses the following directory structure:
- Input files: `input/` (within backend directory)
- Output files: `output/` (within backend directory)

## Dependencies

- `fpdf==1.7.2` - PDF generation library
- `Flask==3.0.3` - Web framework for API

## Project Structure

```
backend/
├── app.py                    # Flask API server
├── convert_bin_to_pdf.py    # Standalone conversion script
├── requirements.txt         # Python dependencies
├── input/                   # Input directory for .bin files
├── output/                  # Output directory for generated PDFs
├── venv/                    # Virtual environment
└── README.md               # This file
```
