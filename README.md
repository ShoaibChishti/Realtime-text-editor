# 📝 Real-Time Collaborative Text Editor

A simple real-time collaborative text editor built with **React**, **TipTap**, **Yjs**, and **y-webrtc**.

Multiple users can collaboratively edit the same document in real-time directly in the browser using WebRTC.

---

## 🚀 Features

- Real-time collaborative editing
- Automatically synchronizes changes between peers
- User-specific cursor colors and awareness
- Built using modern tools (React + TypeScript + TailwindCSS + Yjs + TipTap)

---

## 📦 Tech Stack

- **React** (frontend framework)
- **TipTap** (editor)
- **Yjs** (real-time CRDT)
- **y-webrtc** (peer-to-peer connection)
- **TailwindCSS** (styling)

---

## 📁 Folder Structure

realtimetexteditor/
├── node_modules/
├── public/
│ └── ...
├── src/
│ ├── App.tsx
│ ├── main.tsx
│ └── Editor.tsx ✅ (Main collaborative editor logic)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts

## 🛠️ Installation & Running Locally

Follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/ShoaibChishti/Realtime-text-editor
cd realtimetexteditor
```
### 2. Install Dependencies

```bash
npm install
```

If you face dependency issues (e.g. y-prosemirror conflict), use:

```bash
npm install --legacy-peer-deps
```

### 3. Start the Development Server

```bash
npm run dev
The app will be available at: http://localhost:5173
```
