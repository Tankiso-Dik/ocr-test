module.exports = {

"[project]/.next-internal/server/app/api/gemini/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/systemPrompt.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/lib/systemPrompt.js'

Expected a semicolon`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/app/api/gemini/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$systemPrompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/systemPrompt.js [app-route] (ecmascript)");
;
;
async function POST(request) {
    const body = await request.json();
    const { prompt, history = [], model = 'gemini-1.5-flash', temperature = 0.7, top_p = 1, max_tokens = 4096, system = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$systemPrompt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_PROMPT"] } = body || {};
    if (!prompt) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: '⚠️ No message received.'
        }, {
            status: 400
        });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('GEMINI_API_KEY is not set.');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: '⚠️ Server configuration error: API key missing.'
        }, {
            status: 500
        });
    }
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`;
        // Map history to Gemini's expected structure
        const mappedHistory = Array.isArray(history) ? history.map((m)=>({
                role: m?.role === 'assistant' ? 'model' : 'user',
                parts: [
                    {
                        text: String(m?.content ?? '')
                    }
                ]
            })) : [];
        // Clamp sizes for stability (raised limits)
        const clampStr = (s, max = 10000)=>String(s).slice(0, max);
        const safePrompt = clampStr(prompt, 30000);
        const safeMappedHistory = mappedHistory.slice(-50).map((m)=>({
                role: m.role,
                parts: [
                    {
                        text: clampStr(m.parts?.[0]?.text ?? '')
                    }
                ]
            }));
        const payload = {
            contents: [
                ...safeMappedHistory,
                {
                    role: 'user',
                    parts: [
                        {
                            text: safePrompt
                        }
                    ]
                }
            ],
            systemInstruction: {
                role: 'system',
                parts: [
                    {
                        text: system
                    }
                ]
            },
            generationConfig: {
                temperature: Math.min(Math.max(temperature, 0), 2),
                topP: Math.min(Math.max(top_p, 0), 1),
                maxOutputTokens: Math.min(Math.max(max_tokens, 1), 8192)
            }
        };
        // Add a timeout to the upstream call
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), 30_000);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        clearTimeout(timeout);
        const result = await res.json();
        if (!res.ok) {
            console.error('Gemini error:', res.status, result);
            const message = result?.error?.message || res.statusText || 'Unknown error';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: `⚠️ Gemini error: ${message}`
            }, {
                status: res.status
            });
        }
        // Extract text from candidates -> content -> parts
        const candidates = result?.candidates || [];
        const parts = candidates[0]?.content?.parts || [];
        const text = parts.map((p)=>p?.text).filter(Boolean).join('\n');
        const reply = text || '⚠️ No response from Gemini.';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply
        });
    } catch (err) {
        console.error('Fetch error:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: '⚠️ Error reaching Gemini API.'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a8639e46._.js.map