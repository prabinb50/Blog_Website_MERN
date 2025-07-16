import { ChevronRight, LoaderCircle, Check, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from '../utils/FormValidation';

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
    // initialize navigate function for redirection
    const navigate = useNavigate();

    // state variables to manage form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                return;
            }

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
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            navigate('/login'); // redirect to login page after successful registration

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
        } catch (error) {
            setIsLoading(false);

            console.log("Error in creating user: ", error);

            toast.error(error.response?.data?.message || "User already exists with this email please choose another email", {
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
                        <form onSubmit={handleSubmit} noValidate>
                            {/* name input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    id="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onBlur={() => setNameTouched(true)}
                                    type="text"
                                    placeholder="Your name"
                                    className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 ${nameTouched && nameError ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                                        }`}
                                />
                                {nameTouched && nameError && (
                                    <p className="mt-1 text-red-500 text-xs">{nameError}</p>
                                )}
                            </div>

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
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <input
                                    id="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={() => setPasswordTouched(true)}
                                    type="password"
                                    placeholder="Enter your password"
                                    minLength={8}
                                    maxLength={32}
                                    className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 ${passwordTouched && !Object.values(passwordErrors).every(Boolean)
                                        ? 'border-2 border-red-500 focus:ring-red-500'
                                        : 'focus:ring-purple-500'
                                        }`}
                                />

                                {/* password requirements */}
                                {passwordTouched && (
                                    <div className="mt-2 space-y-1">
                                        <p className="text-sm font-medium text-gray-700">Password must have:</p>
                                        <ul className="space-y-1">
                                            <li className={`text-xs flex items-center ${passwordErrors.length ? 'text-green-500' : 'text-red-500'}`}>
                                                {passwordErrors.length ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                                                8-32 characters
                                            </li>
                                            <li className={`text-xs flex items-center ${passwordErrors.uppercase ? 'text-green-500' : 'text-red-500'}`}>
                                                {passwordErrors.uppercase ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                                                At least one uppercase letter
                                            </li>
                                            <li className={`text-xs flex items-center ${passwordErrors.lowercase ? 'text-green-500' : 'text-red-500'}`}>
                                                {passwordErrors.lowercase ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                                                At least one lowercase letter
                                            </li>
                                            <li className={`text-xs flex items-center ${passwordErrors.number ? 'text-green-500' : 'text-red-500'}`}>
                                                {passwordErrors.number ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                                                At least one number
                                            </li>
                                            <li className={`text-xs flex items-center ${passwordErrors.special ? 'text-green-500' : 'text-red-500'}`}>
                                                {passwordErrors.special ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                                                At least one special character (!@#$%^&*(),.?":&#123;&#125;|&lt;&gt;)
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* confirm password input field */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    onBlur={() => setConfirmPasswordTouched(true)}
                                    type="password"
                                    placeholder="Confirm your password"
                                    className={`w-full px-4 py-3 border-gray-100 bg-gray-100 rounded-full focus:outline-none focus:ring-1 ${confirmPasswordTouched && confirmPasswordError
                                        ? 'border-2 border-red-500 focus:ring-red-500'
                                        : 'focus:ring-purple-500'
                                        }`}
                                />
                                {confirmPasswordTouched && confirmPasswordError && (
                                    <p className="mt-1 text-red-500 text-xs">{confirmPasswordError}</p>
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
                                    scale: 1.03,
                                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                                } : {}}
                                whileTap={isFormValid() ? {
                                    scale: 0.98,
                                } : {}}
                                disabled={isLoading || !isFormValid()} // disable button when loading or form invalid
                            >
                                {isLoading && <LoaderCircle size={16} className='animate-spin mr-2' />}
                                Create an Account
                            </motion.button>

                            {/* terms and conditions checkbox */}
                            <div className="flex items-center justify-center mt-5 sm:mt-6">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mr-2 h-4 w-4 cursor-pointer accent-purple-600"
                                    checked={termsAccepted}
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

                        {/* google sign-up button */}
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
                </div>
            </div>
        </div>
    );
}