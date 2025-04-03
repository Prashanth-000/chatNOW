# Chat Now - Real-time Chat Application

## 📌 Overview
Chat Now is a real-time chat application built using **React (frontend)** and **Node.js with Socket.io (backend)**. It allows multiple users to send and receive messages instantly over WebSockets.

---

## 🚀 Features
- **Real-time Messaging:** Instant message exchange using WebSockets.
- **Multi-user Support:** Multiple users can chat in a shared room.
- **Persistent Chat History:** Messages stay visible in the chat window.
- **Environment Variables Support:** Uses `.env` files for configuration.
- **Responsive UI:** A clean and simple user interface with animations.

---

## 🛠️ Tech Stack
### **Frontend (React + Vite)**
- React
- Socket.io-client
- Vite (for fast development)
- CSS for styling

### **Backend (Node.js + Socket.io)**
- Node.js
- Socket.io
- dotenv (for environment variables)

---

## 📂 Project Structure
```
chat-now/
├── frontend/     # React app (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── .env
│   ├── package.json
├── backend/      # Node.js server
│   ├── server.js
│   ├── .env
│   ├── package.json
└── README.md     # Project documentation
```

---

## 🔧 Setup Instructions

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Prashanth-000/chatNOW.git
cd chat-now
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
Create a `.env` file inside `backend/`:
```
PORT=5000
CLIENT_URL=http://localhost:5173
```
Run the backend:
```sh
npm start
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
```
Create a `.env` file inside `frontend/`:
```
VITE_SOCKET_SERVER=http://localhost:5000
```
Run the frontend:
```sh
npm run dev
```

---

## 🎯 Usage
1. Open **http://localhost:5173** in multiple browser tabs.
2. Type messages and send them.
3. Messages will appear in real-time on all connected clients.

---

## 🎨 UI Enhancements
- Messages are displayed in a chat-style layout.
- Smooth animations for message display.
- Responsive design for mobile and desktop.

---

## ⚡ Future Improvements
- User authentication (sign-in, usernames, avatars).
- Private messaging support.
- Chat history saved in a database.

---

## 📜 License
This project is open-source and available under the **MIT License**.

Happy Coding! 🚀 By PFB-000

