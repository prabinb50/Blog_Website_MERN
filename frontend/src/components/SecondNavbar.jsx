import React from 'react';
import { Link } from "react-router-dom";
import { Search } from 'lucide-react';

export default function SecondNavbar() {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex items-center justify-between px-6 py-4 ">
                {/* Left child: Logo */}
                <img src="/header-logo1.png" alt="Vexon Logo" className="h-8" />

                {/* Center child: Navigation links */}
                <div className="flex items-center justify-between space-x-4">
                    {/* Navigation links */}
                    <Link to="/home" className=" hover:text-purple-600">Home</Link>
                    <Link to="/blog" className="ml-4  hover:text-purple-600">Blog</Link>
                    <Link to="/single-posts" className="hover:text-purple-600">Single Posts</Link>
                    <Link to="/categories" className="ml-4  hover:text-purple-600">Categories</Link>
                    <Link to="/pages" className=" hover:text-purple-600">Pages</Link>
                    <Link to="/account" className="ml-4  hover:text-purple-600">Account</Link>
                </div>

                {/* Right child: Search icon and Subscribe Link to={} */}
                <div className="flex items-center space-x-4 ">
                    {/* Search icon */}
                    <Search className='cursor-pointer' />
                    {/* Subscribe button */}
                    <Link to={"/sign-up"} className="bg-purple-800 text-white font-semibold px-4 py-3 rounded-full hover:bg-black transition duration-300 ease-in-out cursor-pointer">
                        Subscribe
                    </Link >
                </div>
            </div>
        </div>
    );
}