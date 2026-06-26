import React from 'react';
import { Link } from 'react-router-dom';

const GuiaIva = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/guias" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Volver a Guías</Link>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: '1.2' }}>
          Guía Definitiva del IVA: Tipos, Mitos y Errores de Novatos
        </h1>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            El Impuesto sobre el Valor Añadido (IVA) es omnipresente. Rige casi la totalidad de las transacciones comerciales diarias, pero continúa siendo una de las mayores fuentes de confusión tanto para consumidores finales como para profesionales que inician su vuelo en el mundo de las facturas. Desentrañemos su funcionamiento.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>1. La naturaleza del IVA</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La clave absolutoria para entender el IVA, si eres autónomo o empresa, es grabarte un axioma en la mente: <strong>el dinero del IVA no es tuyo, es de Hacienda</strong>. Ejerces de mero recaudador del Estado sin cobrar un sueldo por ello. Cuando facturas 1.000€ + 210€ de IVA y tu cliente te transfiere 1.210€; esos 210€ adicionales debes albergarlos estáticamente en tu banco porque tendrás que ingresarlos religiosamente en las arcas del Estado a final de trimestre mediante el Modelo 303.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Un error estruendoso del emprendedor novel es concebir el flujo de caja global asumiendo que el IVA forma parte de su volumen de rentabilidad y gastarlo. Esa práctica solo empuja a embargos prematuros. A la hora de calcular tus beneficios, confía sólo y estrictamente en tu herramienta de <Link to="/autonomos" style={{ color: 'var(--primary)' }}>beneficio de autónomos</Link>.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>2. El laberinto de los Tipos Impositivos</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            En la península española, y excluyendo regímenes especiales intracomunitarios o internacionales insulares (como el IGIC de Canarias), existen jerarquías en el gravamen estandarizado:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Tipo General (21%):</strong> Aplicable residualmente por exclusión a todos los bienes cuya tributación específica no esté bonificada en otro tramo normativo. Telefonía, cosméticos, servicios de marketing, automoción, etc.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Tipo Reducido (10%):</strong> Pretende amortiguar el impacto económico en sectores estratégicos. Engloba el turismo, la hostelería, viviendas de nueva edificación, agricultura, espectáculos lúdicos y la asistencia social genérica.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Tipo Superreducido (4%):</strong> La excepción de las excepciones para los artículos que salvaguardan la dignidad humana vital material: panadería, fruta y verduras sin transformación, medicamentos, material y sillas de ruedas protésicas, entre otros.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>3. El IVA Soportado vs IVA Repercutido</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            En la declaración trimestral sucede el milagro contable de la rectificación. Has estado recaudando el IVA de lo que vendes (Repercutido), pero también has soportado y pagado un IVA cada vez que compraste material a proveedores (Soportado).
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            A final de trimestre harás la famosa resta: <strong>Repercutido - Soportado = Resultado</strong>.
            Si tu negocio tiene éxito y añades valor de venta por encima del coste puro, esta cifra será positiva y le darás un "cheque" a Hacienda. Si tuviste un arranque donde adquiriste excesiva maquinaria y apenas generaste ventas, el resultado podrá resultar negativo y se compensará para el trimestre próximo.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>4. Actividades Exentas de IVA</h2>
          <p style={{ marginBottom: '1rem' }}>
            No todas las actividades están sujetas a IVA. La ley contempla <strong>exenciones</strong> para determinados servicios considerados de interés social o público. Las más relevantes son:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Servicios médicos y sanitarios:</strong> Consultas de médicos, dentistas, fisioterapeutas, psicólogos con fines terapéuticos.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Educación:</strong> Clases impartidas por centros privados de enseñanza reglada homologados por el Estado. Las academias y clases particulares sí llevan IVA.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Seguros:</strong> Las primas de seguros están exentas de IVA (aunque llevan un impuesto propio, el IPS).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Servicios financieros:</strong> Operaciones bancarias, préstamos, avales y similares.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Alquiler de vivienda habitual:</strong> El arrendamiento para uso como vivienda está exento. El arrendamiento de locales comerciales o turístico sí lleva IVA.</li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>
            Estar exento de IVA tiene una trampa: tampoco puedes deducirte el IVA que tú soportas en tus compras. Por eso, para ciertos negocios con muchos gastos de inversión, estar sujeto a IVA puede ser más ventajoso.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>5. El Modelo 303: la declaración trimestral del IVA</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            El Modelo 303 es el formulario con el que los autónomos y empresas liquidan el IVA con Hacienda cada trimestre. Los plazos son fijos e improrrogables:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.4rem' }}><strong>1T (enero-marzo):</strong> Presentación del 1 al 20 de abril</li>
            <li style={{ marginBottom: '0.4rem' }}><strong>2T (abril-junio):</strong> Presentación del 1 al 20 de julio</li>
            <li style={{ marginBottom: '0.4rem' }}><strong>3T (julio-septiembre):</strong> Presentación del 1 al 20 de octubre</li>
            <li style={{ marginBottom: '0.4rem' }}><strong>4T (octubre-diciembre):</strong> Presentación del 1 al 30 de enero del año siguiente</li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>
            Presentar el Modelo 303 fuera de plazo acarrea recargos automáticos: 1% mensual si te retrasas entre 1 y 12 meses, y hasta el 20% más intereses si la presentación es posterior a un requerimiento de Hacienda. La puntualidad es esencial.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>6. Errores frecuentes con el IVA que debes evitar</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Gastar el IVA recaudado:</strong> Como se explicó, el IVA de tus facturas no es beneficio tuyo. Abre una cuenta separada y transfiere el IVA de cada factura nada más cobrarla.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>No guardar las facturas de gastos:</strong> Sin factura, no hay IVA soportado deducible. Digitaliza y archiva todas las facturas durante al menos 4 años (el plazo de prescripción de Hacienda).
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Aplicar el tipo incorrecto:</strong> Mezclar el 21% y el 10% en productos que no corresponden puede generar regularizaciones con recargos. Consulta el tipo aplicable a cada producto o servicio.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Olvidar el IVA en operaciones intracomunitarias:</strong> Si vendes o compras a empresas de otros países de la UE, existen reglas especiales de inversión del sujeto pasivo que hay que declarar en el Modelo 349.
            </li>
          </ul>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2rem', borderRadius: 'var(--radius)', marginTop: '3rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Conclusión del equipo de FinanCalc</h3>
            <p style={{ marginBottom: '1rem' }}>
              El IVA es el impuesto que más interactúas en tu día a día como profesional, y dominarlo marca la diferencia entre una tesorería saneada y los sobresaltos de fin de trimestre. Recuerda: organización, factura correcta y cuenta separada para el IVA son los tres pilares que te salvarán de más de un aprieto.
            </p>
            <p style={{ marginBottom: 0 }}>
              Para calcular rápidamente el IVA de cualquier importe, añadirlo a un precio base o extraerlo de un total, usa nuestra{' '}
              <Link to="/iva" style={{ color: 'var(--primary)' }}>Calculadora de IVA</Link> online, gratuita e instantánea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaIva;
