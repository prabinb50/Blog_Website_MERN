import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModalClose from "@mui/joy/ModalClose";
import { motion, AnimatePresence } from "framer-motion";
import { AlignJustify, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router";

// Custom styled NavLink component with animation
const AnimatedNavLink = ({ to, children, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05, x: 10 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}>

    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold text-lg tracking-wider transition-colors duration-300 ${isActive ? "text-violet-700" : "text-gray-800 hover:text-violet-600"
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  </motion.div>
);

export default function MobileNavigation() {
  // State for drawer open/close
  const [open1, setOpen] = useState(false);

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Close drawer when screen size becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle dropdown menu open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle dropdown menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle link click in drawer (close drawer when navigating)
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Drawer animation variants
  const drawerVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <React.Fragment>
      {/* Hamburger Menu Icon - only visible on mobile */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AlignJustify
          onClick={() => setOpen(true)}
          className="flex lg:hidden cursor-pointer text-gray-800 hover:text-violet-700 transition-colors duration-300"
          size={28}
        />
      </motion.div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        open={open1}
        onClose={() => setOpen(false)}
        sx={{
          width: "100%",
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '380px' },
            boxSizing: 'border-box',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }
        }}
      >
        <AnimatePresence>
          {open1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={drawerVariants}
              className="h-full bg-white">

              {/* Drawer Header with Logo and Close Button */}
              <Box className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <motion.img
                  src="/header-logo1.png"
                  alt="Vexon Logo"
                  className="h-10 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />

                <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <ModalClose
                    id="close-icon"
                    sx={{
                      position: "initial",
                      color: "black",
                      '&:hover': {
                        color: '#7c3aed',
                        backgroundColor: 'rgba(124, 58, 237, 0.1)'
                      }
                    }}
                  />
                </motion.div>
              </Box>

              {/* Drawer Content */}
              <div className="flex flex-col h-[calc(100%-70px)] overflow-y-auto">
                {/* Navigation Links */}
                <motion.div
                  className="flex flex-col px-8 py-6 gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}>

                  <AnimatedNavLink to="/" onClick={handleLinkClick}>Home</AnimatedNavLink>
                  <AnimatedNavLink to="/blog" onClick={handleLinkClick}>Blog</AnimatedNavLink>
                  <AnimatedNavLink to="/single-post" onClick={handleLinkClick}>Single Post</AnimatedNavLink>
                  <AnimatedNavLink to="/categories" onClick={handleLinkClick}>Categories</AnimatedNavLink>
                  <AnimatedNavLink to="/contact" onClick={handleLinkClick}>Contact Us</AnimatedNavLink>

                  {/* Account dropdown */}
                  <motion.div
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}>

                    <span
                      className="font-semibold text-lg tracking-wider cursor-pointer text-gray-800 hover:text-violet-600 transition-colors duration-300"
                      onClick={handleClick}>
                      Account
                    </span>

                    <Menu
                      id="account-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "account-button",
                      }}
                      sx={{
                        "& .MuiPaper-root": {
                          borderRadius: "8px",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          mt: 1.5
                        }
                      }}>

                      {/* Dropdown menu items */}
                      <MenuItem onClick={handleClose} sx={{ minWidth: "150px" }}>
                        <NavLink to="/sign-up" className="text-gray-800 hover:text-violet-600 font-medium w-full">
                          Sign Up
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <NavLink to="/login" className="text-gray-800 hover:text-violet-600 font-medium w-full">
                          Login
                        </NavLink>
                      </MenuItem>
                    </Menu>
                  </motion.div>
                </motion.div>

                {/* Contact Information Section */}
                <motion.div
                  className=" bg-gray-50 px-8 py-6 space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}>

                  <h3 className="text-xl text-gray-800 font-semibold mb-4">Get in touch</h3>

                  {/* Email conatct item */}
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}>

                    <div className="bg-violet-100 p-2 rounded-full">
                      <Mail className="text-violet-700" size={20} strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-600 hover:text-violet-600 transition-colors duration-300 cursor-pointer">
                      support@vexon.com
                    </p>
                  </motion.div>

                  {/* Address contact item */}
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}>

                    <div className="bg-violet-100 p-2 rounded-full mt-1">
                      <MapPin className="text-violet-700" size={20} strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-600 hover:text-violet-600 transition-colors duration-300 cursor-pointer">
                      Kathmandu, Nepal +0123, Bagmati Province N.O. : 3
                    </p>
                  </motion.div>

                  {/* Phone contact item */}
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}>

                    <div className="bg-violet-100 p-2 rounded-full">
                      <Phone className="text-violet-700" size={20} strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-600 hover:text-violet-600 transition-colors duration-300 cursor-pointer">
                      +9779784563120
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </React.Fragment>
  );
}
