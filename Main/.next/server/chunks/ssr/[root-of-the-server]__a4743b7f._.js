module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/contextWindow.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Controls how many prior messages are sent with each request.
// Tweak this number to balance context vs. token usage.
__turbopack_context__.s({
    "MAX_HISTORY_MESSAGES": (()=>MAX_HISTORY_MESSAGES)
});
const MAX_HISTORY_MESSAGES = 12; // last 12 messages (6 user+assistant turns)
}}),
"[project]/app/chatbot/Chatbot.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Chatbot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contextWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contextWindow.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Chatbot() {
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [chatbotReply, setChatbotReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Keep a minimal conversation history for context window
    // Each item: { role: 'user' | 'assistant', content: string }
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [copyBtnActive, setCopyBtnActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyMaterialBtnActive, setCopyMaterialBtnActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSendMessage = async ()=>{
        const message = inputMessage.trim();
        // Don't send empty messages
        if (!message) return;
        setInputMessage(''); // Clear input field
        if (isSending) return;
        setIsSending(true);
        try {
            const res = await fetch("/api/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // Send the new user message and recent history
                    prompt: message,
                    history: history.slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contextWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_HISTORY_MESSAGES"])
                })
            });
            const data = await res.json();
            setChatbotReply(data.reply || "⚠️ No response from AI model.");
            // Update local history with this turn
            const assistantReply = data.reply || '';
            setHistory((prev)=>{
                const next = [
                    ...prev,
                    {
                        role: 'user',
                        content: message
                    },
                    {
                        role: 'assistant',
                        content: assistantReply
                    }
                ];
                // Keep only the last N messages
                return next.slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contextWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_HISTORY_MESSAGES"]);
            });
            // Keep copy indicator active until user copies the message
            setCopyBtnActive(true);
        } catch (err) {
            console.error("Error sending message to Gemini route:", err);
            setChatbotReply("⚠️ Error connecting to Gemini.");
        } finally{
            setIsSending(false);
        }
    };
    const handleFileUpload = async (event)=>{
        const file = event.target.files[0];
        if (!file) return;
        setIsSending(true);
        setChatbotReply('Extracting text from PDF...');
        try {
            const fileReader = new FileReader();
            fileReader.onload = async ()=>{
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
                    setChatbotReply(data.text);
                } else {
                    setChatbotReply(data.error || 'Failed to extract text.');
                }
            };
            fileReader.readAsArrayBuffer(file);
        } catch (err) {
            console.error('Error uploading file:', err);
            setChatbotReply('⚠️ Error uploading file.');
        } finally{
            setIsSending(false);
        }
    };
    const onKeyDown = (e)=>{
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!isSending) handleSendMessage();
        }
    };
    const handleCopyChatbot = ()=>{
        if (!chatbotReply) return;
        navigator.clipboard.writeText(chatbotReply);
        // Clear the indicator only after copying
        setCopyBtnActive(false);
    };
    const handleCopyMaterial = async ()=>{
        try {
            const res = await fetch('/material');
            if (!res.ok) throw new Error('Failed to load material');
            const text = await res.text();
            await navigator.clipboard.writeText(text || '');
            setCopyMaterialBtnActive(true);
            setTimeout(()=>setCopyMaterialBtnActive(false), 1500);
        } catch (e) {
            console.error('Error copying material:', e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chatbot-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "chatbot-input",
                type: "text",
                autoComplete: "off",
                style: {
                    width: '150px',
                    padding: '8px',
                    borderRadius: '6px',
                    backgroundColor: '#4d73bf',
                    border: 'none',
                    outline: 'none',
                    color: 'white',
                    fontSize: '12px'
                },
                value: inputMessage,
                onChange: (e)=>setInputMessage(e.target.value),
                onKeyDown: onKeyDown,
                onFocus: (e)=>e.target.placeholder = '',
                onBlur: (e)=>e.target.placeholder = ''
            }, void 0, false, {
                fileName: "[project]/app/chatbot/Chatbot.js",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSendMessage,
                className: "chatbot-send-button",
                disabled: isSending,
                children: isSending ? '…' : 'S'
            }, void 0, false, {
                fileName: "[project]/app/chatbot/Chatbot.js",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "chatbot-copy",
                onClick: handleCopyChatbot,
                className: `chatbot-send-button ${copyBtnActive ? 'active' : ''}`,
                disabled: !chatbotReply,
                children: "C"
            }, void 0, false, {
                fileName: "[project]/app/chatbot/Chatbot.js",
                lineNumber: 145,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "chatbot-copy-material",
                onClick: handleCopyMaterial,
                className: `chatbot-send-button ${copyMaterialBtnActive ? 'active' : ''}`,
                children: "C"
            }, void 0, false, {
                fileName: "[project]/app/chatbot/Chatbot.js",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleFileUpload,
                style: {
                    display: 'none'
                },
                accept: ".pdf"
            }, void 0, false, {
                fileName: "[project]/app/chatbot/Chatbot.js",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>fileInputRef.current.click(),
                className: "chatbot-send-button",
                children: "U"
            }, void 0, false, {
                fileName: "[project]/app/chatbot/Chatbot.js",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/chatbot/Chatbot.js",
        lineNumber: 120,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a4743b7f._.js.map