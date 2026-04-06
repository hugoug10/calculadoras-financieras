import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💰</span>
          <h1>FinanCalc</h1>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/sueldo-neto" className="nav-link">Sueldo Neto</Link>
          <Link to="/autonomos" className="nav-link">Autónomos</Link>
          <Link to="/interes" className="nav-link">Interés Compuesto</Link>
          <div style={{width:'1px', height:'20px', backgroundColor:'var(--border)', margin:'0 10px'}}></div>
          <Link to="/sobre-nosotros" className="nav-link" style={{color:'var(--primary)'}}>Sobre Nosotros</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
