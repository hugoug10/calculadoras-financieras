import React from 'react';
import { Link } from 'react-router-dom';

const Guias = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Guías Financieras</h1>
        <p>Aprende todo lo necesario sobre impuestos, nóminas y ahorro estratégico.</p>
      </div>

      <div className="tools-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/guias/nomina" className="tool-card glass" style={{ textAlign: 'left', padding: '2rem' }}>
          <div className="tool-icon" style={{ marginBottom: '1rem' }}>📄</div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Entender tu Nómina Paso a Paso</h2>
          <p style={{ color: 'var(--text-muted)' }}>Desgranamos todos los conceptos de una nómina española, desde el devengo hasta el líquido a percibir.</p>
        </Link>

        <Link to="/guias/iva" className="tool-card glass" style={{ textAlign: 'left', padding: '2rem' }}>
          <div className="tool-icon" style={{ marginBottom: '1rem' }}>🧾</div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Guía Definitiva del IVA</h2>
          <p style={{ color: 'var(--text-muted)' }}>Todo lo que un novel o autónomo necesita saber sobre la recaudación y liquidación del Impuesto sobre el Valor Añadido.</p>
        </Link>

        <Link to="/guias/interes-compuesto" className="tool-card glass" style={{ textAlign: 'left', padding: '2rem' }}>
          <div className="tool-icon" style={{ marginBottom: '1rem' }}>📈</div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>El Crecimiento Exponencial de tu Dinero</h2>
          <p style={{ color: 'var(--text-muted)' }}>Descubre el secreto mejor guardado de la inversión: cómo el interés compuesto hace trabajar al dinero por ti.</p>
        </Link>
      </div>
    </div>
  );
};

export default Guias;
