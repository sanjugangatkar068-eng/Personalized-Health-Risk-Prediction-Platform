# HealthHub — Frontend + Backend

```
healthhub/
├── backend/
│   ├── server.js       ← Express REST API
│   └── package.json
└── frontend/
    └── index.html      ← Static UI (calls backend)
```

---

## Backend (Node.js / Express)

### Install & run
```bash
cd backend
npm install
npm start          # production  →  http://localhost:3001
npm run dev        # hot-reload (nodemon)
```

### API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check — returns DB size |
| POST | `/api/risk/predict` | Cardiovascular risk prediction |
| GET | `/api/medibot/conditions` | List all 50 conditions |
| POST | `/api/medibot/search` | Search by name or symptoms |
| POST | `/api/medibot/severity` | Severity assessment |

#### POST `/api/risk/predict`
```json
{
  "age": 50, "bmi": 27, "systolic_bp": 130, "cholesterol": 200,
  "smoker": 0, "diabetes": 0, "family_history": 0, "pm25": 30, "exercise": 2
}
```
Response:
```json
{
  "probability": 0.31,
  "risk_label": "LOW",
  "bmi_category": "Overweight",
  "recommendations": ["Increase physical activity…"]
}
```

#### POST `/api/medibot/search`
```json
{ "query": "fever and cough" }
```
Response:
```json
{
  "match": "influenza",
  "method": "symptom",
  "data": { "description": "…", "causes": […], "symptoms": […], "remedies": […] }
}
```

#### POST `/api/medibot/severity`
```json
{ "age": 45, "pain": 7 }
```
Response:
```json
{
  "level": "moderate",
  "label": "MODERATE — MEDICAL CONSULTATION ADVISED",
  "body": "Pain score: 7/10. Schedule an appointment with your physician promptly.",
  "advisories": []
}
```

---

## Frontend (Static HTML)

Open `frontend/index.html` directly in a browser **after** the backend is running.

```bash
# simplest way — open directly
open frontend/index.html

# or serve with any static server
npx serve frontend
python3 -m http.server 8080 --directory frontend
```

The frontend points to `http://localhost:3001` (configured via `API_BASE` at the top of the `<script>` block). Change that constant if you deploy the backend elsewhere.

An **API status pill** in the top-right corner shows `API ONLINE` (green) or `API OFFLINE` (red) and re-checks every 30 seconds.

---

## CORS

The backend uses the `cors` package and allows all origins by default. For production, restrict it:

```js
app.use(cors({ origin: 'https://yourdomain.com' }));
```
