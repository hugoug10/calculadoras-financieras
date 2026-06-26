import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <p className="copyright">© {new Date().getFullYear()} FinanCalc. Todos los cálculos son orientativos y 100% locales.</p>
        
        <div className="footer-links" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/aviso-legal">Aviso Legal</Link>
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
