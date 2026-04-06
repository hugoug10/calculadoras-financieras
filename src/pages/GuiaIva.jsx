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
            Si tu negocio tiene éxito y añades valor de venta por encima del coste puro, esta cifra será positiva y le darás un "cheque" a Hacienda. Si tuviste un arranque donde adquiriste excesiva maquinaría y apenas generaste ventas, el resultado podrá resultar negativo y se compensará para el trimestre próximo, logrando neutralidad neutral fiduciaria empresarial perfecta con el tiempo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuiaIva;
