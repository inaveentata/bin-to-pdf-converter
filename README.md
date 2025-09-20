# Bin-to-PDF Converter

A full-stack web application that converts binary files (`.bin`) to PDF format. The application consists of a React frontend and a Python backend with both REST API and standalone conversion capabilities.

## Project Structure

```
bin-to-pdf-converter/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/                 # React source code
│   ├── package.json         # Frontend dependencies
│   └── README.md            # Frontend documentation
├── backend/                 # Python backend application
│   ├── app.py              # Flask API server
│   ├── convert_bin_to_pdf.py # Standalone conversion script
│   ├── requirements.txt    # Backend dependencies
│   ├── input/              # Input directory for .bin files
│   ├── output/             # Output directory for generated PDFs
│   ├── venv/               # Python virtual environment
│   └── README.md           # Backend documentation
└── README.md               # This file
```

## Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the Flask API server
python app.py
```

The backend API will be available at `http://localhost:5000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will be available at `http://localhost:3000`

## Usage

### Web Interface

1. Open your browser and go to `http://localhost:3000`
2. Click "Choose File" and select a `.bin` file
3. Click "Convert to PDF"
4. Download the generated PDF file

### Standalone Conversion

For batch processing without the web interface:

```bash
cd backend
source venv/bin/activate
python convert_bin_to_pdf.py
```

This will process all files in the `input/` directory and generate PDFs in the `output/` directory.

### API Usage

You can also use the API directly:

```bash
curl -X POST -F "file=@yourfile.bin" http://localhost:5000/convert --output result.pdf
```

## Features

- **Multi-encoding support**: Handles UTF-8, ISO-8859-1, CP1252, and ASCII encodings
- **Text sanitization**: Removes ANSI escape sequences and non-printable characters
- **Monospace formatting**: Uses Courier font for consistent text layout
- **Error handling**: Comprehensive error handling and fallback mechanisms
- **Flexible input**: Accepts various binary file formats
- **Clean output**: Generates well-formatted PDF documents

## Dependencies

### Backend
- Python 3.11+
- Flask 3.0.3
- fpdf 1.7.2

### Frontend
- Node.js 14+
- React 19.1.1
- Create React App

## Development

### Backend Development

The backend provides two interfaces:
- **Flask API** (`app.py`): RESTful web service for file conversion
- **Standalone script** (`convert_bin_to_pdf.py`): Command-line batch processor

### Frontend Development

The frontend is built with Create React App and provides a simple file upload interface that communicates with the backend API.

## Troubleshooting

- **Backend not starting**: Ensure Python virtual environment is activated and dependencies are installed
- **Frontend can't connect**: Verify the backend server is running on port 5000
- **File conversion fails**: Check file permissions and ensure input files are readable
- **Encoding issues**: The application tries multiple encodings automatically

## License

This project is open source and available under the MIT License.