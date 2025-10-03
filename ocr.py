
import sys
import os
from ocr_utils import ocr_space_pdf

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 ocr.py <path_to_pdf_file>")
    else:
        file_path = sys.argv[1]
        if not os.path.exists(file_path):
            print(f"Error: File not found at {file_path}")
        else:
            with open(file_path, "rb") as f:
                content = f.read()
            try:
                text = ocr_space_pdf(content)
                print("--- Extracted Text ---")
                print(text)
                print("----------------------")
            except Exception as e:
                print(f"An error occurred: {e}")
