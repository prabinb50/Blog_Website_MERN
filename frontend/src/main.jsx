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
import SecondNavbar from "./components/SecondNavbar";
import CategoriesPage from "./pages/CategoriesPage";
import ScrollToTopArrow from "./components/ScrollToTopArrow";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SecondNavbar />

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
      <Route path="/single-post" element={<SinglePostPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/account" element={<App />} />
    </Routes>

    <Footer_Section />
    <ScrollToTopArrow />
  </BrowserRouter>
);
