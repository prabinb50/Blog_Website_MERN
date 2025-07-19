# [Full Stack Blog Platform](https://blog-website-mern-gray.vercel.app/) 

This is a full stack blog website built using the `MERN stack`, `Tailwind CSS` for styling, and `Framer Motion`, `GSAP`, `React Bits` for animations.

---

## ✨ Features

### 🔐 User Authentication
- User registration and login with JWT authentication
- Protected routes that redirect unauthenticated users
- Password hashing for enhanced security

### ✍️ Content Management
- Create, read, update, and delete blog posts
- Rich text editing with media support
- Category management with image uploads
- Author attribution for blog posts

### 🔎 Search & Discovery
- Advanced search functionality with filters
- Sort by newest, oldest, or title
- Filter by author/username
- Category-based browsing

### 📱 Responsive Design
- Fully responsive layout (mobile and desktop)
- Intuitive navigation with loading states
- Toast notifications for user feedback
- Smooth animations using **Framer Motion**

---

## 🧰 Technology Stack

### 🔧 Frontend
- React.js  
- React Router for client-side routing  
- Tailwind CSS for styling  
- Axios for API communication  
- Framer Motion for animations  

### ⚙️ Backend
- Node.js with Express.js  
- MongoDB (with Mongoose ODM)  
- JWT for user authentication  
- Multer + Cloudinary for file/image uploads  
- RESTful API architecture  

---

## 🚀 Installation

### 📋 Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- NPM or Yarn

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/prabinb50/Blog_Website_MERN.git
cd Blog_Website_MERN

### 2. Backend Setup

i. Create a `backend` folder and navigate into it:

    cd backend
    npm init -y
    npm install express mongoose multer cloudinary cors dotenv jsonwebtoken bcrypt
    "type": "module", add this in package.json
    npm install --save-dev nodemon

ii. Create a `.env` file inside the `backend/` folder with the following variables:

    PORT = for example, 4000
    MONGODB_URI = your_mongodb_connection_string
    JWT_SECRET = your_jwt_secret
    CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name
    CLOUDINARY_API_KEY = your_cloudinary_api_key
    CLOUDINARY_API_SECRET = your_cloudinary_api_secret

### 3. Frontend Setup

i. Create a `frontend` folder and navigate into it:

    cd frontend
    npm create vite@latest

ii. Install and setup `Tailwind CSS`

iii. Install additional dependencies:

    npm install axios react-router-dom framer-motion

---

## ▶️ Running the Application

### 🔁 Start the Backend Server

    - cd backend
    - npm run dev

### 🌐 Start the Frontend Development Server

    - cd frontend
    - npm start

