 PulseOps — Real-Time Treasury & Operations Dashboard (Frontend)

PulseOps is a **production-style, frontend-only React application** that simulates a real-time treasury and operations dashboard similar to internal tooling used in fintech companies.

The project focuses on **engineering quality, data trust, and operational UX**, rather than mockups or visual demos.

---

## 🎯 Purpose

Internal operations teams rely on dashboards that are:
- Accurate
- Real-time
- Reliable
- Easy to reason about under pressure

PulseOps is designed to reflect those constraints by modelling **live data streams**, **data freshness**, and **operator-focused workflows**, without requiring a backend.

---

## Key Features

- **Live data streaming (WebSocket-style simulation)**
- **Real-time KPI updates with motion feedback**
- **“Last updated” timestamps to indicate data freshness**
- **Dark mode with animated toggle and persistence**
- **Smooth page transitions**
- **Component-driven, scalable architecture**
- **Fintech-style UI focused on clarity and usability**

---

## Engineering Highlights

- Event-driven UI updates using a simulated WebSocket layer
- Clean separation of concerns (services, hooks, components)
- Production-style React hooks with proper lifecycle management
- Animations used only where they improve clarity
- Persistent user preferences (theme)
- UX patterns aligned with internal operational tooling

This project intentionally avoids mock APIs and static data to better resemble **real-world asynchronous systems**.

---

## 🛠 Tech Stack  

- **React 18**  
- **TypeScript**  
- **Tailwind CSS**  
- **Framer Motion**  
- **React Router**   
- **Vite**  

---

## 📁 Project Structure

src/  
├─ components/ # Reusable UI components  
├─ hooks/ # Custom React hooks  
├─ pages/ # Application pages  
├─ services/ # WebSocket simulation layer  
├─ utils/ # Utility helpers  
├─ App.tsx  
├─ main.tsx  
└─ index.css  

---

## 🔴 Real-Time Data Model

A simulated WebSocket service emits metric updates at fixed intervals.

- The UI subscribes to events
- State updates incrementally
- Each update records a timestamp
- The UI displays relative freshness (e.g. “Just now”, “5s ago”)

This mirrors how real trading, treasury, and monitoring systems behave.

---

## 🌗 Dark Mode

- Animated toggle
- Persists user preference via `localStorage`
- Respects system color scheme by default
- Smooth transitions with no flicker

---

## 🎬 Motion & UX Philosophy

Motion is used as **feedback**, not decoration:
- Page transitions
- KPI value changes
- Live status indicators

There are no unnecessary or distracting animations.

---

## 🚀 Running Locally

### Install dependencies

npm install     
Start development server  
npm run dev   
Open http://localhost:5173

👤 Author  
Aswardha Medavaram   
Full Stack Developer

📌 Notes  
This project is frontend-only by design.   
The focus is on architecture, realism, and operational UX, not backend implementation.
