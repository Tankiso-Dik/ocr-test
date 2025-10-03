
from flask import Flask, request, render_template
from ocr_utils import ocr_space_pdf
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file and file.filename.endswith('.pdf'):
        try:
            content = file.read()
            text = ocr_space_pdf(content)
            return render_template('result.html', text=text)
        except Exception as e:
            return f"An error occurred: {e}"
    else:
        return 'Invalid file type. Please upload a PDF.'

if __name__ == '__main__':
    app.run(debug=True)
