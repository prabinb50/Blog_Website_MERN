import { ChevronRight, LoaderCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

// custom styled button 
const AnimatedButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    color: '#000',
    borderRadius: '50px',
    padding: '10px 20px',
    textTransform: 'none',
    opacity: 0.85,
    marginTop: '8px',
    fontSize: '0.9rem',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#e0e0e0',
        transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 16px',
    },
}));

export default function SignUpPage() {

    // Iiitialize navigate function for redirection
    const navigate = useNavigate();

    // state variables to manage form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // state variable to manage terms acceptance
    const [termsAccepted, setTermsAccepted] = useState(false);

    // state variable to manage loading state
    const [isLoading, setIsLoading] = useState(false);

    // function to handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // validate that terms are accepted
            if (!termsAccepted) {
                toast.error("Please accept the terms and conditions", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                return;
            }
            setIsLoading(true);

            // send a POST request to the server with JSON data
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/register`, {
                name,
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setIsLoading(false); // reset loading state after request

            // show success message 
            toast.success(response?.data?.message, {
                position: "top-right",
                autoClose: 200,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            navigate('/login'); // redirect to login page after successful registration

            // Reset form fields after submission
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setIsLoading(false);

            console.log("Error in creating user: ", error);

            toast.error("User already exists with this email please choose another email", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div>
            {/* page container with light purple background */}
            <div className="bg-[#f6f2ff] min-h-screen">
                {/* navigation breadcrumb section */}
                <div className="flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-2 overflow-x-auto px-4">
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight className="w-5 " />
                    <p className="font-bold whitespace-nowrap">Sign Up</p>
                </div>

                {/* main page title */}
                <p className="text-center font-bold text-5xl md:text-6xl pb-13 sm:pb-18 md:pb-20 px-4">Sign Up</p>

                {/* sign up form container */}
                <div className="flex justify-center pb-13 sm:pb-16 md:pb-20 px-4 sm:px-6 ">
                    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                        {/* form header section */}
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Create Your Account</h1>
                        <p className=" text-gray-500 mb-8 font-semibold opacity-85 text-sm sm:text-base">
                            Create an account today and start using Vexon
                        </p>

                        {/* registration form */}
                        <form onSubmit={handleSubmit} >
                            {/* name input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    id="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </div>

                            {/* email input field */}
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

                            {/* password input field */}
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

                            {/* submit button */}
                            <motion.button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 mt-4 sm:mt-6 rounded-full hover:bg-black transition cursor-pointer font-semibold flex items-center justify-center"
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                disabled={isLoading} // disable button when loading
                            >
                                {
                                    isLoading && <LoaderCircle size={16} className='animate-spin mr-2'></LoaderCircle>
                                }
                                Create an Account
                            </motion.button>

                            {/* terms and conditions checkbox */}
                            <div className="flex items-center justify-center mt-5 sm:mt-6">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mr-2  h-4 w-4 cursor-pointer"
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    required
                                />

                                <label htmlFor="terms" className="text-xs sm:text-sm cursor-pointer">
                                    I have read and agree to the{" "}
                                    <Link to={"/"} className="text-purple-600 underline hover:text-purple-800">
                                        Terms & Conditions
                                    </Link>.
                                </label>
                            </div>
                        </form>

                        {/* divider with "Or" text */}
                        <div className="flex items-center my-4 sm:my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500 text-sm">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Google sign-up button */}
                        <AnimatedButton
                            fullWidth
                            className=''
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

                        {/* facebook sign-up button */}
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

                        {/* link to login page for existing users */}
                        <div className="text-center mt-6 sm:mt-8">
                            <p className="text-sm text-gray-500 ">
                                Already have an account?{" "}
                                <Link to="/login" className="text-purple-600  underline hover:text-purple-800">
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