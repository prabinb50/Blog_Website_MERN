import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Custom styled button with hover and ripple effects
const AnimatedButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    color: '#000',
    borderRadius: '50px',
    padding: '10px 20px',
    textTransform: 'none',
    opacity: 0.85,
    marginTop: '8px',
    fontSize: '0.9rem',
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth hover animation
    '&:hover': {
        backgroundColor: '#e0e0e0', // Change background color on hover
        transform: 'scale(1.05)', // Slightly enlarge the button on hover
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 16px',
    },
}));

export default function LoginPage() {

    // State variables to manage form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset form fields after submission
        setEmail("");
        setPassword("");
    };

    return (
        <div className=''>
            {/* Page container with light purple background */}
            <div className="bg-[#f6f2ff]">
                {/* Navigation breadcrumb section */}
                <div className="flex items-center justify-center pt-13 sm:pt-16 md:pt-20 pb-2 overflow-x-auto px-4">
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight className="w-5 " />
                    <p className="font-bold whitespace-nowrap">Sign In</p>
                </div>

                {/* Main page title */}
                <p className="text-center font-bold text-5xl md:text-6xl pb-13 sm:pb-18 md:pb-20 px-4">Sign In</p>

                {/* Login Section */}
                <div className="flex justify-center pb-13 sm:pb-16 md:pb-20 px-4 sm:px-6">
                    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                        {/* Form header section */}
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome Back</h1>
                        <p className="text-gray-500 mb-8 font-semibold opacity-85 text-sm sm:text-base">
                            Please fill your email and password to sign in.
                        </p>

                        {/* Logi form */}
                        <form onSubmit={handleSubmit}>
                            {/* Email input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>

                            {/* Password input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <input
                                    id="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>

                            {/* Submit button */}
                            <motion.button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 mt-4 sm:mt-6 rounded-full hover:bg-black transition cursor-pointer font-semibold"
                                whileHover={{
                                    scale: 1.05, // Slightly enlarge on hover
                                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Add shadow on hover
                                }}
                                whileTap={{
                                    scale: 0.98, // Slightly shrink on click
                                }}
                            >
                                Sign In
                            </motion.button>

                            <div className="flex items-center justify-center mt-5 sm:mt-6">
                                <p className="text-sm">
                                    Don’t have an account?{" "}
                                    <Link to={"/sign-up"} className="text-purple-600 underline hover:text-purple-800">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>

                        {/* Divider with "Or" text */}
                        <div className="flex items-center my-4 sm:my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500 text-sm">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Sign Up With Google Button */}
                        <AnimatedButton
                            fullWidth
                            startIcon={
                                <img
                                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                    alt="Google"
                                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                    loading="lazy"
                                />
                            }
                        >
                            Sign Up With Google
                        </AnimatedButton>

                        {/* Sign Up With Facebook Button */}
                        <AnimatedButton
                            fullWidth
                            startIcon={
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    className="w-4 h-5 sm:w-5 sm:h-6 md:w-5 md:h-7"
                                    loading="lazy"
                                />
                            }
                            sx={{ marginTop: '12px' }}
                        >
                            Sign Up With Facebook
                        </AnimatedButton>
                    </div>
                </div>

            </div>
        </div>
    );
}