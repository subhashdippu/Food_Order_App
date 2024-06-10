import React, { Children, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../Components/LoadingSpinner'

const PrivateRouter = (children) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <>{children}</>;
    }

    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
};


export default PrivateRouter