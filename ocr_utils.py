
import os
import requests
from dotenv import load_dotenv

load_dotenv()

def ocr_space_pdf(content):
    """Sends PDF content to OCR.space API and returns the extracted text."""

    api_key = os.getenv("API_KEY")
    if not api_key:
        raise ValueError("API_KEY not found in .env file")

    payload = {
        'apikey': api_key,
    }

    files = {
        'file': ('document.pdf', content, 'application/pdf')
    }

    response = requests.post(
        'https://api.ocr.space/parse/image',
        data=payload,
        files=files
    )

    response.raise_for_status()  # Raise an exception for bad status codes

    result = response.json()

    if result.get('IsErroredOnProcessing'):
        error_message = result.get('ErrorMessage', 'Unknown error')
        error_details = result.get('ErrorDetails', '')
        raise Exception(f"OCR.space API Error: {error_message} - {error_details}")

    if not result.get('ParsedResults'):
        raise Exception("No text found in the PDF.")

    # Concatenate text from all pages
    all_text = []
    for page_result in result['ParsedResults']:
        all_text.append(page_result.get('ParsedText', ''))
    
    return "\n".join(all_text)

