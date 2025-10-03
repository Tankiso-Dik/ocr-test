# OCR Functionality Export

This directory contains the extracted OCR functionality from the main project.

## Files:
- `Ocr.js`: React component for the OCR UI (upload button and text input for results).
- `ocr.css`: Styles for the `Ocr.js` component.
- `api/ocr/route.js`: Next.js API route that handles PDF uploads and calls the OCR.space API.

## Usage in a New Project:

1.  **Copy these files** into your new Next.js project, maintaining their relative paths (e.g., `Ocr.js` and `ocr.css` in a component directory, `api/ocr/route.js` in your `app/api` directory).
2.  **Integrate `Ocr.js`** into your desired layout or page component.
3.  **Environment Variable:** Ensure you set the `OCR_SPACE_API_KEY` environment variable in your new project's `.env.local` file or hosting platform settings.

    Example `.env.local` entry:
    ```
    OCR_SPACE_API_KEY=YOUR_OCR_SPACE_API_KEY
    ```

This setup allows you to easily reuse the OCR functionality in another Next.js application.
