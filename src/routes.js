import React from 'react';
import { Routes, Route }  from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import Users from './pages/Users';
import NewUser from './pages/NewUser';
import AltUser from './pages/AltUser';
import Admin from './pages/Administradores';
import NewAdmin from './pages/NewAdmin';
import AltAdmin from './pages/AltAdmin';

import ForgotPassword from './pages/ForgotPassword';

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/layout" element={<Layout />} />  
            <Route path="/users" element={<Users />} /> 
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            <Route path="/newuser" element={<NewUser />} />
            <Route path="/altuser/:usrId" element={<AltUser/>} />
            <Route path="/admin" element={<Admin />} />   
            <Route path="/newadmin" element={<NewAdmin />} />
            <Route path="/altadmin" element={<AltAdmin />} />

        </Routes>        
    )
}
