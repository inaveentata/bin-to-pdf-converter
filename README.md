# Bin-to-PDF Converter

A modern Next.js web application that converts binary files (`.bin`) to PDF format. Built with TypeScript, Tailwind CSS, and deployed on Vercel for optimal performance.

## Project Structure

```
bin-to-pdf-converter/
├── src/
│   └── app/
│       ├── page.tsx         # Main React component
│       ├── layout.tsx       # App layout
│       ├── globals.css      # Global styles
│       └── api/
│           └── convert/
│               └── route.ts # API endpoint for conversion
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Usage

### Web Interface

1. Open your browser and go to `http://localhost:3000`
2. Click "Choose File" and select a `.bin` file
3. Click "Convert to PDF"
4. Download the generated PDF file

### API Usage

You can also use the API directly:

```bash
curl -X POST -F "file=@yourfile.bin" http://localhost:3000/api/convert --output result.pdf
```

## Features

- **Multi-encoding support**: Handles UTF-8, ISO-8859-1, CP1252, and ASCII encodings
- **Text sanitization**: Removes ANSI escape sequences and non-printable characters
- **Monospace formatting**: Uses Courier font for consistent text layout
- **Error handling**: Comprehensive error handling and fallback mechanisms
- **Flexible input**: Accepts various binary file formats
- **Clean output**: Generates well-formatted PDF documents

## Dependencies

- Node.js 18+
- Next.js 15.0.3
- React 18
- TypeScript 5
- Tailwind CSS
- jsPDF 2.5.1

## Development

### Next.js App Router

The application uses Next.js 13+ App Router with:
- **Frontend**: React components with TypeScript and Tailwind CSS
- **API Routes**: Server-side API endpoints for file processing
- **Type Safety**: Full TypeScript support throughout the application

## Troubleshooting

- **Build errors**: Ensure Node.js 18+ is installed and run `npm install`
- **API errors**: Check the browser console for detailed error messages
- **File conversion fails**: Ensure the uploaded file is a valid binary file
- **Encoding issues**: The application tries multiple encodings automatically

## License

This project is open source and available under the MIT License.