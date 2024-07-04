import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthRoutes from './components/common/AuthRoutes';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<AuthRoutes><Dashboard /></AuthRoutes>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
