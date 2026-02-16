import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
import ScrollButton from "../components/ScrollButton";
const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Aquí se renderizan las páginas hijas según ruta */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
