import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import Footer_Section from "./components/Footer_Section";
import SinglePostPage from "./pages/singlePostPage";

const root = createRoot(document.getElementById("root")); // Create a root
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/single-posts" element={<SinglePostPage />} />
    </Routes>
    <Footer_Section />
  </BrowserRouter>
);
