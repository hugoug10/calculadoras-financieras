import React from 'react';

const Contacto = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Contacto</h1>
        <p>¿Tienes dudas, sugerencias o has encontrado un error? Escríbenos.</p>
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Ponte en contacto con nuestro equipo</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '2rem', color: 'var(--text-muted)' }}>
          Valoramos muchísimo el "feedback" de nuestros usuarios. Si crees que el cálculo del 
          IRPF tiene alguna desviación o simplemente quieres proponer una nueva calculadora o funcionalidad,  
          puedes contactar con el soporte de FinanCalc mediante correo electrónico.
        </p>

        <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid rgba(56, 189, 248, 0.2)', textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Correo de Soporte</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            <a href="mailto:soporte@financalc.es" style={{ color: 'var(--text)', textDecoration: 'none' }}>
              soporte@financalc.es
            </a>
          </p>
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2rem' }}>Preguntas Frecuentes de Soporte</h3>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>¿Hacéis declaraciones de la Renta?</strong><br/> No. Somos desarrolladores de software, no gestores colegiados. Por favor, acude a un profesional para trámites oficiales con la Agencia Tributaria.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>He encontrado un bug en una calculadora.</strong><br/> ¡Gracias por avisar! Escríbenos al correo indicando qué calculadora falló y bajo qué parámetros introducidos. Trataremos de solucionarlo lo antes posible.
          </li>
          <li>
            <strong>¿Puedo colaborar con un artículo financiero?</strong><br/> Sí, estamos abiertos a publicar contenido de terceros siempre y cuando cumplan con rigurosos estándares de calidad técnica y financiera.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;
