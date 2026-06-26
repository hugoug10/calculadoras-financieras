import React from 'react';
import { Link } from 'react-router-dom';

const guias = [
  {
    to: '/guias/nomina',
    icon: '📄',
    title: 'Entender tu Nómina Paso a Paso',
    desc: 'Desgranamos todos los conceptos de una nómina española, desde el devengo hasta el líquido a percibir.',
  },
  {
    to: '/guias/iva',
    icon: '🧾',
    title: 'Guía Definitiva del IVA',
    desc: 'Todo lo que un novel o autónomo necesita saber sobre la recaudación y liquidación del Impuesto sobre el Valor Añadido.',
  },
  {
    to: '/guias/interes-compuesto',
    icon: '📈',
    title: 'El Crecimiento Exponencial de tu Dinero',
    desc: 'Descubre el secreto mejor guardado de la inversión: cómo el interés compuesto hace trabajar al dinero por ti.',
  },
  {
    to: '/guias/irpf',
    icon: '🏛️',
    title: 'Cómo funciona el IRPF en España',
    desc: 'Tramos impositivos, mínimo personal, deducciones y la Declaración de la Renta explicados de forma clara.',
  },
  {
    to: '/guias/ahorro',
    icon: '🐖',
    title: 'Guía de Ahorro Personal desde Cero',
    desc: 'Construye tu fondo de emergencia, aprende la regla 50/30/20 y elimina las fugas de dinero sin darte cuenta.',
  },
  {
    to: '/guias/guia-autonomos',
    icon: '💼',
    title: 'Guía Completa para Autónomos',
    desc: 'Cuota de autónomos por ingresos reales, IVA trimestral, IRPF fraccionado y gastos deducibles: todo en un solo lugar.',
  },
];

const Guias = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Guías Financieras</h1>
        <p>Aprende todo lo necesario sobre impuestos, nóminas, ahorro e inversión con artículos escritos por expertos.</p>
      </div>

      <div className="tools-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {guias.map((g) => (
          <Link key={g.to} to={g.to} className="tool-card glass" style={{ textAlign: 'left', padding: '2rem' }}>
            <div className="tool-icon" style={{ marginBottom: '1rem', fontSize: '2rem' }}>{g.icon}</div>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{g.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{g.desc}</p>
          </Link>
        ))}
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '3rem auto 0 auto', padding: '2rem', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary)' }}>¿Sobre qué quieres aprender?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
          Nuestras guías financieras están diseñadas para trabajadores por cuenta ajena, autónomos y cualquier persona que quiera entender mejor cómo funciona el sistema fiscal español. Todo el contenido es gratuito, sin registro y se actualiza periódicamente para reflejar los cambios normativos.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Si tienes alguna sugerencia de tema, no dudes en escribirnos desde la sección de{' '}
          <Link to="/contacto" style={{ color: 'var(--primary)' }}>Contacto</Link>.
        </p>
      </div>
    </div>
  );
};

export default Guias;
