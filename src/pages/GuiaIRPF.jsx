import React from 'react';
import { Link } from 'react-router-dom';

const GuiaIRPF = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/guias" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Volver a Guías</Link>
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: '1.2' }}>
          Cómo funciona el IRPF: Tramos, Deducciones y la Declaración de la Renta
        </h1>

        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            El IRPF (Impuesto sobre la Renta de las Personas Físicas) es el impuesto más importante al que se enfrenta cualquier trabajador y profesional en España. Sin embargo, pocas personas entienden realmente cómo funciona más allá de "Hacienda me quita un porcentaje". En esta guía desgranamos todo lo que necesitas saber para entender cuánto pagas, por qué lo pagas y cómo puedes reducir legalmente tu factura fiscal.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>1. ¿Qué es exactamente el IRPF?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            El IRPF es un impuesto <strong>personal, directo y progresivo</strong> que grava la renta obtenida durante el año natural por las personas físicas residentes en España. "Personal" porque tiene en cuenta las circunstancias individuales de cada contribuyente (número de hijos, discapacidad, situación familiar). "Directo" porque recae directamente sobre la renta, no sobre el consumo. Y "progresivo" porque a mayor renta, mayor es el tipo impositivo que se aplica.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            En términos prácticos, si eres trabajador por cuenta ajena, la empresa ya te descuenta cada mes una parte de tu sueldo en concepto de "retención a cuenta del IRPF". Esto significa que estás pagando el impuesto por adelantado mes a mes. Al llegar la Declaración de la Renta (en mayo-junio del año siguiente), Hacienda hace el balance final: si retuviste de más, te devuelven; si retuviste de menos, debes pagar la diferencia.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>2. Los Tramos del IRPF en España</h2>
          <p style={{ marginBottom: '1rem' }}>
            España utiliza un sistema de <strong>tramos progresivos</strong>. Esto significa que cada euro que ganas no tributa todo al mismo tipo; cada tramo de renta tiene su propio porcentaje. Un error muy común es pensar que si pasas a un tramo superior, todo tu sueldo paga más impuestos. Nada más lejos de la realidad.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            El IRPF se divide en dos partes: el tramo estatal (general para toda España) y el tramo autonómico (varía según la comunidad autónoma donde residas). Sumando ambos, los tramos generales orientativos para 2024 son:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--text)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Base Liquidable</th>
                  <th style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Tipo aproximado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hasta 12.450 €', '19%'],
                  ['De 12.450 € a 20.200 €', '24%'],
                  ['De 20.200 € a 35.200 €', '30%'],
                  ['De 35.200 € a 60.000 €', '37%'],
                  ['De 60.000 € a 300.000 €', '45%'],
                  ['Más de 300.000 €', '47%'],
                ].map(([rango, tipo], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem', color: 'var(--text-muted)' }}>{rango}</td>
                    <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>{tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '1.5rem' }}>
            Recuerda: estos porcentajes se aplican <em>solo al tramo correspondiente</em>. Si ganas 25.000€ anuales, los primeros 12.450€ tributan al 19%, y los 12.550€ restantes al 24%. No pagas un 24% sobre los 25.000€ completos.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>3. ¿Qué es la Base Imponible y la Base Liquidable?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Antes de aplicar los tramos, Hacienda realiza varios ajustes sobre tu renta bruta:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Renta Bruta Total:</strong> La suma de todos tus ingresos del año (salario, alquileres, ganancias patrimoniales, etc.)
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Reducciones por trabajo:</strong> Los trabajadores por cuenta ajena pueden reducir su base entre 2.000€ y 5.565€ anuales dependiendo de su nivel de renta, aplicándose la reducción mayor a los salarios más bajos.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Aportaciones a planes de pensiones:</strong> Reducen la base imponible (con límites anuales: el menor entre 1.500€ y el 30% de los rendimientos netos del trabajo).
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Mínimo personal y familiar:</strong> Una cantidad que se resta de la cuota íntegra para proteger la renta mínima vital. Para un contribuyente sin hijos ni dependientes, el mínimo personal es de 5.550€ anuales.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>4. El Mínimo Personal y Familiar: dinero que no tributa</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            El mínimo personal y familiar es uno de los conceptos más beneficiosos y menos comprendidos del IRPF. Representa la renta que Hacienda considera necesaria para cubrir las necesidades básicas del contribuyente y de su familia, y por tanto <strong>no tributa</strong>.
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Mínimo personal general:</strong> 5.550€ anuales</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Por cada hijo menor de 3 años:</strong> 2.800€ adicionales</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Por primer hijo:</strong> 2.400€ adicionales</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Por segundo hijo:</strong> 2.700€ adicionales</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Por discapacidad del contribuyente (33%-65%):</strong> 3.000€ adicionales</li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>
            Estos mínimos no se restan directamente de tu renta, sino que se aplican sobre la cuota íntegra al tipo del tramo más bajo (19%), lo que se traduce en un ahorro fiscal directo. Por eso, actualizar correctamente el Modelo 145 con tus circunstancias familiares en tu empresa es fundamental para que la retención mensual sea la correcta.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>5. Deducciones más comunes para reducir el IRPF</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Inversión en vivienda habitual (adquirida antes de 2013):</strong> Deducción del 15% sobre un máximo de 9.040€ anuales para quienes compraron su vivienda antes de enero de 2013.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Alquiler de vivienda habitual:</strong> Para inquilinos que firmaron su contrato antes de 2015, existe deducción estatal. Desde 2015, solo aplican deducciones autonómicas (varían por comunidad).
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Donativos a ONG:</strong> El 80% de los primeros 150€ donados a entidades acogidas a la ley de mecenazgo, y el 35% del resto.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Maternidad/Paternidad:</strong> Deducciones específicas para progenitores con hijos menores de 3 años que trabajen fuera del hogar.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Planes de Pensiones:</strong> Como se indicó, las aportaciones reducen la base imponible, generando un ahorro inmediato proporcional a tu tramo marginal.
            </li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>6. La Declaración de la Renta: claves del proceso</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La Declaración de la Renta (Modelo 100) es el mecanismo anual de liquidación del IRPF. Se presenta entre abril y junio del año siguiente al ejercicio fiscal correspondiente. Puntos clave:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>¿Estoy obligado a declarar?</strong> Si tu salario bruto anual supera 22.000€ de un solo pagador, o 15.000€ de dos o más pagadores, debes declarar.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Borrador de Renta:</strong> La AEAT pone a tu disposición un borrador prellenado con los datos que ya tiene. Revísalo siempre antes de confirmarlo; puede contener errores u omitir deducciones favorables.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Resultado a devolver:</strong> Si tus retenciones mensuales fueron superiores a lo que debías pagar, Hacienda te devuelve la diferencia.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Resultado a ingresar:</strong> Si retuviste menos (por ejemplo, por tener dos empleadores), tendrás que pagar la diferencia. Puedes fraccionar el pago en dos plazos.</li>
          </ul>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2rem', borderRadius: 'var(--radius)', marginTop: '3rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Herramienta recomendada</h3>
            <p>
              Para estimar cuánto IRPF te retienen mensualmente y ver la distribución entre Seguridad Social e impuesto, usa nuestra{' '}
              <Link to="/sueldo-neto" style={{ color: 'var(--primary)' }}>Calculadora de Sueldo Neto</Link>.
              Te mostrará de forma visual cuánto de tu bruto va a cada concepto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaIRPF;
