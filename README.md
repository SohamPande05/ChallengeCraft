# ChallengeCraft

## Overview

ChallengeCraft is a full-stack web application project. It features a modern frontend (React, Vite) and a backend (Python, FastAPI), following a modular structure for scalability and maintainability.

## Project Structure

```
ChallengeCraft/
├── backend/
│   ├── requirements.txt
│   └── src/
│       ├── database/
│       └── routes/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── auth/
│       ├── challenge/
│       ├── config/
│       ├── history/
│       ├── layout/
│       └── util/
└── README.md
```

## Features
- Modern React frontend (Vite, React Router)
- Clerk authentication integration
- Python backend (FastAPI)
- Modular code organization

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python src/main.py

```




