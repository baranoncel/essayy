### RapidAPI — AI Content Detector
Endpoint: https://ai-content-detector6.p.rapidapi.com/detect
Headers:
- `x-rapidapi-key=${AI_DETECTOR_KEY}`
- `x-rapidapi-host=ai-content-detector6.p.rapidapi.com`

### RapidAPI — AI Text Humanizer
Endpoint: https://ai-text-humanizer-multilingual-undetectable.p.rapidapi.com/humanize
Headers:
- `x-rapidapi-key=${AI_HUMANIZER_KEY}`
- `x-rapidapi-host=ai-text-humanizer-multilingual-undetectable.p.rapidapi.com`

### Firebase Analytics & Logging (GA4)
Client SDK initialised in `_app.tsx` with `initializeApp` and `getAnalytics`.  
Server‑side events sent via **Measurement Protocol v2** using HTTPS POST to:
`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`

### Resend — Transactional Email
Endpoint: `https://api.resend.com/emails`
Headers:
- `Authorization: Bearer ${RESEND_API_KEY}`
- `Content-Type: application/json`

> **Edge Secret**: All third‑party keys live in Vercel / Supabase config and are never exposed to the browser. 