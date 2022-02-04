import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home';
import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route end path="/" element={<Home />} />
                <Route end path="login" element={<LoginScreen />} />
                <Route end path="register" element={<RegisterScreen />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default AuthRouter;
