import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <TrendingUp size={16} strokeWidth={2.5} />
          </div>
          <span className="navbar-logo-text">Finan<span>Calc</span></span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/sueldo-neto" className="nav-link">Sueldo Neto</Link>
          <Link to="/autonomos" className="nav-link">Autónomos</Link>
          <Link to="/interes" className="nav-link">Interés Compuesto</Link>
          <Link to="/guias" className="nav-link">Guías</Link>
          <div className="nav-divider" />
          <Link to="/sobre-nosotros" className="nav-link">Sobre Nosotros</Link>
          <Link to="/contacto" className="nav-link nav-link-cta">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
