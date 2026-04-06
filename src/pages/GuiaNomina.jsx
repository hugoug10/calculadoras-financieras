import React from 'react';
import { Link } from 'react-router-dom';

const GuiaNomina = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/guias" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Volver a Guías</Link>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: '1.2' }}>
          Cómo entender tu Nómina paso a paso: Conceptos clave y retenciones
        </h1>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Recibir la nómina a final de mes es el momento más esperado por cualquier trabajador. Sin embargo, para muchas personas, el recibo de salario parece estar escrito en un idioma incomprensible. Líneas de deducciones, bases de cotización, devengos... En esta guía, vamos a desgranar tu nómina para que sepas exactamente a dónde va el dinero que separa tu sueldo bruto del neto.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>1. El Encabezado: Datos Básicos</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La parte superior de la nómina contiene la película administrativa. Aquí aparecen los datos identificativos de la empresa (Nombre, Domicilio, CIF y código de cuenta de cotización de la Seguridad Social) y los del trabajador (Nombre, DNI, número de Seguridad Social, categoría profesional o grupo de cotización, y la antigüedad). La antigüedad es crucial porque de ella pueden depender complementos salariales (los famosos trienios).
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>2. Los Devengos (Lo que sumas)</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Los devengos conforman tu <strong>Salario Bruto</strong>. Se dividen en dos grandes bloques:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Percepciones Salariales:</strong> Es el núcleo de tu sueldo. Incluye el salario base (marcado por tu convenio colectivo), los complementos salariales (por nocturnidad, peligrosidad, responsabilidad), las horas extraordinarias y las pagas extraordinarias prorrateadas (si cobras en 12 pagas).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Percepciones No Salariales:</strong> Son dietas, gastos de transporte o pluses por distancia. Estos conceptos <em>no tributan</em> a la Seguridad Social hasta ciertos límites legales, ya que se consideran compensaciones por gastos que asume el empleado para poder ir a trabajar.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>3. Las Deducciones (Lo que te quitan)</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Aquí es donde se aplica la "tijera" a tus devengos para llegar al <strong>Líquido a Percibir</strong>. Al utilizar nuestra <Link to="/sueldo-neto" style={{ color: 'var(--primary)' }}>calculadora de sueldo neto</Link>, automatizamos este complejo proceso en milisegundos.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Existen dos receptores principales de tus deducciones:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Seguridad Social:</strong> Financian el sistema público. En general, verás que te descuentan alrededor de un 4,7% por contingencias comunes (enfermedad o jubilación), un 1,55% por concepto de desempleo (para la prestación del paro si tienes contrato indefinido), y un 0,10% para formación profesional.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Hacienda (IRPF):</strong> Este es tu adelanto a la Agencia Tributaria. Al ser un impuesto progresivo, el porcentaje aplicado en este apartado depende directamente de tu volumen de ingresos anuales proyectados, y de tus circunstancias personales entregadas mediante el Modelo 145 a Recursos Humanos.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>4. Base de Cotización (El pie de página)</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A menudo ignorada, la parte inferior de la nómina muestra tus Bases de Cotización a la Seguridad Social (tanto la tuya como la de la propia empresa, que también paga un altísimo porcentaje extra al Estado por tenerte contratado, oscilando más del 30% adicional sobre tu bruto). Estas bases determinan unívocamente cuál será tu derecho a paro futuro, bajas por incapacidad temporal y, eventualmente, cuánto será tu pensión de jubilación pública.
          </p>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2rem', borderRadius: 'var(--radius)', marginTop: '3rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Conclusión de nuestro equipo</h3>
            <p style={{ marginBottom: '0' }}>
              Revisar tus conceptos salariales mensuales no debería ser un acto de fe ciega en el software de nóminas de tu empresa. Conociendo tu base, tu IRPF de referencia y tus devengos, poseerás todo el empoderamiento necesario para detectar despistes u omisiones en tu contra en los próximos recibos. Utiliza nuestras calculadoras online interactivas para realizar predicciones ágiles antes de solicitar revisiones salariales a tu supervisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaNomina;
