import React from 'react';
import { Routes, Route }  from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import Users from './pages/Users';
import ForgotPassword from './pages/ForgotPassword';

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/layout" element={<Layout />} />  
            <Route path="/users" element={<Users />} /> 
            <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>        
    )
}
