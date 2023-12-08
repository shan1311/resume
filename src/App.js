import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import './App.css';

function App() {
  const resumeUrl = process.env.PUBLIC_URL + '/shan_resume1.pdf';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume</h1>
        
        
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={resumeUrl} />
          </Worker>
        </div>
        
        <a href={resumeUrl} download="shan_resume1.pdf" className="cta">
          Download Resume
        </a>
      </header>
    </div>
  );
}

export default App;
