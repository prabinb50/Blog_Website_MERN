import { ChevronRight, LoaderCircle, Eye, EyeOff } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { validateEmail, validateLoginPassword } from '../utils/FormValidation';

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

export default function LoginPage() {
    // initialize navigate function for redirection
    const navigate = useNavigate();

    // state variables to manage form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // state variables for validation errors
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // state variables to track if fields have been touched
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    // state variable to manage loading state
    const [isLoading, setIsLoading] = useState(false);

    // validate fields when they change
    useEffect(() => {
        if (emailTouched) validateEmail(email, setEmailError);
    }, [email, emailTouched]);

    useEffect(() => {
        if (passwordTouched) validateLoginPassword(password, setPasswordError);
    }, [password, passwordTouched]);

    // check if form is valid (used for enabling/disabling submit button)
    const isFormValid = () => {
        return !emailError && email.trim() !== "" &&
            !passwordError && password.trim() !== "";
    };

    // function to handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // validate all fields
            const isEmailValid = validateEmail(email, setEmailError);
            const isPasswordValid = validateLoginPassword(password, setPasswordError);

            // check if form is valid
            if (!isEmailValid || !isPasswordValid) {
                return;
            }

            setIsLoading(true);

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/login`, {
                email: email,
                password: password
            });

            setIsLoading(false);

            toast.success(response?.data?.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            localStorage.setItem("myToken", response?.data?.token);
            navigate('/'); // redirect to home page after successful login

            // reset form fields after submission
            setEmail("");
            setPassword("");
            setEmailTouched(false);
            setPasswordTouched(false);
        } catch (error) {
            setIsLoading(false);
            console.log("Error in login", error);

            toast.error("Invalid credentials, please try again", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    // state variable to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className=''>
            <div className="bg-[#f6f2ff] min-h-screen">
                <div className="flex items-center justify-center pt-13 sm:pt-16 md:pt-20 pb-2 overflow-x-auto px-4">
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight className="w-5 " />
                    <p className="font-bold whitespace-nowrap">Sign In</p>
                </div>

                {/* main page title */}
                <p className="text-center font-bold text-5xl md:text-6xl pb-13 sm:pb-18 md:pb-20 px-4">Sign In</p>

                {/* login Section */}
                <div className="flex justify-center pb-13 sm:pb-16 md:pb-20 px-4 sm:px-6">
                    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                        {/* form header section */}
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome Back</h1>

                        <p className="text-gray-500 mb-8 font-semibold opacity-85 text-sm sm:text-base">
                            Please fill your email and password to sign in.
                        </p>

                        {/* login form */}
                        <form onSubmit={handleSubmit} noValidate>
                            {/* email input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Email</label>

                                <input
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setEmailTouched(true)}
                                    type="email"
                                    placeholder="Email address"
                                    className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 ${emailTouched && emailError ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                                        }`}
                                />
                                {emailTouched && emailError && (
                                    <p className="mt-1 text-red-500 text-xs">{emailError}</p>
                                )}
                            </div>

                            {/* password input field */}
                            <div className="mb-4 relative">
                                <label className="block text-sm font-medium mb-2">Password</label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => setPasswordTouched(true)}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 ${passwordTouched && passwordError ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                                            }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {passwordTouched && passwordError && (
                                    <p className="mt-1 text-red-500 text-xs">{passwordError}</p>
                                )}
                            </div>

                            {/* submit button */}
                            <motion.button
                                type="submit"
                                className={`w-full py-3 mt-4 sm:mt-6 rounded-full cursor-pointer font-semibold flex items-center justify-center ${isFormValid()
                                    ? 'bg-purple-600 text-white hover:bg-black transition'
                                    : 'bg-purple-300 text-white cursor-not-allowed'
                                    }`}
                                whileHover={isFormValid() ? {
                                    scale: 1.05,
                                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                                } : {}}
                                whileTap={isFormValid() ? {
                                    scale: 0.98,
                                } : {}}
                                disabled={isLoading || !isFormValid()} // disable button when loading or form invalid
                            >
                                {isLoading && <LoaderCircle size={16} className="animate-spin mr-2" />}
                                Sign In
                            </motion.button>

                            <div className="flex items-center justify-center mt-5 sm:mt-6">
                                <p className="text-sm">
                                    Don't have an account?{" "}
                                    <Link to={"/sign-up"} className="text-purple-600 underline hover:text-purple-800">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>

                        {/* divider with "Or" text */}
                        <div className="flex items-center my-4 sm:my-6">
                            <hr className="flex-grow border-gray-300" />

                            <span className="mx-2 text-gray-500 text-sm">Or</span>

                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* sign Up With Google Button */}
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
                            Sign In With Google
                        </AnimatedButton>

                        {/* sign Up With Facebook Button */}
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
                            Sign In With Facebook
                        </AnimatedButton>
                    </div>
                </div>
            </div>
        </div>
    );
}