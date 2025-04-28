import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MobileNavigation from "./MobileMenu";
import SearchSection from "./SearchSection";

export default function SecondNavbar() {
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu
  const [scrolled, setScrolled] = useState(false); // State for scroll effect
  const open = Boolean(anchorEl); // Boolean to check if dropdown is open

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the clicked element
  };

  const handleClose = () => {
    setAnchorEl(null); // Reset the anchor element to close the dropdown
  };

  return (
    <motion.div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 shadow-md"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-11/12 mx-auto">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-4">
          {/* Left section: Mobile menu & Logo */}
          <div className="flex items-center">
            {/* Mobile Navigation - only visible on small screens */}
            <div className="lg:hidden mr-2">
              <MobileNavigation />
            </div>

            {/* Logo  */}
            <Link to="/">
              <motion.img
                src="/header-logo1.png"
                alt="Vexon Logo"
                className="h-6 sm:h-7 md:h-8 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Link>
          </div>

          {/* Center section: Navigation links - hidden on mobile */}
          <motion.div
            className="hidden lg:flex items-center justify-between space-x-5 xl:space-x-8 font-semibold text-base xl:text-lg opacity-85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Nav links with hover animations */}
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/single-post">Single Post</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>

            {/* Account dropdown */}
            <div>
              <motion.span
                className="hover:text-purple-600 cursor-pointer relative group"
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}>
                Account
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.span>

              <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "account-button",
                }}
                PaperProps={{
                  elevation: 3,
                  style: {
                    borderRadius: '12px',
                    marginTop: '8px'
                  }
                }}>

                {/* Dropdown menu items */}
                <MenuItem onClick={handleClose}>
                  <Link to="/sign-up" className="text-black hover:text-purple-600 transition-colors w-full">
                    Sign Up
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/login" className="text-black hover:text-purple-600 transition-colors w-full">
                    Login
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </motion.div>

          {/* Right section: Search icon and Subscribe button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search section */}
            <SearchSection />

            {/* Subscribe button - responsive sizing */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={"/sign-up"}
                className="bg-purple-800 text-white font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 md:py-3 rounded-full hover:bg-black transition duration-300 ease-in-out cursor-pointer"
              >
                Subscribe
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Custom NavLink component with animation
const NavLink = ({ to, children }) => {
  return (
    <motion.div className="relative group">
      <Link to={to} className="hover:text-purple-600 duration-300">
        {children}
      </Link>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-purple-600 w-0 group-hover:w-full transition-all duration-300"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </motion.div>
  );
};
