import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SueldoNeto from './pages/SueldoNeto';
import Autonomos from './pages/Autonomos';
import Iva from './pages/Iva';

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
            <Route path="/iva" element={<Iva />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
