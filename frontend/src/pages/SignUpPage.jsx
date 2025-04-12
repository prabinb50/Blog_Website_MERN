import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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
    return (
        <div>
            <div className="bg-[#f6f2ff]">
                <div className="flex items-center justify-center pt-20">
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight />
                    <p className="font-bold">Sign Up</p>
                </div>

                {/* Main page title */}
                <p className="text-center font-bold text-6xl pb-20">Sign Up</p>

                {/* Create Your Section Section */}
                <div className="flex justify-center pb-25 ">
                    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                        <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
                        <p className=" text-gray-500 mb-8 font-semibold opacity-85">
                            Create an account today and start using Vexon
                        </p>
                        <form className='s'>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-2 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-2 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-2 mt-3 rounded-lg hover:bg-black transition cursor-pointer"
                            >
                                Create An Account
                            </button>

                            <div className="flex items-center mt-4">
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

                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Sign Up With Google Button */}
                        <AnimatedButton
                            fullWidth
                            className=''
                            startIcon={
                                <img
                                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                    alt="Google"
                                    className="w-5 h-5"
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
                                    className="w-5 h-5"
                                />
                            }
                            sx={{ marginTop: '10px' }}
                        >
                            Sign Up With Facebook
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </div>
    );
}