import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import App from "./App";
import "./index.css";
import FooterSection from "./components/FooterSection";
import SinglePostPage from "./pages/singlePostPage";
import ContactUsPage from "./pages/ContactUsPage";
import { Bounce, ToastContainer } from "react-toastify";
import BlogPage from "./pages/BlogPage";
import SecondNavbar from "./components/SecondNavbar";
import CategoriesPage from "./pages/CategoriesPage";
import ScrollToTopArrow from "./components/ScrollToTopArrow";
import SocialMediaGame from './components/SocialMediaGame';
import AccountPage from "./pages/AccountPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function AppWrapper() {
  const location = useLocation(); // Get the current route

  return (
    <>
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
        <Route path="/account" element={<AccountPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* Conditionally render SocialMediaGame */}
      {location.pathname !== "/sign-up" && location.pathname !== "/login" && (
        <SocialMediaGame />
      )}

      <FooterSection />
      <ScrollToTopArrow />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter >
);