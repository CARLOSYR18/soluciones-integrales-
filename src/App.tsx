import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SolucionesIntegralesJBSection from './components/SolucionesIntegralesJBSection';


function App() {
  return (
    <SolucionesIntegralesJBSection className="bg-gray-50" />
  );
}

export default App;