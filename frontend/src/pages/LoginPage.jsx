import { ChevronRight, LoaderCircle, Eye, EyeOff } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { validateEmail, validateLoginPassword } from '../utils/FormValidation';
import { AnimatedFade, AnimatedText } from '../components/AnimatedComponent';
import ScrollToTopArrow from '../components/ScrollToTopArrow';

// animation variants for form elements
const formContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
};

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

    // state for form animation
    const [formState, setFormState] = useState("idle");

    // state variable for focused field (for enhanced animations)
    const [focusedField, setFocusedField] = useState(null);

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
                // shake form animation on invalid submission
                setFormState("error");
                setTimeout(() => setFormState("idle"), 500);
                return;
            }

            setIsLoading(true);

            // Configure axios with timeout and retry logic
            const requestConfig = {
                timeout: 15000, // 15 second timeout
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_SERVER_URL}/users/login`,
                    { email, password },
                    requestConfig
                );

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
            } catch (requestError) {
                setIsLoading(false);
                console.log("Login request error:", requestError);

                // Provide more specific error messages based on the error type
                if (requestError.code === 'ECONNABORTED') {
                    toast.error("Request timed out. The server is taking too long to respond.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                } else if (!navigator.onLine) {
                    toast.error("You appear to be offline. Please check your internet connection.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                } else if (requestError.response?.status === 401) {
                    toast.error("Invalid credentials. Please check your email and password.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                } else {
                    toast.error("Login failed. Please try again later.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }

                // shake form animation on error
                setFormState("error");
                setTimeout(() => setFormState("idle"), 500);
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Unexpected error:", error);

            toast.error("An unexpected error occurred", {
                position: "top-right",
                autoClose: 3000,
            });

            setFormState("error");
            setTimeout(() => setFormState("idle"), 500);
        }
    };

    // state variable to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className=''>
            <div className="bg-[#f6f2ff] min-h-screen flex flex-col">
                <AnimatedFade className="flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-2 overflow-x-auto px-4 relative z-10" delay={0.1}>
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight className="w-5" />
                    <p className="font-bold whitespace-nowrap">Sign In</p>
                </AnimatedFade>

                {/* main page title */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <AnimatedText className="text-center font-bold text-5xl md:text-6xl pb-13 sm:pb-18 md:pb-20 px-4" delay={0.2}>
                        Sign In
                    </AnimatedText>
                </motion.div>

                {/* login Section */}
                <div className="flex justify-center pb-13 sm:pb-16 md:pb-20 px-4 sm:px-6">
                    <motion.div
                        className="bg-white p-10 rounded-lg shadow-md w-full max-w-md relative"
                        variants={formContainerVariants}
                        initial="hidden"
                        animate={formState === "error"
                            ? { x: [-10, 10, -10, 10, -5, 5, -2, 2, 0] }
                            : "visible"
                        }
                        transition={formState === "error" ? { duration: 0.5 } : {}}
                    >
                        {/* form header section */}
                        <motion.h1
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            variants={formItemVariants}
                        >
                            Welcome Back
                        </motion.h1>

                        <motion.p
                            className="text-gray-500 mb-8 font-semibold opacity-85 text-sm sm:text-base"
                            variants={formItemVariants}
                        >
                            Please fill your email and password to sign in.
                        </motion.p>

                        {/* login form */}
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            aria-live="polite"
                            aria-relevant="additions removals"
                        >
                            {/* email input field */}
                            <motion.div
                                className="mb-4"
                                variants={formItemVariants}
                            >
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <motion.div>
                                    <input
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={() => setEmailTouched(true)}
                                        onFocus={() => setFocusedField('email')}
                                        type="email"
                                        placeholder="Email address"
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 transition-all duration-300 ${emailTouched && emailError ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                                            }`}
                                    />
                                </motion.div>
                                <AnimatePresence>
                                    {emailTouched && emailError && (
                                        <motion.p
                                            className="mt-1 text-red-500 text-xs"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {emailError}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* password input field */}
                            <motion.div
                                className="mb-4 relative"
                                variants={formItemVariants}
                            >
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <motion.div className="relative">
                                    <input
                                        id="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => setPasswordTouched(true)}
                                        onFocus={() => setFocusedField('password')}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 transition-all duration-300 ${passwordTouched && passwordError ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                                            }`}
                                    />

                                    <motion.button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </motion.button>
                                </motion.div>
                                <AnimatePresence>
                                    {passwordTouched && passwordError && (
                                        <motion.p
                                            className="mt-1 text-red-500 text-xs"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {passwordError}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* submit button */}
                            <motion.button
                                variants={formItemVariants}
                                type="submit"
                                className={`w-full py-3 mt-4 sm:mt-6 rounded-full cursor-pointer font-semibold flex items-center justify-center overflow-hidden relative ${isFormValid()
                                    ? 'bg-purple-600 text-white hover:bg-black transition'
                                    : 'bg-purple-300 text-white cursor-not-allowed'
                                    }`}
                                whileHover={isFormValid() ? {
                                    scale: 1.03,
                                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                                } : {}}
                                whileTap={isFormValid() ? {
                                    scale: 0.98,
                                } : {}}
                                disabled={isLoading || !isFormValid()} // disable button when loading or form invalid
                            >
                                {isLoading && (
                                    <motion.span
                                        className="absolute inset-0 bg-purple-800 flex items-center justify-center"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <LoaderCircle size={16} className="animate-spin mr-2" />
                                        Signing in...
                                    </motion.span>
                                )}
                                {!isLoading && "Sign In"}
                            </motion.button>

                            <motion.div
                                className="flex items-center justify-center mt-5 sm:mt-6"
                                variants={formItemVariants}
                            >
                                <p className="text-sm">
                                    Don't have an account?{" "}
                                    <motion.span
                                        whileHover={{
                                            scale: 1.05,
                                            color: "#4f46e5",
                                            textDecoration: "underline"
                                        }}
                                    >
                                        <Link to={"/sign-up"} className="text-purple-600 underline hover:text-purple-800">
                                            Sign Up
                                        </Link>
                                    </motion.span>
                                </p>
                            </motion.div>
                        </form>

                        {/* divider with "Or" text */}
                        <motion.div
                            className="flex items-center my-4 sm:my-6"
                            variants={formItemVariants}
                        >
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500 text-sm">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </motion.div>

                        {/* sign Up With google button */}
                        <motion.div variants={formItemVariants}>
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
                        </motion.div>

                        {/* sign Up With facebook button */}
                        <motion.div variants={formItemVariants}>
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
                        </motion.div>
                    </motion.div>
                </div>
                <ScrollToTopArrow />
            </div>
        </div>
    );
}

