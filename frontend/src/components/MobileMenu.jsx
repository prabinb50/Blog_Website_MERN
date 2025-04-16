import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ModalClose from "@mui/joy/ModalClose";
import { AlignJustify, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function MobileNavigation() {
  const [open1, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element to the clicked element
  };

  const handleClose = () => {
    setAnchorEl(null); // Reset the anchor element to close the dropdown
  };

  return (
    <React.Fragment>
      <AlignJustify
        onClick={() => setOpen(true)}
        className="flex lg:hidden cursor-pointer"
      />
      <Drawer
        open={open1}
        onClose={() => setOpen(false)}
        sx={{ width: "100vw" }}
      >
        <Box className="flex  items-center justify-between px-4 py-2">
          <img
            src="/header-logo1.png"
            alt="Vexon Logo"
            className="h-8 object-cover "
          />

          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>

        <div className="flex flex-col mt-8 gap-8">
          {/* pages */}
          <div className="flex flex-col px-8  gap-4">
            <NavLink to="/" className="font-semibold text-lg  tracking-wider">
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className="font-semibold text-lg  tracking-wider"
            >
              Blog
            </NavLink>
            <NavLink
              to="/single-post"
              className="font-semibold text-lg  tracking-wider"
            >
              Single Post
            </NavLink>
            <NavLink
              to="/categories"
              className="font-semibold text-lg  tracking-wider"
            >
              Categories
            </NavLink>
            <NavLink
              to="/contact"
              className="font-semibold text-lg  tracking-wider"
            >
              Contact Us
            </NavLink>

            {/* Account dropdown */}
            <div>
              <span
                className="font-semibold text-lg  tracking-wider"
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
                  <NavLink to="/sign-up" className="text-black">
                    Sign Up
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/login" className="text-black">
                    Login
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>
          </div>

          {/* Center */}
          <div className=" px-4 space-y-4">
            <p className="text-xl text-black font-semibold">Get in touch</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail
                  className="opacity-80 text-violet-700"
                  strokeWidth={1.5}
                />
                <p className="hover:text-violet-500 opacity-60 duration-500 cursor-pointer">
                  support@vexon.com
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  className="opacity-80 text-violet-700"
                  size={48}
                  strokeWidth={1.5}
                />
                <p className="hover:text-violet-500 opacity-60 tracking-wide duration-500 cursor-pointer">
                  Kathmandu,Nepal +0123, Bagmati Province N.O. : 3
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone
                  className="opacity-80 text-violet-700"
                  size={24}
                  strokeWidth={1.5}
                />
                <p className="hover:text-violet-500 opacity-60 duration-500 cursor-pointer">
                  +9779784563120
                </p>
              </div>
            </div>
          </div>

          {/* fotter section */}
          <div className=" px-4 space-y-4">
            <p className="text-xl text-black font-semibold">
              Our Social Network
            </p>

            <div className="flex items-center gap-2 xl:gap-4 lg:gap-1">
              <FaFacebookF
                size={36}
                className="text-white border  cursor-pointer w-max p-2 rounded-full bg-violet-600  duration-700 "
              />
              <FaLinkedinIn
                size={36}
                className="text-white border  cursor-pointer w-max p-2 rounded-full bg-violet-600  duration-700 "
              />
              <FaInstagram
                size={36}
                className="text-white border  cursor-pointer w-max p-2 rounded-full bg-violet-600  duration-700 "
              />
              <FaXTwitter
                size={36}
                className="text-white border  cursor-pointer w-max p-2 rounded-full bg-violet-600  duration-700 "
              />
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
