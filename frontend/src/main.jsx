import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import App from './App.jsx'
import "./index.css";
import FooterSection from "./components/FooterSection";
import SinglePostPage from "./pages/singlePostPage.jsx";
import ContactUsPage from "./pages/ContactUsPage";
import { Bounce, ToastContainer } from "react-toastify";
import BlogPage from "./pages/BlogPage";
import SecondNavbar from "./components/SecondNavbar";
import CategoriesPage from "./pages/CategoriesPage";
import ScrollToTopArrow from "./components/ScrollToTopArrow";
import SocialMediaGame from './components/SocialMediaGame';
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchPage from "./pages/SearchPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import DefaultSinglePostPage from "./pages/DefaultSinglePostPage.jsx";
import RouteScrollReset from "./components/RouteScrollReset.jsx";

function AppWrapper() {
  const location = useLocation(); // Get the current route

  const isAuthenticated = localStorage.getItem('myToken'); // Check authentication status

  return (
    <>
      {/* Reset scroll position on route change */}
      <RouteScrollReset />

      {/* Only show navbar if user is authenticated */}
      {isAuthenticated && <SecondNavbar />}

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
        {/* Authentication Routes */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />

        {/* Redirect root to sign-up if not authenticated, otherwise to home */}
        <Route path="/" element={
          isAuthenticated ? <App /> : <Navigate to="/sign-up" replace />
        } />

        {/* Protected Routes */}
        <Route path="/single-post" element={
          <ProtectedRoute>
            <DefaultSinglePostPage />
          </ProtectedRoute>
        } />

        <Route path="/single-post/:id" element={
          <ProtectedRoute>
            <SinglePostPage />
          </ProtectedRoute>
        } />

        <Route path="/blog" element={
          <ProtectedRoute>
            <BlogPage />
          </ProtectedRoute>
        } />

        <Route path="/categories" element={
          <ProtectedRoute>
            <CategoriesPage />
          </ProtectedRoute>
        } />

        <Route path="/contact" element={
          <ProtectedRoute>
            <ContactUsPage />
          </ProtectedRoute>
        } />

        <Route path="/search" element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        } />

        {/* Catch all - redirect to sign-up */}
        <Route path="*" element={<Navigate to="/sign-up" replace />} />
        {/* <Route path="/single-post" element={<Navigate to="/single-post/1" replace />} /> */}
      </Routes>

      {/* Conditionally render SocialMediaGame for authenticated users only */}
      {isAuthenticated && location.pathname !== "/sign-up" && location.pathname !== "/login" && (
        <SocialMediaGame />
      )}

      {/* Scroll to top arrow is always shown */}
      <ScrollToTopArrow />

      {/* Show footer only if user is authenticated */}
      {isAuthenticated && <FooterSection />}
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);