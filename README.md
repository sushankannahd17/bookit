# 🏝️ BookIt — Fullstack Experience Booking App

BookIt is a **fullstack MERN application** designed for booking and managing unique experiences.  
It includes a **Vite React frontend**, an **Express + MongoDB backend**, and supports **single-domain deployment on Vercel**.

---

## 🚀 Features

- 🌐 Fullstack MERN app (MongoDB, Express, React, Node.js)
- 💾 MongoDB Atlas integration
- 🖼️ Image uploads stored in `/uploads`
- 💸 Dynamic pricing and promo code system
- 📅 Slot booking with reference ID generation
- ☁️ One-click Vercel deployment (frontend + backend together)

---

## 🧱 Project Structure

```
bookit/
├── backend/
│   ├── index.js
│   ├── db.js
│   ├── routes/
│   │   ├── experiences.js
│   │   ├── bookings.js
│   │   └── promo.js
│   ├── models/
│   ├── uploads/
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
│
└── vercel.json
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env.example`)
```env
PORT=4000
MONGO_URI=your_mongodb_atlas_connection_string
```

### Frontend (`frontend/.env.example`)
```env
VITE_API_BASE_URL=/api
```

---

## 🧩 Local Development

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourusername/bookit.git
cd bookit
```

### 2️⃣ Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3️⃣ Run locally
In two terminals:

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run dev
```

Access app at: [http://localhost:5173](http://localhost:5173)

---

## ☁️ Vercel Deployment (Single Domain)

This setup is ready for single-domain deployment on **Vercel**.

### Steps:
1. Push the full project to GitHub.  
2. Go to [Vercel](https://vercel.com).  
3. Import your repository.  
4. Add environment variables from `.env.example`.  
5. Vercel automatically detects:
   - Frontend (Vite)
   - Backend (Express via `api/index.js` proxy route)
6. Once deployed, the frontend and backend share the same domain:
   ```
   https://yourapp.vercel.app
   ├── /api/experiences
   ├── /api/bookings
   └── /api/promo
   ```

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite), Tailwind CSS |
| Backend | Express.js, Node.js |
| Database | MongoDB Atlas |
| Deployment | Vercel |
| File Storage | Local uploads folder |

---

## 📸 Screenshots

| Feature | Preview |
|----------|----------|
| Homepage | ![Homepage](assets/screenshot1.png) |
| Experience Page | ![Experience](assets/screenshot2.png) |
| Booking Success | ![Booking](assets/screenshot3.png) |

---

## 🧑‍💻 Author

**Sushan Kannah D**  
📧 [Contact](mailto:test@mail.com)  
🌐 [GitHub](https://github.com/sushankannahd17)

---

## 🪄 License

This project is licensed under the **MIT License**.

---

### ⭐ If you like this project, consider giving it a star on GitHub!
