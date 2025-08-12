# [Full Stack Blog Platform](https://blog-website-mern-gray.vercel.app/) 

This is a full stack blog website built using the `MERN Stack`, `Tailwind CSS` for styling, and `Framer Motion`, `GSAP`, `React Bits` for animations.

*Deployment Link: https://blog-website-mern-gray.vercel.app/*

---

## ✨ Features

### 🔐 User Authentication
- User registration and login with JWT authentication
- Protected routes that redirect unauthenticated users
- Password hashing for enhanced security
- Password strength validation with visual feedback

### ✍️ Content Management
- Create, read, update, and delete blog posts
- Rich text editing with media support
- Category management with image uploads
- Author attribution for blog posts
- Responsive image handling with fallbacks

### 🔎 Search & Discovery
- Advanced search functionality with filters
- Sort by newest, oldest, or title
- Filter by author/username
- Category-based browsing
- URL parameter support for sharing search results

### 📱 Responsive Design
- Fully responsive layout (mobile, tablet, and desktop)
- Intuitive navigation with loading states
- Toast notifications for user feedback
- Smooth animations using **Framer Motion**
- Back button support for mobile navigation

### 🚀 Performance Optimizations
- Skeleton loaders for content loading states
- Lazy-loaded images for faster page loads
- Minimum loading time to prevent UI flashes
- Route-based scroll management for consistent user experience
- Error recovery with retry mechanisms
- API request timeout handling

---

## 🧰 Technology Stack

### 🔧 Frontend
- React.js  
- React Router for client-side routing  
- Tailwind CSS for styling  
- Axios for API communication  
- Framer Motion, GSAP, and React Bits for animations 
- React Toastify for notifications
- Material UI components   

### ⚙️ Backend
- Node.js with Express.js  
- MongoDB for database
- JWT for user authentication  
- Multer + Cloudinary for file/image uploads  
- RESTful API architecture  
- CORS support for cross-origin requests

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

    cd backend
    npm run dev

### 🌐 Start the Frontend Development Server

    cd frontend
    npm start








