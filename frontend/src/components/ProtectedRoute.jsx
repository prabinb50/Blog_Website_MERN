import React from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    // check if token is present in local storage
    const isAuthenticated = localStorage.getItem('myToken');

    // If the user is authenticated then render the children (protected component), otherwise redirect to login page
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;