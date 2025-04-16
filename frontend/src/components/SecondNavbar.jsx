import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MobileNavigation from "./MobileMenu";
import SearchSection from "./SearchSection";

export default function SecondNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the clicked element
  };

  const handleClose = () => {
    setAnchorEl(null); // Reset the anchor element to close the dropdown
  };

  return (
    <div className="sticky top-0 bg-white z-50 shadow-md w-full">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left child: Logo */}

          <MobileNavigation />
          <Link to="/">
            <img
              src="/header-logo1.png"
              alt="Vexon Logo"
              className="h-8 cursor-pointer"
            />
          </Link>

          {/* Center child: Navigation links */}
          <div className="hidden lg:flex items-center justify-between space-x-8 font-semibold text-lg opacity-85">
            <Link to="/" className="hover:text-purple-600  duration-300">
              Home
            </Link>
            <Link to="/blog" className=" hover:text-purple-600  duration-300">
              Blog
            </Link>
            <Link to="/single-post" className="hover:text-purple-600 duration-300">
              Single Post
            </Link>
            <Link to="/categories" className=" hover:text-purple-600 duration-300">
              Categories
            </Link>
            <Link to="/contact" className="hover:text-purple-600 duration-300">
              Contact Us
            </Link>

            {/* Account dropdown */}
            <div>
              <span
                className="hover:text-purple-600 cursor-pointer"
                onClick={handleClick} // Open dropdown on click
              >
                Account
              </span>
              <Menu
                id="account-menu"
                anchorEl={anchorEl} // Anchor element for the dropdown
                open={open} // Open state of the dropdown
                onClose={handleClose} // Close dropdown on menu close
                MenuListProps={{
                  "aria-labelledby": "account-button",
                }}
              >
                {/* Dropdown menu items */}
                <MenuItem onClick={handleClose}>
                  <Link to="/sign-up" className="text-black">
                    Sign Up
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/login" className="text-black">
                    Login
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>

          {/* Right child: Search icon and Subscribe button */}
          <div className="flex items-center space-x-4">
            {/* Search section */}

            <SearchSection/>
            
            {/* Subscribe button */}
            <Link
              to={"/sign-up"}
              className="bg-purple-800 text-white font-semibold px-4 py-3 rounded-full hover:bg-black transition duration-300 ease-in-out cursor-pointer"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
