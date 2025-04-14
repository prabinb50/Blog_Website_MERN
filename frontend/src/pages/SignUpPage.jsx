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
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth hover animation
    '&:hover': {
        backgroundColor: '#e0e0e0', // Change background color on hover
        transform: 'scale(1.05)', // Slightly enlarge the button on hover
    },
}));

export default function SignUpPage() {

    // State variables to manage form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset form fields after submission
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            {/* Page container with light purple background */}
            <div className="bg-[#f6f2ff]">
                {/* Navigation breadcrumb section */}
                <div className="flex items-center justify-center pt-20">
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight />
                    <p className="font-bold">Sign Up</p>
                </div>

                {/* Main page title */}
                <p className="text-center font-bold text-6xl pb-20">Sign Up</p>

                {/* Sign Up Form Container */}
                <div className="flex justify-center pb-25 ">
                    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                        {/* Form header section */}
                        <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
                        <p className=" text-gray-500 mb-8 font-semibold opacity-85">
                            Create an account today and start using Vexon
                        </p>

                        {/* Registration form */}
                        <form className='' onSubmit={handleSubmit}>
                            {/* Name input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>

                            {/* Email input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>

                            {/* Password input field */}
                            <div className="mb-4"></div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />


                            {/* Submit button */}
                            <motion.button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 mt-7 rounded-full hover:bg-black transition cursor-pointer"
                                whileHover={{
                                    scale: 1.05, // Slightly enlarge on hover
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
                                }}
                                whileTap={{
                                    scale: 0.95, // Slightly shrink on click
                                }}
                            >
                                Create an Account
                            </motion.button>

                            {/* Terms and conditions checkbox */}
                            <div className="flex items-center justify-center mt-4">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                />
                                <p className="text-sm">
                                    I have read and agree to the{" "}
                                    <Link to={"/"} className="text-purple-600 underline">
                                        Terms & Conditions
                                    </Link>.
                                </p>
                            </div>
                        </form>

                        {/* Divider with "Or" text */}
                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Social login options */}
                        {/* Google sign-up button with icon */}
                        <AnimatedButton
                            fullWidth
                            className=''
                            startIcon={
                                <img
                                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                    alt="Google"
                                    className="w-7 h-7"
                                />
                            }
                        >
                            Sign Up With Google
                        </AnimatedButton>

                        {/* Facebook sign-up button with icon */}
                        <AnimatedButton
                            fullWidth
                            startIcon={
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    className="w-5 h-7"
                                />
                            }
                            sx={{ marginTop: '10px' }}
                        >
                            Sign Up With Facebook
                        </AnimatedButton>

                        {/* Link to login page for existing users */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link to="/login" className="text-purple-600  underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>

                    </div>
                </div >
            </div >
        </div >
    );
}