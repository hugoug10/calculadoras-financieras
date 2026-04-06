import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SueldoNeto from './pages/SueldoNeto';
import Autonomos from './pages/Autonomos';
import InteresCompuesto from './pages/InteresCompuesto';
import Iva from './pages/Iva';
import Guias from './pages/Guias';
import GuiaNomina from './pages/GuiaNomina';
import GuiaIva from './pages/GuiaIva';
import GuiaInteres from './pages/GuiaInteres';
import SobreNosotros from './pages/SobreNosotros';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sueldo-neto" element={<SueldoNeto />} />
            <Route path="/autonomos" element={<Autonomos />} />
            <Route path="/interes" element={<InteresCompuesto />} />
            <Route path="/iva" element={<Iva />} />
            <Route path="/guias" element={<Guias />} />
            <Route path="/guias/nomina" element={<GuiaNomina />} />
            <Route path="/guias/iva" element={<GuiaIva />} />
            <Route path="/guias/interes-compuesto" element={<GuiaInteres />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
