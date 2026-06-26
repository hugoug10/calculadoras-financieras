import React from 'react';
import { Link } from 'react-router-dom';

const GuiaAutonomosCompleta = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/guias" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Volver a Guías</Link>
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: '1.2' }}>
          Guía Completa para Autónomos en España: Cuota, IRPF, IVA y Gastos Deducibles
        </h1>

        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Darse de alta como autónomo en España implica asumir una complejidad administrativa que muchos profesionales no anticipan. Más allá de la ilusión de "trabajar para ti mismo", hay cuotas que pagar, modelos que presentar y gastos que declarar. Esta guía completa te explica todo lo que necesitas saber desde el primer día para evitar sorpresas y gestionar tu actividad con eficiencia fiscal.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>1. Alta como Autónomo: los primeros pasos</h2>
          <p style={{ marginBottom: '1rem' }}>
            Para empezar a trabajar como autónomo en España debes realizar dos trámites fundamentales:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Alta en Hacienda (AEAT) — Modelo 036 o 037:</strong> Debes comunicar a la Agencia Tributaria que vas a iniciar una actividad económica, indicando el epígrafe del IAE (Impuesto de Actividades Económicas) que corresponde a tu profesión. El Modelo 037 es la versión simplificada y es suficiente para la mayoría de autónomos individuales.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Alta en la Seguridad Social — RETA:</strong> Debes darte de alta en el Régimen Especial de Trabajadores Autónomos antes de iniciar tu actividad. Este trámite determina tu cuota mensual a la Seguridad Social.
            </li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>
            Ambos trámites pueden realizarse online a través de las sedes electrónicas de la AEAT y la Seguridad Social, o en persona en sus oficinas. Es recomendable hacerlos el mismo día.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>2. La Cuota de Autónomos en 2024: el sistema por tramos de ingresos reales</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Desde enero de 2023, España ha implementado un nuevo sistema de cotización para autónomos basado en los <strong>ingresos reales netos</strong>, dejando atrás el antiguo sistema de base de cotización libremente elegida. Esto supone un cambio radical en cómo se calcula la cuota mensual.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            El sistema divide los ingresos en 15 tramos y asigna una cuota mensual a cada tramo. Algunos tramos orientativos para 2024:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--text)' }}>
                  <th style={{ padding: '0.65rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Rendimiento Neto Mensual</th>
                  <th style={{ padding: '0.65rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Cuota Mínima</th>
                  <th style={{ padding: '0.65rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Cuota Máxima</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Menos de 670 €', '225,83 €', '260,00 €'],
                  ['Entre 670 € y 900 €', '260,50 €', '270,00 €'],
                  ['Entre 900 € y 1.166,70 €', '275,83 €', '294,00 €'],
                  ['Entre 1.166,70 € y 1.300 €', '291,67 €', '350,00 €'],
                  ['Entre 1.300 € y 1.500 €', '294,00 €', '370,00 €'],
                  ['Entre 1.500 € y 1.700 €', '294,00 €', '390,00 €'],
                  ['Entre 1.700 € y 1.850 €', '310,00 €', '420,00 €'],
                  ['Más de 6.000 €', '530,00 €', '1.267,00 €'],
                ].map(([rango, min, max], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.65rem', color: 'var(--text-muted)' }}>{rango}</td>
                    <td style={{ padding: '0.65rem', textAlign: 'center', color: 'var(--primary)' }}>{min}</td>
                    <td style={{ padding: '0.65rem', textAlign: 'center', color: 'var(--text-muted)' }}>{max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '1.5rem' }}>
            El rendimiento neto se calcula restando a tus ingresos brutos los gastos deducibles relacionados con la actividad, y aplicando una deducción adicional del 7% por gastos de difícil justificación. Al año siguiente, Hacienda regulariza si cotizaste de más o de menos respecto a tus ingresos reales definitivos.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>3. El IVA del Autónomo: recaudar y liquidar</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Si tu actividad no está exenta de IVA (la mayoría de profesionales y comercios no lo está), debes incluir el impuesto en tus facturas. El tipo general es el 21%. Recuerda el principio fundamental: <strong>el IVA que cobras no es tuyo</strong>. Es un depósito temporal que debes entregar a Hacienda cada trimestre mediante el Modelo 303.
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>IVA Repercutido:</strong> El que cobras en tus facturas de venta.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>IVA Soportado:</strong> El que pagas en tus compras y gastos de la actividad (material de oficina, software, servicios profesionales que necesitas para trabajar).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Liquidación trimestral:</strong> Repercutido − Soportado = lo que ingresas a Hacienda (o lo que Hacienda te devuelve si soportaste más del que repercutiste).</li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>
            Los plazos de presentación del Modelo 303 son: del 1 al 20 de abril (1T), julio (2T), octubre (3T) y enero (4T). El resumen anual se presenta mediante el Modelo 390 en enero.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>4. El IRPF del Autónomo: pagos fraccionados</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A diferencia de los trabajadores por cuenta ajena, los autónomos no tienen un empleador que les retenga el IRPF mensualmente. En su lugar, deben hacer <strong>pagos fraccionados a cuenta del IRPF</strong> cada trimestre mediante el Modelo 130.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            El cálculo es: se toma el rendimiento neto acumulado en el año hasta ese trimestre y se le aplica el 20%. A ese resultado se restan los pagos fraccionados ya realizados en trimestres anteriores, y esa diferencia es lo que se ingresa.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Excepción importante: si más del 70% de tus ingresos llevan retención de IRPF (porque trabajas principalmente para empresas que te retienen, como ocurre en muchas actividades profesionales), puedes quedar exento de presentar el Modelo 130.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>5. Gastos Deducibles: reduce tu base imponible legalmente</h2>
          <p style={{ marginBottom: '1rem' }}>
            Los gastos deducibles son aquellos directamente relacionados con tu actividad económica. Reducen tu rendimiento neto y, por tanto, tanto tu cuota a la Seguridad Social como tu IRPF. Los principales:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Cuota a la Seguridad Social:</strong> La propia cuota de autónomos es un gasto 100% deducible.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Alquiler de local u oficina:</strong> Si alquilas un espacio exclusivamente para tu actividad, es totalmente deducible.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Suministros en vivienda habitual:</strong> Si trabajas desde casa, puedes deducir el 30% de los suministros (luz, agua, internet) proporcional a los metros cuadrados dedicados a la actividad.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Material y equipamiento:</strong> Ordenadores, software, herramientas, mobiliario de oficina.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Servicios profesionales:</strong> Gestoría, asesoría jurídica, contabilidad.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Formación:</strong> Cursos, libros, suscripciones relacionadas con tu actividad.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Vehículo:</strong> Solo si se usa exclusivamente para la actividad (difícil de justificar para personas físicas no dedicadas al transporte).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Dietas y desplazamientos:</strong> Con límites y justificación documental.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>7% de gastos de difícil justificación:</strong> Deducción automática que se aplica sobre el rendimiento neto positivo antes de esta reducción, con un máximo de 2.000€ anuales.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>6. Calendario fiscal del autónomo</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--text)' }}>
                  <th style={{ padding: '0.65rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Período</th>
                  <th style={{ padding: '0.65rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Modelo</th>
                  <th style={{ padding: '0.65rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Concepto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Enero (1–20)', 'Mod. 303', '4T IVA del año anterior'],
                  ['Enero (1–30)', 'Mod. 390', 'Resumen anual IVA'],
                  ['Enero (1–30)', 'Mod. 347', 'Declaración anual operaciones +3.005€'],
                  ['Abril (1–20)', 'Mod. 303 + 130', 'IVA e IRPF 1T'],
                  ['Julio (1–20)', 'Mod. 303 + 130', 'IVA e IRPF 2T'],
                  ['Octubre (1–20)', 'Mod. 303 + 130', 'IVA e IRPF 3T'],
                  ['Mayo–Junio', 'Mod. 100', 'Declaración de la Renta (IRPF anual)'],
                ].map(([periodo, modelo, concepto], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.65rem', color: 'var(--primary)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>{periodo}</td>
                    <td style={{ padding: '0.65rem', color: 'var(--text)', whiteSpace: 'nowrap' }}>{modelo}</td>
                    <td style={{ padding: '0.65rem', color: 'var(--text-muted)' }}>{concepto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2rem', borderRadius: 'var(--radius)', marginTop: '3rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Calcula tu rendimiento neto ahora</h3>
            <p style={{ marginBottom: 0 }}>
              Usa nuestra <Link to="/autonomos" style={{ color: 'var(--primary)' }}>Calculadora para Autónomos</Link> para estimar en segundos tu cuota mensual a la Seguridad Social y el IRPF trimestral según tus ingresos y gastos reales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaAutonomosCompleta;
