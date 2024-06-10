import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import "../App.css"
import Footer from '../Components/Footer'
import { AuthContext } from '../context/AuthProvider'
import LoadingSpinner from '../Components/LoadingSpinner'
const Main = () => {
    const { loading } = useContext(AuthContext);
    return (
        <div className="bg-prigmayBG">
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <Navbar />
                    <div className="min-h-screen">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Main