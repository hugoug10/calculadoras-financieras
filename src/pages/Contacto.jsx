import React, { useState } from 'react';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:soporte@financalc.es?subject=${encodeURIComponent(form.asunto || 'Consulta desde FinanCalc')}&body=${encodeURIComponent(`Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`)}`;
    window.location.href = mailtoLink;
    setEnviado(true);
  };

  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Contacto</h1>
        <p>¿Tienes alguna duda, sugerencia o incidencia? Escríbenos y te responderemos lo antes posible.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 1rem' }}>

        {/* Información de contacto */}
        <div className="calc-panel glass" style={{ padding: '2rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Información de Contacto</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.25rem' }}>Correo electrónico</p>
            <a href="mailto:soporte@financalc.es" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '1.05rem' }}>
              soporte@financalc.es
            </a>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.25rem' }}>Horario de atención</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Lunes a Viernes<br />
              9:00 – 18:00 h (CET)
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.25rem' }}>Tiempo de respuesta</p>
            <p style={{ color: 'var(--text-muted)' }}>Normalmente respondemos en menos de 48 horas laborables.</p>
          </div>

          <hr style={{ borderColor: 'var(--border)', margin: '1.5rem 0' }} />

          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text)' }}>¿Para qué puedes contactarnos?</h3>
          <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.25rem' }}>
            <li>Sugerencias de nuevas calculadoras o herramientas</li>
            <li>Reportar un error en algún cálculo</li>
            <li>Consultas sobre el funcionamiento de la web</li>
            <li>Solicitudes de eliminación de datos (RGPD)</li>
            <li>Propuestas de colaboración o contenido</li>
          </ul>
        </div>

        {/* Formulario */}
        <div className="calc-panel glass" style={{ padding: '2rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Envíanos un mensaje</h2>

          {enviado ? (
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅</p>
              <p style={{ color: 'var(--text)', fontWeight: 'bold', marginBottom: '0.5rem' }}>¡Mensaje preparado!</p>
              <p style={{ color: 'var(--text-muted)' }}>Se ha abierto tu cliente de correo con el mensaje listo para enviar.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto *</label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  required
                  placeholder="¿Sobre qué quieres escribirnos?"
                  value={form.asunto}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntanos tu consulta o sugerencia con detalle..."
                  value={form.mensaje}
                  onChange={handleChange}
                  style={{ resize: 'vertical', minHeight: '120px', fontFamily: 'inherit' }}
                />
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                * Al enviar este formulario, se abrirá tu cliente de correo electrónico con el mensaje pre-rellenado dirigido a nuestro equipo. Tus datos serán tratados conforme a nuestra{' '}
                <a href="/privacidad" style={{ color: 'var(--primary)' }}>Política de Privacidad</a>.
              </p>

              <button type="submit" className="btn-primary" style={{ padding: '0.85rem', fontSize: '1rem', cursor: 'pointer' }}>
                Preparar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Sección FAQ */}
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '3rem auto 0 auto', padding: '2rem', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Preguntas frecuentes sobre el contacto</h2>

        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.4rem' }}>¿Ofrecéis asesoría fiscal personalizada?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            No. FinanCalc es una plataforma de herramientas educativas y orientativas. No somos gestores ni asesores fiscales colegiados. Para asesoría personalizada, recomendamos contactar con una gestoría oficial.
          </p>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.4rem' }}>¿Puedo sugerir una nueva calculadora?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            ¡Por supuesto! Nos encanta recibir sugerencias de la comunidad. Escríbenos indicando qué herramienta te sería útil y por qué, y la valoraremos para futuras versiones de la plataforma.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.4rem' }}>¿Cómo ejercer mis derechos RGPD?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Puedes enviarnos un email a soporte@financalc.es indicando que deseas ejercer tus derechos de acceso, rectificación o supresión. Dado que nuestra web no almacena datos personales de cálculo, la mayoría de peticiones se resolverán indicando que no disponemos de datos que eliminar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
