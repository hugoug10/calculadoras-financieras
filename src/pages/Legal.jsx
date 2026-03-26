import React from 'react';

const Legal = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Política de Privacidad y Legalidad</h1>
        <p>Transparencia y seguridad para tus datos financieros.</p>
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2>1. Privacidad Local y Anónima</h2>
        <p>
          En <strong>FinanCalc</strong>, tu privacidad es absoluta. Esta aplicación está diseñada con una arquitectura <em>"Local-First"</em>. 
          <strong>No almacenamos, recopilamos ni transmitimos ningún tipo de dato financiero o personal a ningún servidor externo.</strong>
        </p>
        <p>
          Todos los cálculos (sueldo, cuotas, intereses) se procesan directamente en el procesador de tu navegador y dispositivo. 
          Los datos que introduces nunca abandonan tu pantalla.
        </p>

        <h2 style={{ marginTop: '2rem' }}>2. Almacenamiento Local (Local Storage)</h2>
        <p>
          Para mejorar tu experiencia de usuario, utilizamos la memoria de tu propio navegador (Local Storage) para guardar tus últimas entradas (tus gastos, ingresos o parámetros). De esta manera, cuando vuelves a visitar la calculadora, no tienes que introducirlos de nuevo.
        </p>
        <p>
          Esta información permanece bajo tu control exclusivo y puedes borrarla en cualquier momento borrando la caché de tu navegador.
        </p>

        <h2 style={{ marginTop: '2rem' }}>3. Finanzas Éticas y Responsabilidad</h2>
        <p>
          Las calculadoras proporcionadas en esta web tienen un propósito puramente informativo y educativo. Aunque nos esforzamos por ofrecer cálculos precisos de impuestos, sueldos e intereses utilizando las normativas vigentes, <strong>los resultados son estimaciones</strong>.
        </p>
        <p>
          No nos hacemos responsables de las decisiones financieras, fiscales o de inversión tomadas con base en estos resultados. Recomendamos siempre contrastar los datos con un asesor financiero o fiscal profesional en casos de declaraciones oficiales.
        </p>

        <h2 style={{ marginTop: '2rem' }}>4. Monetización</h2>
        <p>
          Esta página se mantiene de forma gratuita gracias a anuncios proveídos por Google AdSense. Google utiliza cookies para personalizar estos anuncios. Al navegar por la web y aceptar nuestro banner, consientes el uso de cookies estrictamente necesarias para el rastreo publicitario estándar.
        </p>
      </div>
    </div>
  );
};

export default Legal;
