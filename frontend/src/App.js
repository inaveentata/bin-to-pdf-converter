import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setDownloadUrl(null);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a .bin file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        alert('Conversion failed: ' + (err.error || 'Unknown error'));
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (e) {
      console.error(e);
      alert('An error occurred during conversion.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bin to PDF Converter</h1>
      <input type="file" accept=".bin" onChange={handleChange} />
      <button onClick={handleSubmit} disabled={!file} style={{ marginLeft: '0.5rem' }}>
        Convert to PDF
      </button>
      {downloadUrl && (
        <div style={{ marginTop: '1rem' }}>
          <a href={downloadUrl} download={file.name.replace(/\.[^.]+$/, '.pdf')}>
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
