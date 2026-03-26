import { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner-overlay animate-slide-up">
      <div className="cookie-banner-content">
        <p>
          Utilizamos cookies esenciales para el funcionamiento del sitio y análisis básico. No guardamos información financiera personal en servidores. Al hacer clic en "Aceptar", consientes nuestro uso de cookies de acuerdo a nuestra <a href="/legal">Política de Privacidad</a>.
        </p>
        <button onClick={acceptCookies} className="btn-primary btn-sm cookie-btn">
          Aceptar Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
