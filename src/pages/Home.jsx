import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1 className="hero-title">Herramientas financieras <span>para profesionales</span></h1>
        <p className="hero-subtitle">Calcula tu sueldo, IRPF y cuotas de forma rápida y sencilla.</p>
      </header>
      
      <section className="tools-grid">
        <Link to="/sueldo-neto" className="tool-card glass">
          <div className="tool-icon">💶</div>
          <h2>Calculadora Sueldo Neto</h2>
          <p>Descubre cuánto te queda limpio a final de mes tras impuestos.</p>
        </Link>
        
        <Link to="/autonomos" className="tool-card glass">
          <div className="tool-icon">💼</div>
          <h2>Calculadora Autónomos</h2>
          <p>Calcula tu cuota mensual e IRPF según tus ingresos reales.</p>
        </Link>
        
        <Link to="/iva" className="tool-card glass">
          <div className="tool-icon">📊</div>
          <h2>Calculadora IVA</h2>
          <p>Suma o desglosa el IVA de tus facturas fácilmente.</p>
        </Link>
      </section>

      {/* SECCIÓN PROMOCIONAL DE GUÍAS / BLOG (SEO Y ADSENSE) */}
      <section className="seo-content glass" style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', maxWidth: '1100px', margin: '4rem auto 0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text)' }}>Guías Financieras en Profundidad</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Artículos detallados para entender la fiscalidad española, el ahorro y la inversión:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
          <Link to="/guias/nomina" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'left' }} className="tool-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📄</div>
            <strong>Entender tu Nómina</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Devengos, deducciones y retenciones explicadas.</p>
          </Link>
          <Link to="/guias/iva" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'left' }} className="tool-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🧾</div>
            <strong>Guía Definitiva del IVA</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Tipos, exenciones y liquidación trimestral.</p>
          </Link>
          <Link to="/guias/irpf" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'left' }} className="tool-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🏛️</div>
            <strong>Cómo funciona el IRPF</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Tramos, deducciones y la Declaración de la Renta.</p>
          </Link>
          <Link to="/guias/ahorro" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'left' }} className="tool-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🐖</div>
            <strong>Ahorro Personal desde Cero</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Fondo de emergencia, regla 50/30/20 y más.</p>
          </Link>
          <Link to="/guias/interes-compuesto" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'left' }} className="tool-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📈</div>
            <strong>Interés Compuesto</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>El motor silencioso de la riqueza a largo plazo.</p>
          </Link>
          <Link to="/guias/guia-autonomos" style={{ padding: '1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'left' }} className="tool-card">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💼</div>
            <strong>Guía Completa Autónomos</strong>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem' }}>Cuota, IVA, IRPF y gastos deducibles.</p>
          </Link>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/guias" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Ver todas las guías</Link>
        </div>
      </section>

      {/* TEXTO INFORMATIVO HOME PARA ADSENSE */}
      <section className="seo-content glass" style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'left', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Tus finanzas bajo control</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          <strong>FinanCalc</strong> nace con el propósito de simplificar el día a día económico tanto de empleados por cuenta ajena como de profesionales autónomos. Las matemáticas impositivas y las regulaciones fiscales suelen ser opacas y difíciles de interpretar en una primera lectura. Ofrecemos herramientas gratuitas, ágiles y precisas para que puedas tomar decisiones informadas sobre tu dinero de forma autónoma.
        </p>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>¿Qué encontrarás en nuestra plataforma?</h3>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
          <li>
            <strong>Predicción Salarial:</strong> Conocer tu poder adquisitivo real es fundamental antes de aceptar una oferta de trabajo o firmar una hipoteca. Nuestra calculadora de sueldo neto traslada el bruto corporativo a euros reales en tu bolsillo.
          </li>
          <li>
            <strong>Ayuda al Trabajo Autónomo:</strong> Emprender implica asumir todo el peso administrativo. Calcular correctamente tu rendimiento neto separando gastos, cuota de la Seguridad Social y retenciones a Hacienda es vital para que tu negocio sea sostenible.
          </li>
          <li>
            <strong>Herramientas de Facturación:</strong> Si vendes productos o servicios, necesitas sumar el Impuesto sobre el Valor Añadido a tus precios base con exactitud, o extraerlo de presupuestos finales para conocer tu margen real.
          </li>
        </ul>

        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
          <em>Aviso de responsabilidad: Las herramientas aquí presentes tienen un carácter puramente orientativo y educativo basadas en la normativa fiscal general de España vigente. Para presentar tus declaraciones de impuestos legales, te recomendamos la contratación de una gestoría colegiada.</em>
        </p>
      </section>
    </div>
  );
};

export default Home;
