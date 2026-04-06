import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce quién está detrás de FinanCalc y nuestra misión educativa.</p>
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2>Nuestra Misión</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          En <strong>FinanCalc</strong>, creemos firmemente que la educación financiera y el control sobre nuestros propios impuestos no debería ser un privilegio para expertos ni requerir un título en economía. Nuestra misión es democratizar el acceso a calculadoras precisas, rápidas y privadas para todo el mundo.
        </p>

        <h2 style={{ marginTop: '2rem' }}>¿Quiénes somos?</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Somos un equipo de desarrolladores y apasionados de las finanzas personales ubicados en España. Hartos de encontrar calculadoras en internet llenas de publicidad invasiva, pop-ups que dificultan la navegación y, en el peor de los casos, formularios que te piden tu email a cambio de darte el resultado del cálculo, decidimos construir nuestras propias herramientas.
        </p>
        
        <h2 style={{ marginTop: '2rem' }}>Transparencia Absoluta</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          No vendemos cursos. No hacemos asesoría fiscal cobrando tarifas ocultas. Esta web se mantiene puramente con el propósito de servir a la comunidad de trabajadores y emprendedores, sustentándose los costes de servidores a través de la red publicitaria de Google AdSense.
        </p>
        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
          Gracias por usar FinanCalc. Si tienes sugerencias de nuevas herramientas financieras que te gustaría ver en la web, no dudes en escribirnos a través de nuestra sección de contacto.
        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;
