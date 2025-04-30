import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function MobileNavigation({ isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  // Effect to update active link based on current path
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when link is clicked
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <div className="z-50 flex items-center justify-center">
      {/* Hamburger menu button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 transition-colors duration-300 rounded-md focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile menu sidebar */}
      <motion.div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col`}
        initial={false}
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <img
              src="/header-logo1.png"
              alt="Logo"
              className="h-8"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 rounded-md focus:outline-none"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu links */}
        <div className="flex flex-col px-4 py-6 space-y-4 font-medium">
          <MobileNavLink
            to="/"
            active={activeLink === "/"}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            to="/blog"
            active={activeLink === "/blog"}
            onClick={() => handleLinkClick("/blog")}
          >
            Blog
          </MobileNavLink>
          <MobileNavLink
            to="/single-post"
            active={activeLink === "/single-post"}
            onClick={() => handleLinkClick("/single-post")}
          >
            Single Post
          </MobileNavLink>
          <MobileNavLink
            to="/categories"
            active={activeLink === "/categories"}
            onClick={() => handleLinkClick("/categories")}
          >
            Categories
          </MobileNavLink>
          <MobileNavLink
            to="/contact"
            active={activeLink === "/contact"}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact Us
          </MobileNavLink>

          {/* Conditional authentication links */}
          {isAuthenticated ? (
            // Show Logout button when authenticated
            <div className="py-2">
              <LogoutButton
                className="text-gray-800 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              />
            </div>
          ) : (
            // Show Sign Up and Login links when not authenticated
            <>
              <MobileNavLink
                to="/sign-up"
                active={activeLink === "/sign-up"}
                onClick={() => handleLinkClick("/sign-up")}
              >
                Sign Up
              </MobileNavLink>
              <MobileNavLink
                to="/login"
                active={activeLink === "/login"}
                onClick={() => handleLinkClick("/login")}
              >
                Login
              </MobileNavLink>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// Mobile nav link component
function MobileNavLink({ to, active, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block py-2 transition-colors duration-200 ${active ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
        }`}
    >
      {children}
    </Link>
  );
}

