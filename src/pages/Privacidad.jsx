import React from 'react';

const Privacidad = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Política de Privacidad</h1>
        <p>Cómo protegemos y gestionamos tus datos, para una navegación segura.</p>
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>1. Local-First: Nadie lee tus números</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          El principal principio rector de FinanCalc es la seguridad técnica por diseño y defecto. Las herramientas financieras (como calculadoras de salario, IVA y autónomos) son procesadas íntegramente de manera local en el procesador (CPU) de tu dispositivo web. <strong>No almacenamos en servidores de bases de datos las cifras de ingresos, sueldos o cuotas que introduces.</strong>
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>2. Datos recogidos pasivamente</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Al navegar por el sitio, los servidores web de alojamiento (Cloudflare Pages) pueden recolectar pasivamente información técnica típica requerida para el protocolo HTTP, como direcciones IP anonimizadas, navegador web utilizado y hora de acceso. Estos datos se utilizan para la seguridad de la red y no se vinculan con personas identificadas geográficamente de manera granular.
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>3. Proveedores de Terceros: Sistema AdSense</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Esta página incluye publicidad proporcionada por la red de Google AdSense. AdSense utiliza balizas web y técnicas de seguimiento estadístico e inferencial para servir anuncios adecuados. Almacenará el histórico de tu navegación general para ofrecerte "publicidad personalizada" en base a la política de privacidad madre de Alphabet Inc. Google Inc. 
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>4. Derechos de Acceso, Rectificación y Cancelación (ARCO)</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Debido a que nuestra propia base de datos no registra ni almacena parámetros de los usuarios (pues ni siquiera existe un login u un registro), no poseemos datos que eliminar. No obstante, para ejercer derechos relativos a consultas al email de soporte, escríbenos pidiendo la eliminación permanente de tus tickets de mensaje en nuestro buzón a través de <strong>soporte@financalc.es</strong>.
        </p>
      </div>
    </div>
  );
};

export default Privacidad;
