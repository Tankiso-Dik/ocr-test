
import { NextResponse } from 'next/server';

export async function POST(request) {
  const pdfContent = await request.arrayBuffer();

  const apiKey = process.env.OCR_SPACE_API_KEY;
  if (!apiKey) {
    console.error('OCR_SPACE_API_KEY is not set.');
    return NextResponse.json(
      { error: 'Server configuration error: API key missing.' },
      { status: 500 }
    );
  }

  const formData = new FormData();
  formData.append('apikey', apiKey);
  formData.append('file', new Blob([pdfContent]), 'document.pdf');

  try {
    const ocrResponse = await fetch('https://api.ocr.space/parse/image', {
      method: 'POST',
      body: formData,
    });

    const ocrResult = await ocrResponse.json();

    if (ocrResult.IsErroredOnProcessing) {
      return NextResponse.json(
        { error: `OCR.space API Error: ${ocrResult.ErrorMessage}` },
        { status: 500 }
      );
    }

    const extractedText = ocrResult.ParsedResults[0]?.ParsedText || 'No text found.';

    return NextResponse.json({ text: extractedText });
  } catch (error) {
    console.error('Error calling OCR.space API:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF.' },
      { status: 500 }
    );
  }
}
