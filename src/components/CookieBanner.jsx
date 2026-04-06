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
          Utilizamos LocalStorage para el funcionamiento del sitio y cookies de terceros de Google AdSense para análisis y personalización publicitaria. No guardamos información financiera personal. Al hacer clic en "Aceptar", consientes su uso según nuestra <a href="/cookies">Política de Cookies</a>.
        </p>
        <button onClick={acceptCookies} className="btn-primary btn-sm cookie-btn">
          Aceptar Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
