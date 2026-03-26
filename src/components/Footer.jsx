import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <p className="copyright">© {new Date().getFullYear()} FinanCalc. Todos los cálculos son orientativos y 100% locales.</p>
        <div className="footer-links">
          <Link to="/legal">Política de Privacidad y Términos Legales</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
