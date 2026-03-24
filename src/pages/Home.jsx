import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1 className="hero-title">Herramientas financieras <span>para profesionales</span></h1>
        <p className="hero-subtitle">Calcula tu sueldo, IRPF y cuotas de forma rápida y sencilla.</p>
      </header>
      
      <section className="tools-grid">
        <Link to="/sueldo-neto" className="tool-card glass">
          <div className="tool-icon">💶</div>
          <h2>Calculadora Sueldo Neto</h2>
          <p>Descubre cuánto te queda limpio a final de mes tras impuestos.</p>
        </Link>
        
        <Link to="/autonomos" className="tool-card glass">
          <div className="tool-icon">💼</div>
          <h2>Calculadora Autónomos</h2>
          <p>Calcula tu cuota mensual e IRPF según tus ingresos reales.</p>
        </Link>
        
        <Link to="/iva" className="tool-card glass">
          <div className="tool-icon">📊</div>
          <h2>Calculadora IVA</h2>
          <p>Suma o desglosa el IVA de tus facturas fácilmente.</p>
        </Link>
      </section>
    </div>
  );
};

export default Home;
