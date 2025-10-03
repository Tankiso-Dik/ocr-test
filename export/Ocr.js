'use client';

import { useState, useRef } from 'react';
import './ocr.css';

export default function Ocr() {
    const [ocrText, setOcrText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsProcessing(true);
        setOcrText('Extracting text from PDF...');

        try {
            const fileReader = new FileReader();
            fileReader.onload = async () => {
                const pdfContent = fileReader.result;
                const res = await fetch('/api/ocr', {
                    method: 'POST',
                    body: pdfContent,
                    headers: {
                        'Content-Type': 'application/pdf'
                    }
                });

                const data = await res.json();
                if (res.ok) {
                    setOcrText(data.text);
                } else {
                    setOcrText(data.error || 'Failed to extract text.');
                }
            };
            fileReader.readAsArrayBuffer(file);
        } catch (err) {
            console.error('Error uploading file:', err);
            setOcrText('⚠️ Error uploading file.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="ocr-container">
            <div className="ocr-output">
                <input type="text" value={ocrText} readOnly placeholder="Extracted text will appear here..." />
            </div>
            <div className="ocr-controls">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    accept=".pdf"
                />
                <button onClick={() => fileInputRef.current.click()} disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : 'Upload PDF'}
                </button>
            </div>
        </div>
    );
}
