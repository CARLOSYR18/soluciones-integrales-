import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SolucionesIntegralesJBSection from './components/SolucionesIntegralesJBSection';
import Prestamos from './pages/Prestamos';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SolucionesIntegralesJBSection className="bg-gray-50" />} />
        <Route path="/prestamos" element={<Prestamos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;