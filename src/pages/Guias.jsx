import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Receipt, TrendingUp, Landmark, PiggyBank, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const guias = [
  {
    to: '/guias/nomina',
    Icon: FileText,
    title: 'Entender tu Nómina Paso a Paso',
    desc: 'Desgranamos todos los conceptos de una nómina española, desde el devengo hasta el líquido a percibir.',
  },
  {
    to: '/guias/iva',
    Icon: Receipt,
    title: 'Guía Definitiva del IVA',
    desc: 'Todo lo que un novel o autónomo necesita saber sobre la recaudación y liquidación del IVA.',
  },
  {
    to: '/guias/interes-compuesto',
    Icon: TrendingUp,
    title: 'El Crecimiento Exponencial de tu Dinero',
    desc: 'Descubre cómo el interés compuesto hace trabajar al dinero por ti durante décadas.',
  },
  {
    to: '/guias/irpf',
    Icon: Landmark,
    title: 'Cómo funciona el IRPF en España',
    desc: 'Tramos impositivos, mínimo personal, deducciones y la Declaración de la Renta explicados.',
  },
  {
    to: '/guias/ahorro',
    Icon: PiggyBank,
    title: 'Guía de Ahorro Personal desde Cero',
    desc: 'Construye tu fondo de emergencia, aplica la regla 50/30/20 y elimina fugas de dinero.',
  },
  {
    to: '/guias/guia-autonomos',
    Icon: Briefcase,
    title: 'Guía Completa para Autónomos',
    desc: 'Cuota por ingresos reales, IVA trimestral, IRPF fraccionado y gastos deducibles.',
  },
];

const Guias = () => {
  const gridRef = useScrollReveal();
  const footerRef = useScrollReveal();

  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Guías Financieras</h1>
        <p>Aprende todo lo necesario sobre impuestos, nóminas, ahorro e inversión con artículos escritos en profundidad.</p>
      </div>

      <div ref={gridRef} className="tools-grid reveal-on-scroll" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {guias.map(({ to, Icon, title, desc }, i) => (
          <Link key={to} to={to} className={`tool-card reveal-delay-${i + 1}`}>
            <div className="tool-icon-wrap">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <h2 style={{ fontSize: '1.05rem' }}>{title}</h2>
            <p>{desc}</p>
          </Link>
        ))}
      </div>

      <div ref={footerRef} className="calc-panel glass reveal-on-scroll" style={{ maxWidth: '760px', margin: '3.5rem auto 0', padding: '2rem 2.5rem', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
          ¿No encuentras lo que buscas?
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
          Nuestras guías financieras están diseñadas para trabajadores por cuenta ajena, autónomos y cualquier persona que quiera entender mejor el sistema fiscal español. Todo el contenido es gratuito, sin registro y se actualiza periódicamente.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
          Si tienes una sugerencia de tema, escríbenos desde la sección de{' '}
          <Link to="/contacto" style={{ color: 'var(--primary)', fontWeight: 600 }}>Contacto</Link>.
        </p>
      </div>
    </div>
  );
};

export default Guias;
