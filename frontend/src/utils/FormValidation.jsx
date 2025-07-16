// validate name field
export const validateName = (name, setNameError) => {
    if (!name.trim()) {
        setNameError("Name is required");
        return false;
    } else if (name.length < 2) {
        setNameError("Name must be at least 2 characters");
        return false;
    } else {
        setNameError("");
        return true;
    }
};

// validate email field 
export const validateEmail = (email, setEmailError) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
        setEmailError("Email is required");
        return false;
    } else if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email (e.g., user@example.com)");
        return false;
    } else {
        setEmailError("");
        return true;
    }
};

// validate password 
export const validatePassword = (password, setPasswordErrors) => {
    // check all password requirements
    const errors = {
        length: password.length >= 8 && password.length <= 32,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    setPasswordErrors(errors);
    return Object.values(errors).every(Boolean);
};

// validate confirm password matches original password
export const validateConfirmPassword = (confirmPassword, password, setConfirmPasswordError) => {
    if (confirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match");
        return false;
    } else {
        setConfirmPasswordError("");
        return true;
    }
};

// password validation for login 
export const validateLoginPassword = (password, setPasswordError) => {
    if (!password.trim()) {
        setPasswordError("Password is required");
        return false;
    } else {
        setPasswordError("");
        return true;
    }
};