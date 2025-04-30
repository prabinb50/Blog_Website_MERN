import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove authentication token
        localStorage.removeItem('myToken');

        // Show success notification
        toast.success('Logged out successfully', {
            position: 'top-right',
            autoClose: 2000,
        });

        // Redirect to login page
        navigate('/login');
    }, [navigate]);

    // Show loading spinner while processing logout
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
        </div>
    );
}