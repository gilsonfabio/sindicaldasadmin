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
import Secretarias from './pages/Secretarias';
import AltSecretaria from './pages/AltSecretaria';
import NewSecretaria from './pages/NewSecretaria';

import Atividades from './pages/Atividades';
import AltAtividade from './pages/AltAtividade';
import NewAtividade from './pages/NewAtividade';

import Convenios from './pages/Convenios';
import AltConvenio from './pages/AltConvenio';
import NewConvenio from './pages/NewConvenio';

import OrgAdmin from './pages/OrgAdmin';
import AltOrgAdmin from './pages/AltOrgAdmin';
import NewOrgAdmin from './pages/NewOrgAdmin';

import Servidores from './pages/Servidores';
import AltServidor from './pages/AltServidores';
import NewServidor from './pages/NewServidor';

import Extratos from './pages/Compras';
import ExtVencto from './pages/ExtVencto';

import Filiacao from './pages/Filiacao';
import Informacoes from './pages/Informacoes';
import NewFiliacao from './pages/NewFiliacao';
import AltFiliacao from './pages/AltFiliacao';
import AltInformacao from './pages/AltInformacao';
import NewInformacao from './pages/NewInformacao';

import ForgotPassword from './pages/ForgotPassword';
import PdfCmpVenc from './pages/PdfCmpVenc';
import ExtAdmin from './pages/ExtAdmin';
import PdfExtConv from './pages/PdfExtConv';
import StaCartao from './pages/StaCartao';

import ImpFicha from './pages/ImpFicha';


export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/layout" element={<Layout />} />            
        </Routes>        
    )
}
