import React from 'react';

const Cookies = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Política de Cookies</h1>
        <p>Aclaraciones sobre cómo usamos las famosas "galletas" de seguimiento.</p>
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>¿Qué es una Cookie?</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Las cookies son pequeños archivos de texto que los sitios web descargan y guardan en tu navegador cuando los visitas. Se usan de forma generalizada para hacer que los sitios funcionen de manera eficiente y para proporcionar informaciones a los propietarios del lugar web.
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Nuestras propias "Cookies" o Memorias Locales</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Técnicamente, para guardar el historial de tus variables (ej: recordar en tu móvil que ganas 25.000€ brutos) no empleamos una "Cookie" tradicional HTTP. Utilizamos la tecnología de <strong>Local Storage</strong> nativa de tu navegador. Es mil veces más segura puesto que no transfiere datos al abrir nuestra página web, solo tú puedes leerlo. Lo consideramos una memoria técnica exenta de consentimiento bajo las leyes europeas, ya que es "estrictamente necesaria para brindar un servicio técnico que el usuario solicitó".
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Cookies Publicitarias: Google AdSense</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Al utilizar FinanCalc, y siempre que prestes atención al banner pop-up que instalamos conforme a las directivas del E-Privacy y RGPD en Europa, permites que socios de terceros como Google depositen cookies.
          <br/><br/>
          Google utiliza cookies (como la cookie <em>DoubleClick DART</em>) para publicar anuncios basados en tus visitas anteriores a nuestra web o a otros sitios de Internet. Google y sus socios recaban esta información estadística inter-sitios. 
          <br/><br/>
          Puedes inhabilitar en cualquier momento la publicidad personalizada accediendo a la <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer" style={{color:'var(--primary)'}}>Configuración de Anuncios de Google.</a>
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Gestión de cookies del navegador</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Recuerda que, al margen de los consentimientos recogidos aquí, puedes bloquear o eliminar completamente las cookies configurando las opciones de tu navegador interno (Chrome, Safari, Firefox, Edge, etc).
        </p>
      </div>
    </div>
  );
};

export default Cookies;
