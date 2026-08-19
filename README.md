# 🛡️ SafeHer – Women Safety Platform

SafeHer is a women safety platform designed to provide quick access to emergency services, trusted contacts, SOS assistance, live location tracking, cab verification, evidence management, community reporting, and an AI-powered safety assistant.

## 🚀 Live Application

**Frontend:**  
https://safeher-frontend-1fw2.onrender.com

**Backend:**  
https://safeher-backend-0hzz.onrender.com

---

## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected API routes
- Secure user profile management

### 🚨 SOS Emergency System
- Trigger SOS alerts
- Emergency assistance
- Quick access to emergency services
- SOS information sent to trusted contacts

### 👥 Trusted Contacts
- Add trusted contacts
- View trusted contacts
- Update contact information
- Delete contacts

### 📍 Live Location Tracking
- Real-time location tracking
- Latitude and longitude updates
- Journey monitoring
- Location sharing functionality

### 🚕 Cab Verification
- Verify cab/vehicle information
- Store vehicle details
- Safety-focused cab verification

### 📁 Evidence Management
- Upload safety-related evidence
- Support for images and audio files
- Secure backend file handling

### 🏘️ Community Reporting
- Report unsafe incidents
- Share safety-related information
- Community-based safety awareness

### 🤖 AI Safety Assistant
- AI-powered safety guidance
- Practical safety recommendations
- Context-aware safety assistance

### 📞 Emergency Services
Quick access to emergency numbers:

| Service | Number |
|---|---:|
| Police | 112 |
| Women Helpline | 181 |
| Ambulance | 108 |
| Fire Brigade | 101 |

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React
- Leaflet / React Leaflet

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- CORS
- dotenv

### Deployment

- Frontend: Render Static Site
- Backend: Render Web Service
- Database: MongoDB Atlas

---

## 📂 Project Structure

```text
Women-Safety-Project/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
