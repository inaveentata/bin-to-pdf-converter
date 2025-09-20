# Frontend - Bin to PDF Converter

React frontend for the Bin to PDF Converter application.

## Features

- File upload interface for `.bin` files
- Real-time conversion via backend API
- PDF download functionality
- Simple and intuitive user interface

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Configuration

The frontend is configured to communicate with the backend API running on `http://localhost:5000`. Make sure the backend server is running before using the frontend.

## Project Structure

```
frontend/
├── public/          # Static files
├── src/             # Source code
│   ├── App.js       # Main application component
│   ├── App.css      # Application styles
│   └── index.js     # Application entry point
├── package.json     # Dependencies and scripts
└── README.md        # This file
```