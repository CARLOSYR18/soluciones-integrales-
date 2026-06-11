import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"; // IMPORTAR BOOTSTRAP SOLO AQUÍ
import './index.css';

import App from './App';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Contacto from './pages/Contacto';
import QuienesSomos from './pages/QuienesSomos';
import NuestraHistoria from './pages/NuestraHistoria';
import NuestroEquipo from './pages/NuestroEquipo';
import ConsultoriaTI from './pages/ConsultoriaTI';
import PoliticadePrivacidad from './pages/PoliticadePrivacidad';
import ConsultoriaEmpresarial from './pages/ConsultoriaEmpresarial';
import ComunidadActiva from './pages/ComunidadActiva';
import Convenios from './pages/Convevios';
import Organigrama from './pages/Organigrama';
import Auditorias from './pages/Auditorias';
import DesarrolloDeSitiosWeb from './pages/DesarrolloDeSitiosWeb';
import DesarrolloDeSoftware from './pages/DesarrolloDeSoftware';
import FacturacionElectronica from './pages/FacturacionElectronica';
import HostingYDominio from './pages/HostingYDominio';
import InstalacionesElectricas from './pages/InstalacionesElectricas';
import MantenimientoElectrico from './pages/MantenimientoElectrico';
import SoporteTecnico from './pages/SoporteTecnico';
import PosicionamientoSEO from './pages/PosicionamientoSEO';
import RedesEInfrostructura from './pages/RedesEInfrostructura';
import RefrigeracionIndustrial from './pages/RefrigeracionIndustrial';
import SeguridadInformatica from './pages/SeguridadInfromatica';
import TecnologiaEnSeguridad from './pages/TecnologiaEnSeguridad';
import ConsultoriaEducativa from './pages/ConsultoriaEducativa';
import SocialMedia from './pages/SocialMedia';
import Merchandising from './pages/Merchandising';
import GraficaPublicitaria from './pages/GraficaPublicitaria';

import Productos from "./components/Productos";
import PrestamosCalculadora from "./pages/Prestamos";


const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout><App /></Layout>} />

        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />

        <Route path="/QuienesSomos" element={<Layout><QuienesSomos /></Layout>} />

        <Route path="/NuestraHistoria" element={<Layout><NuestraHistoria /></Layout>} />

        <Route path="/ComunidadActiva" element={<Layout><ComunidadActiva /></Layout>} />

        <Route path="/ConsultoriaEmpresarial" element={<Layout><ConsultoriaEmpresarial /></Layout>} />

        <Route path="/ConsultoriaTI" element={<Layout><ConsultoriaTI /></Layout>} />
        
        <Route path="/PoliticadePrivacidad" element={<Layout><PoliticadePrivacidad /></Layout>} />

        <Route path="/Convenios" element={<Layout><Convenios /></Layout>} />

        <Route path="/NuestroEquipo" element={<Layout><NuestroEquipo /></Layout>} />

        <Route path="/Organigrama" element={<Layout><Organigrama /></Layout>} />

        <Route path="/Auditorias" element={<Layout><Auditorias /></Layout>} />

        <Route path="/ConsultoriaEducativa" element={<Layout><ConsultoriaEducativa /></Layout>} />

        <Route path="/RedesEInfrostructura" element={<Layout><RedesEInfrostructura /></Layout>} />

        <Route path="/DesarrolloDeSitiosWeb" element={<Layout><DesarrolloDeSitiosWeb /></Layout>} />

        <Route path="/DesarrolloDeSoftware" element={<Layout><DesarrolloDeSoftware /></Layout>} />

        <Route path="/FacturacionElectronica" element={<Layout><FacturacionElectronica /></Layout>} />

        <Route path="/HostingYDominio" element={<Layout><HostingYDominio /></Layout>} />

        <Route path="/InstalacionesElectricas" element={<Layout><InstalacionesElectricas /></Layout>} />

        <Route path="/MantenimientoElectrico" element={<Layout><MantenimientoElectrico /></Layout>} />

        <Route path="/PosicionamientoSEO" element={<Layout><PosicionamientoSEO /></Layout>} />

        <Route path="/RefrigeracionIndustrial" element={<Layout><RefrigeracionIndustrial /></Layout>} />

        <Route path="/SeguridadInformatica" element={<Layout><SeguridadInformatica /></Layout>} />

        <Route path="/SoporteTecnico" element={<Layout><SoporteTecnico /></Layout>} />

        <Route path="/TecnologiaEnSeguridad" element={<Layout><TecnologiaEnSeguridad /></Layout>} />

        <Route path="/Merchandising" element={<Layout><Merchandising /></Layout>} />

        <Route path="/GraficaPublicitaria" element={<Layout><GraficaPublicitaria /></Layout>} />

        <Route path="/SocialMedia" element={<Layout><SocialMedia /></Layout>} />

        <Route path="/Productos" element={<Layout><Productos /></Layout>} />

        <Route path="/prestamos" element={<Layout><PrestamosCalculadora /></Layout>} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);
