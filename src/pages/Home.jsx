import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Briefcase, Receipt, TrendingUp, FileText, Landmark, PiggyBank } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

const Home = () => {
  const toolsRef   = useScrollReveal();
  const guidesRef  = useScrollReveal();
  const editorialRef = useScrollReveal();

  return (
    <div className="home-container">

      {/* ── Hero ─────────────────────────────────── */}
      <header className="hero animation-fade">
        <div className="hero-eyebrow">
          Calculadoras 100% gratuitas y locales
        </div>
        <h1 className="hero-title">
          Herramientas financieras<br />
          <span className="hero-title-accent">para profesionales</span>
        </h1>
        <p className="hero-subtitle">
          Calcula tu sueldo neto, cuota de autónomos, IVA e interés compuesto de forma rápida, privada y sin registros.
        </p>
      </header>

      {/* ── Calculadoras ─────────────────────────── */}
      <section ref={toolsRef} className="reveal-on-scroll">
        <div className="tools-grid">
          <Link to="/sueldo-neto" className="tool-card reveal-delay-1">
            <div className="tool-icon-wrap">
              <Wallet size={20} strokeWidth={1.75} />
            </div>
            <h2>Calculadora Sueldo Neto</h2>
            <p>Descubre cuánto te queda limpio a final de mes tras impuestos y Seguridad Social.</p>
          </Link>

          <Link to="/autonomos" className="tool-card reveal-delay-2">
            <div className="tool-icon-wrap">
              <Briefcase size={20} strokeWidth={1.75} />
            </div>
            <h2>Calculadora Autónomos</h2>
            <p>Calcula tu cuota mensual e IRPF trimestral según tus ingresos y gastos reales.</p>
          </Link>

          <Link to="/iva" className="tool-card reveal-delay-3">
            <div className="tool-icon-wrap">
              <Receipt size={20} strokeWidth={1.75} />
            </div>
            <h2>Calculadora IVA</h2>
            <p>Suma o desglosa el IVA de tus facturas al tipo que necesites con un clic.</p>
          </Link>

          <Link to="/interes" className="tool-card reveal-delay-4">
            <div className="tool-icon-wrap">
              <TrendingUp size={20} strokeWidth={1.75} />
            </div>
            <h2>Interés Compuesto</h2>
            <p>Visualiza cómo crece tu dinero a lo largo del tiempo con aportaciones periódicas.</p>
          </Link>
        </div>
      </section>

      {/* ── Guías ────────────────────────────────── */}
      <section ref={guidesRef} className="reveal-on-scroll">
        <div className="section-header">
          <h2>Guías Financieras</h2>
          <p>Artículos en profundidad para entender la fiscalidad española, el ahorro y la inversión.</p>
        </div>
        <div className="guides-grid">
          <Link to="/guias/nomina" className="guide-card reveal-delay-1">
            <div className="guide-card-icon"><FileText size={18} strokeWidth={1.75} /></div>
            <strong>Entender tu Nómina</strong>
            <p>Devengos, deducciones y retenciones explicadas paso a paso.</p>
          </Link>
          <Link to="/guias/iva" className="guide-card reveal-delay-2">
            <div className="guide-card-icon"><Receipt size={18} strokeWidth={1.75} /></div>
            <strong>Guía Definitiva del IVA</strong>
            <p>Tipos, exenciones, modelo 303 y errores frecuentes.</p>
          </Link>
          <Link to="/guias/irpf" className="guide-card reveal-delay-3">
            <div className="guide-card-icon"><Landmark size={18} strokeWidth={1.75} /></div>
            <strong>Cómo funciona el IRPF</strong>
            <p>Tramos, deducciones y la Declaración de la Renta.</p>
          </Link>
          <Link to="/guias/ahorro" className="guide-card reveal-delay-4">
            <div className="guide-card-icon"><PiggyBank size={18} strokeWidth={1.75} /></div>
            <strong>Ahorro Personal desde Cero</strong>
            <p>Regla 50/30/20, fondo de emergencia y hábitos de ahorro.</p>
          </Link>
          <Link to="/guias/interes-compuesto" className="guide-card reveal-delay-5">
            <div className="guide-card-icon"><TrendingUp size={18} strokeWidth={1.75} /></div>
            <strong>El Poder del Interés Compuesto</strong>
            <p>El motor silencioso de la riqueza a largo plazo.</p>
          </Link>
          <Link to="/guias/guia-autonomos" className="guide-card reveal-delay-6">
            <div className="guide-card-icon"><Briefcase size={18} strokeWidth={1.75} /></div>
            <strong>Guía Completa Autónomos</strong>
            <p>Cuota, IVA, IRPF y gastos deducibles en detalle.</p>
          </Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/guias" className="btn-primary">Ver todas las guías</Link>
        </div>
      </section>

      {/* ── Editorial SEO ─────────────────────────── */}
      <section ref={editorialRef} className="reveal-on-scroll">
        <div className="editorial-section">
          <h2>Tus finanzas bajo control</h2>
          <p>
            <strong>FinanCalc</strong> nace con el propósito de simplificar el día a día económico tanto de empleados por cuenta ajena como de profesionales autónomos. Las matemáticas impositivas y las regulaciones fiscales suelen ser opacas y difíciles de interpretar. Ofrecemos herramientas gratuitas, ágiles y precisas para que puedas tomar decisiones informadas sobre tu dinero de forma autónoma.
          </p>

          <h3>¿Qué encontrarás en nuestra plataforma?</h3>
          <ul>
            <li>
              <strong>Predicción salarial:</strong> Conocer tu poder adquisitivo real es fundamental antes de aceptar una oferta de trabajo o firmar una hipoteca. Nuestra calculadora de sueldo neto traslada el bruto corporativo a euros reales en tu bolsillo.
            </li>
            <li>
              <strong>Ayuda al trabajo autónomo:</strong> Emprender implica asumir todo el peso administrativo. Calcular correctamente tu rendimiento neto separando gastos, cuota de la Seguridad Social y retenciones a Hacienda es vital para que tu negocio sea sostenible.
            </li>
            <li>
              <strong>Herramientas de facturación:</strong> Si vendes productos o servicios, necesitas sumar el IVA a tus precios base con exactitud, o extraerlo de presupuestos finales para conocer tu margen real.
            </li>
          </ul>

          <p className="editorial-disclaimer">
            Aviso de responsabilidad: Las herramientas aquí presentes tienen un carácter puramente orientativo y educativo basadas en la normativa fiscal general de España vigente. Para presentar tus declaraciones de impuestos legales, recomendamos la contratación de una gestoría colegiada.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
