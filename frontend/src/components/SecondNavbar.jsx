import React from 'react';
import { Link } from "react-router-dom";
import { Search } from 'lucide-react';

export default function SecondNavbar() {
    return (
        <div className="sticky top-0 bg-white z-50 shadow-md w-full">
            <div className="w-11/12 mx-auto">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Left child: Logo */}
                    <img src="/header-logo1.png" alt="Vexon Logo" className="h-8" />

                    {/* Center child: Navigation links */}
                    <div className="flex items-center justify-between space-x-4 font-semibold opacity-85">
                        <Link to="/" className="hover:text-purple-600">Home</Link>
                        <Link to="/blog" className="ml-4 hover:text-purple-600">Blog</Link>
                        <Link to="/single-post" className="hover:text-purple-600">Single Post</Link>
                        <Link to="/categories" className="ml-4 hover:text-purple-600">Categories</Link>
                        <Link to="/contact" className="hover:text-purple-600">Contact Us</Link>
                        <Link to="/account" className="ml-4 hover:text-purple-600">Account</Link>
                    </div>

                    {/* Right child: Search icon and Subscribe button */}
                    <div className="flex items-center space-x-4">
                        <Search className="cursor-pointer" />
                        <Link to={"/sign-up"} className="bg-purple-800 text-white font-semibold px-4 py-3 rounded-full hover:bg-black transition duration-300 ease-in-out cursor-pointer">
                            Subscribe
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}