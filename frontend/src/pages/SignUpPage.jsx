import { ChevronRight, LoaderCircle, Check, X, Eye, EyeOff } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from '../utils/FormValidation';
import { AnimatedFade, AnimatedText } from '../components/AnimatedComponent';

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
    transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        backgroundColor: '#e0e0e0',
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 16px',
    },
}));

// animation variants for form elements
const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        }
    }
};

const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

// success checkmark animation variants
const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

export default function SignUpPage() {
    // initialize navigate function for redirection
    const navigate = useNavigate();

    // state variables to manage form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // state for field focus animations
    const [focusedField, setFocusedField] = useState(null);

    // animation state for form submission
    const [formState, setFormState] = useState("idle"); // idle, loading, success, error

    // state variable to manage terms acceptance
    const [termsAccepted, setTermsAccepted] = useState(false);

    // state variable to manage loading state
    const [isLoading, setIsLoading] = useState(false);

    // state variables for validation errors
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordErrors, setPasswordErrors] = useState({
        length: true,
        uppercase: true,
        lowercase: true,
        number: true,
        special: true
    });
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // state variables to track if fields have been touched
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    // check if all validations pass
    const isFormValid = () => {
        return (
            !nameError && name.trim() !== "" &&
            !emailError && email.trim() !== "" &&
            Object.values(passwordErrors).every(Boolean) &&
            !confirmPasswordError && confirmPassword.trim() !== "" &&
            termsAccepted
        );
    };

    // validate fields when they change
    useEffect(() => {
        if (nameTouched) validateName(name, setNameError);
    }, [name, nameTouched]);

    useEffect(() => {
        if (emailTouched) validateEmail(email, setEmailError);
    }, [email, emailTouched]);

    useEffect(() => {
        if (passwordTouched) validatePassword(password, setPasswordErrors);
        if (confirmPasswordTouched) validateConfirmPassword(confirmPassword, password, setConfirmPasswordError);
    }, [password, passwordTouched]);

    useEffect(() => {
        if (confirmPasswordTouched) validateConfirmPassword(confirmPassword, password, setConfirmPasswordError);
    }, [confirmPassword, confirmPasswordTouched, password]);

    // function to handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // validate all fields
            const isNameValid = validateName(name, setNameError);
            const isEmailValid = validateEmail(email, setEmailError);
            const isPasswordValid = validatePassword(password, setPasswordErrors);
            const isConfirmPasswordValid = validateConfirmPassword(confirmPassword, password, setConfirmPasswordError);

            // check if form is valid
            if (!isNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
                // shake form animation on invalid submission
                setFormState("error");
                setTimeout(() => setFormState("idle"), 500);
                return;
            }

            // validate that terms are accepted
            if (!termsAccepted) {
                toast.error("Please accept the terms and conditions", {
                    position: "top-right",
                    autoClose: 2000,
                });
                return;
            }

            setIsLoading(true);
            setFormState("loading");

            // Configure axios request with timeout
            const requestConfig = {
                timeout: 15000, // 15 second timeout
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            try {
                // send a POST request to the server with JSON data
                const response = await axios.post(
                    `${import.meta.env.VITE_SERVER_URL}/users/register`,
                    { name, email, password },
                    requestConfig
                );

                setIsLoading(false);
                setFormState("success");

                // show success message 
                toast.success(response?.data?.message || "Account created successfully!", {
                    position: "top-right",
                    autoClose: 1500,
                });

                // animate success state before redirecting
                setTimeout(() => {
                    navigate('/login');
                }, 1500);

                // reset form fields after submission
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setTermsAccepted(false);

                // reset touched states
                setNameTouched(false);
                setEmailTouched(false);
                setPasswordTouched(false);
                setConfirmPasswordTouched(false);
            } catch (requestError) {
                setIsLoading(false);
                setFormState("error");

                console.error("Registration request error:", requestError);

                // Provide specific error messages based on the error type
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
                } else if (requestError.response?.status === 409) {
                    toast.error("An account with this email already exists.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                } else if (requestError.response?.data?.message) {
                    toast.error(requestError.response.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                    });
                } else {
                    toast.error("Registration failed. Please try again later.", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }

                setTimeout(() => setFormState("idle"), 500);
            }
        } catch (error) {
            setIsLoading(false);
            setFormState("error");

            console.error("Unexpected error during registration:", error);

            toast.error("An unexpected error occurred", {
                position: "top-right",
                autoClose: 3000,
            });

            setTimeout(() => setFormState("idle"), 500);
        }
    };

    // state variables for password visibility toggling
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div>
            <div className="bg-[#f6f2ff] min-h-screen flex flex-col relative">
                <AnimatedFade className="flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-2 overflow-x-auto px-4 relative z-10" delay={0.1}>
                    <NavLink to={"/"} className="cursor-pointer">
                        Home
                    </NavLink>
                    <ChevronRight className="w-5" />
                    <p className="font-bold whitespace-nowrap">Sign Up</p>
                </AnimatedFade>

                {/* main page title */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <AnimatedText className="text-center font-bold text-5xl md:text-6xl pb-13 sm:pb-18 md:pb-20 px-4" delay={0.2}>
                        Sign Up
                    </AnimatedText>
                </motion.div>

                {/* sign up form container */}
                <div className="flex justify-center pb-13 sm:pb-16 md:pb-20 px-4 sm:px-6" >
                    <motion.div
                        className="bg-white p-10 rounded-lg shadow-md w-full max-w-md"
                        variants={formContainerVariants}
                        initial="hidden"
                        animate={formState === "error"
                            ? { x: [-10, 10, -10, 10, -5, 5, -2, 2, 0] }
                            : "visible"
                        }
                        transition={formState === "error" ? { duration: 0.5 } : {}}
                    >
                        {/* success animation overlay */}
                        <AnimatePresence>
                            {formState === "success" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg z-50"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                        className="bg-green-100 p-4 rounded-full"
                                    >
                                        <motion.svg
                                            viewBox="0 0 50 50"
                                            className="w-20 h-20 text-green-500"
                                        >
                                            <motion.path
                                                d="M14,27l8,8L42,15"
                                                fill="transparent"
                                                strokeWidth="3"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                variants={checkmarkVariants}
                                                initial="hidden"
                                                animate="visible"
                                            />
                                        </motion.svg>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* form header section */}
                        <motion.h1
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            variants={formItemVariants}
                        >
                            Create Your Account
                        </motion.h1>

                        <motion.p
                            className="text-gray-500 mb-8 font-semibold opacity-85 text-sm sm:text-base"
                            variants={formItemVariants}
                        >
                            Create an account today and start using Vexon
                        </motion.p>

                        {/* registration form  */}
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            aria-live='polite'
                            aria-relevant='additions removals'
                        >
                            {/* name input field */}
                            <motion.div
                                className="mb-4"
                                variants={formItemVariants}
                            >
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <motion.div>
                                    <input
                                        id="name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onBlur={() => {
                                            setNameTouched(true);
                                            setFocusedField(null);
                                        }}
                                        onFocus={() => setFocusedField('name')}
                                        type="text"
                                        placeholder="Your name"
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 transition-all duration-300 ${nameTouched && nameError
                                            ? 'border-2 border-red-500 focus:ring-red-500'
                                            : 'focus:ring-purple-500'
                                            }`}
                                    />
                                </motion.div>

                                <AnimatePresence>
                                    {nameTouched && nameError && (
                                        <motion.p
                                            className="mt-1 text-red-500 text-xs"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {nameError}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

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
                                        onBlur={() => {
                                            setEmailTouched(true);
                                            setFocusedField(null);
                                        }}
                                        onFocus={() => setFocusedField('email')}
                                        type="email"
                                        placeholder="Email address"
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 transition-all duration-300 ${emailTouched && emailError
                                            ? 'border-2 border-red-500 focus:ring-red-500'
                                            : 'focus:ring-purple-500'
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

                            {/* password input field  */}
                            <motion.div
                                className="mb-4 relative"
                                variants={formItemVariants}
                            >
                                <label className="block text-sm font-medium mb-2">Password</label>

                                <motion.div
                                    className="relative"
                                >
                                    <input
                                        id="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => {
                                            setPasswordTouched(true);
                                            setFocusedField(null);
                                        }}
                                        onFocus={() => setFocusedField('password')}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        minLength={8}
                                        maxLength={32}
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 transition-all duration-300 ${passwordTouched && !Object.values(passwordErrors).every(Boolean)
                                            ? 'border-2 border-red-500 focus:ring-red-500'
                                            : 'focus:ring-purple-500'
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

                                {/*  password requirements */}
                                <AnimatePresence>
                                    {passwordTouched && (
                                        <motion.div
                                            className="mt-2 space-y-1"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <p className="text-sm font-medium text-gray-700">Password must have:</p>

                                            <ul className="space-y-1">
                                                {Object.entries({
                                                    length: "8-32 characters",
                                                    uppercase: "At least one uppercase letter",
                                                    lowercase: "At least one lowercase letter",
                                                    number: "At least one number",
                                                    special: "At least one special character (!@#$%^&*(),.?\":{}|<>)"
                                                }).map(([key, text], index) => (
                                                    <motion.li
                                                        key={key}
                                                        className={`text-xs flex items-center ${passwordErrors[key] ? 'text-green-500' : 'text-red-500'}`}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        {passwordErrors[key] ? (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                                            >
                                                                <Check size={12} className="mr-1" />
                                                            </motion.div>
                                                        ) : (
                                                            <X size={12} className="mr-1" />
                                                        )}
                                                        {text}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* confirm password input field */}
                            <motion.div
                                className="mb-4 relative"
                                variants={formItemVariants}
                            >
                                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                                <motion.div
                                    className="relative"
                                >
                                    <input
                                        id="confirmPassword"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onBlur={() => {
                                            setConfirmPasswordTouched(true);
                                            setFocusedField(null);
                                        }}
                                        onFocus={() => setFocusedField('confirmPassword')}
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 transition-all duration-300 ${confirmPasswordTouched && confirmPasswordError
                                            ? 'border-2 border-red-500 focus:ring-red-500'
                                            : 'focus:ring-purple-500'
                                            }`}
                                    />

                                    <motion.button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </motion.button>
                                </motion.div>

                                <AnimatePresence>
                                    {confirmPasswordTouched && confirmPasswordError && (
                                        <motion.p
                                            className="mt-1 text-red-500 text-xs"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {confirmPasswordError}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/*  submit button */}
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
                                disabled={isLoading || !isFormValid()}
                            >
                                {/* animated loader */}
                                {isLoading && (
                                    <motion.span
                                        className="absolute inset-0 bg-purple-800 flex items-center justify-center"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <LoaderCircle size={16} className='animate-spin mr-2' />
                                        Creating account...
                                    </motion.span>
                                )}
                                {!isLoading && "Create an Account"}
                            </motion.button>

                            {/* terms and conditions checkbox  */}
                            <motion.div
                                className="flex items-center justify-center mt-5 sm:mt-6"
                                variants={formItemVariants}
                            >
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mr-2 h-4 w-4 cursor-pointer accent-purple-600"
                                        checked={termsAccepted}
                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                        required
                                    />
                                </motion.div>

                                <label htmlFor="terms" className="text-xs sm:text-sm cursor-pointer">
                                    I have read and agree to the{" "}
                                    <motion.span
                                        whileHover={{
                                            color: "#4f46e5",
                                            textDecoration: "underline"
                                        }}
                                    >
                                        <Link to={"/"} className="text-purple-600 underline hover:text-purple-800">
                                            Terms & Conditions
                                        </Link>
                                    </motion.span>
                                    .
                                </label>
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

                        {/* google sign-up button */}
                        <motion.div variants={formItemVariants}>
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
                        </motion.div>

                        {/* facebook sign-up button*/}
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
                                Sign Up With Facebook
                            </AnimatedButton>
                        </motion.div>

                        {/* link to login page for existing users */}
                        <motion.div
                            className="text-center mt-6 sm:mt-8"
                            variants={formItemVariants}
                        >
                            <p className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <motion.span
                                    whileHover={{
                                        scale: 1.05,
                                        color: "#4f46e5",
                                        textDecoration: "underline"
                                    }}
                                >
                                    <Link to="/login" className="text-purple-600 underline hover:text-purple-800">
                                        Sign In
                                    </Link>
                                </motion.span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
