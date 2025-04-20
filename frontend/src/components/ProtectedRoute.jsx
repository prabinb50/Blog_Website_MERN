import React from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('myToken');

    // If the user is authenticated, render the children (protected component), otherwise redirect to login page
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;