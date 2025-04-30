import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LogoutButton({ className, onClick }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the authentication token
        localStorage.removeItem('myToken');

        // Show success message
        toast.success('Logged out successfully', {
            position: 'top-right',
            autoClose: 200,
        });

        // Call the optional onClick callback if provided
        if (onClick && typeof onClick === 'function') {
            onClick();
        }

        // Redirect to login page
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className={className || "text-black hover:text-purple-600 transition-colors"}
        >
            Logout
        </button>
    );
}