import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const links = [
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto',       label: 'Contacto' },
  { to: '/aviso-legal',    label: 'Aviso Legal' },
  { to: '/privacidad',     label: 'Privacidad' },
  { to: '/cookies',        label: 'Cookies' },
];

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-content">
      <div>
        <div className="footer-brand">
          Finan<span>Calc</span>
        </div>
        <p className="copyright" style={{ marginTop: '0.35rem' }}>
          © {new Date().getFullYear()} FinanCalc · Cálculos orientativos, 100% locales y gratuitos.
        </p>
      </div>

      <div className="footer-links">
        {links.map(({ to, label }, i) => (
          <React.Fragment key={to}>
            {i > 0 && <span className="footer-dot" />}
            <Link to={to}>{label}</Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
