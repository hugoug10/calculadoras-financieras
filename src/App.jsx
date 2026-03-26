import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SueldoNeto from './pages/SueldoNeto';
import Autonomos from './pages/Autonomos';
import InteresCompuesto from './pages/InteresCompuesto';
import Iva from './pages/Iva';
import Legal from './pages/Legal';
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
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
