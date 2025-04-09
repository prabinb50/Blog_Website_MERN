import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import Footer_Section from "./components/Footer_Section";

import SinglePostPage from "./pages/singlePostPage";

import ContactUsPage from "./pages/ContactUsPage";
import { Bounce, ToastContainer } from "react-toastify";
import BlogPage from "./pages/BlogPage";

const root = createRoot(document.getElementById("root")); // Create a root
root.render(
  <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/single-posts" element={<SinglePostPage />} />

      <Route path="/home" element={<App />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/single-post" element={<App />} />
      <Route path="/categories" element={<App />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/account" element={<App />} />


    </Routes>
    <Footer_Section />
  </BrowserRouter>
);
