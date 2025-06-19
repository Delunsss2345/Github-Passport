# 🛡️ GitHub OAuth Login - MERN App

Ứng dụng chứng thực người dùng bằng GitHub OAuth sử dụng **Passport.js**, **Express.js**, **MongoDB**, và giao diện React.

## 🚀 Demo
> https://github-passport.onrender.com/

## 🧰 Công nghệ sử dụng

- Frontend: React.js (Vite hoặc CRA)
- Backend: Node.js + Express.js
- OAuth: Passport.js (GitHub Strategy)
- Cơ sở dữ liệu: MongoDB
- Session/cookie: Express-session
- CORS, dotenv, mongoose, axios...

---

## 🛠️ Cài đặt

### 1. Clone dự án
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
### 2. Cấu hình môi trường
```bash
Tạo file .env trong thư mục backend/ với nội dung:
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
CALLBACK_URL=http://localhost:5000/auth/github/callback
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
```
### 3. Cài đặt dependencies
```bash
npm run build
```

### 4. Chạy ứng dụng
```bash
backend
npm run dev
frontend
npm run dev
```
