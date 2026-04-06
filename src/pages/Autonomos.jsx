import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './SueldoNeto.css'; // Reutilizamos estilos base
import './Autonomos.css';

const Autonomos = () => {
  const [ingresosMensuales, setIngresosMensuales] = useState(3000);
  const [gastosMensuales, setGastosMensuales] = useState(500);
  const [cuotaMensual, setCuotaMensual] = useState(230); // El usuario introduce su cuota

  useEffect(() => {
    const saved = localStorage.getItem('financalc_autonomo');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.ingresosMensuales) setIngresosMensuales(data.ingresosMensuales);
        if (data.gastosMensuales) setGastosMensuales(data.gastosMensuales);
        if (data.cuotaMensual) setCuotaMensual(data.cuotaMensual);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('financalc_autonomo', JSON.stringify({ ingresosMensuales, gastosMensuales, cuotaMensual }));
  }, [ingresosMensuales, gastosMensuales, cuotaMensual]);

  const calcularAutonomo = () => {
    const rendimientoNeto = ingresosMensuales - gastosMensuales;
    
    // El usuario introduce la cuota manualmente
    const cuota = cuotaMensual;
    const irpf = rendimientoNeto * 0.20; // 20% retención estándar estimación directa
    const totalImpuestos = cuota + irpf;
    const limpio = ingresosMensuales - gastosMensuales - totalImpuestos;

    return {
      rendimiento: rendimientoNeto.toFixed(2),
      cuota: cuota.toFixed(2),
      irpf: irpf.toFixed(2),
      limpio: limpio.toFixed(2),
      porcentajeImpuestos: ingresosMensuales > 0 ? ((totalImpuestos / ingresosMensuales) * 100).toFixed(1) : "0.0"
    };
  };

  const resultados = calcularAutonomo();

  const chartData = [
    { name: 'Beneficio Limpio', value: parseFloat(resultados.limpio) },
    { name: 'Gastos Deducibles', value: parseFloat(gastosMensuales) },
    { name: 'Cuota de Autónomo', value: parseFloat(resultados.cuota) },
    { name: 'IRPF', value: parseFloat(resultados.irpf) }
  ];
  const COLORS = ['#10B981', '#64748B', '#F5A623', '#F43F5E'];

  return (
    <div className="calc-container animation-fade">
      <div className="calc-header">
        <h1>Calculadora Cuota de Autónomos</h1>
        <p>Introduce tu cuota mensual real y calcula tu beneficio neto libre de impuestos.</p>
      </div>

      <div className="calc-grid">
        <div className="calc-panel form-panel glass">
          <div className="form-group">
            <label>Ingresos Mensuales (Sin IVA)</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={ingresosMensuales} 
                onChange={(e) => setIngresosMensuales(Number(e.target.value))}
                min="0"
                step="100"
              />
              <span className="symbol">€</span>
            </div>
          </div>

          <div className="form-group">
            <label>Gastos Mensuales Deducibles</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={gastosMensuales} 
                onChange={(e) => setGastosMensuales(Number(e.target.value))}
                min="0"
                step="50"
              />
              <span className="symbol">€</span>
            </div>
          </div>

          <div className="form-group" style={{marginTop: '1rem'}}>
            <label>Tu Cuota de Autónomo Mensual</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={cuotaMensual} 
                onChange={(e) => setCuotaMensual(Number(e.target.value))}
                min="0"
                step="10"
              />
              <span className="symbol">€</span>
            </div>
          </div>
        </div>

        <div className="calc-panel results-panel glass">
          <h2>Tus Beneficios Limpios Mensuales</h2>
          <div className="result-highlight">
            <span className="result-amount">{new Intl.NumberFormat('es-ES').format(resultados.limpio)} €</span>
          </div>
          
          <div style={{ height: '220px', width: '100%', marginTop: '1.5rem', marginBottom: '1rem' }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={chartData} innerRadius={65} outerRadius={85} paddingAngle={4} dataKey="value" stroke="none">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => new Intl.NumberFormat('es-ES').format(value) + ' €'} 
                  contentStyle={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--text)' }}
                  itemStyle={{ color: 'var(--text)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="results-breakdown">
            <div className="breakdown-item">
              <span>Rendimiento Neto (Ingresos - Gastos)</span>
              <span>{new Intl.NumberFormat('es-ES').format(resultados.rendimiento)} €</span>
            </div>
            <div className="breakdown-item warning">
              <span>Cuota de Autónomo</span>
              <span>- {new Intl.NumberFormat('es-ES').format(resultados.cuota)} €</span>
            </div>
            <div className="breakdown-item danger">
              <span>Reserva para IRPF (20%)</span>
              <span>- {new Intl.NumberFormat('es-ES').format(resultados.irpf)} €</span>
            </div>
            <div className="breakdown-total">
              <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>
                Se va en impuestos y cuotas: {resultados.porcentajeImpuestos}%
              </span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => window.print()}>Descargar Informe</button>
        </div>
      </div>
      
      {/* EXPANSIÓN DE CONTENIDO PARA SEO Y ADSENSE */}
      <div className="seo-content glass" style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>¿Qué significa realmente ser Autónomo a nivel de ingresos?</h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          La viabilidad de ser tu propio jefe depende de tus <strong>márgenes de beneficio reales</strong>, no de lo que facturas. 
          Muchos nuevos emprendedores cometen el error de pensar que todo el dinero que entra en su cuenta bancaria como pago de un cliente es "suyo". 
          Sin embargo, tus ingresos íntegros se reducen drásticamente por la suma de tus <strong>gastos fijos directos</strong> y las obligaciones con la administración del Estado (Hacienda y Seguridad Social).
        </p>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>¿Qué impuestos y cuotas paga un autónomo en España?</h3>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
          <li>
            <strong>La Cuota de Autónomos (Seguridad Social):</strong> Es un importe mensual obligatorio que te da derecho a la sanidad pública, a una futura pensión de jubilación y asistencia por bajas médicas. Actualmente, en España funciona mediante un sistema de tramos basado en tus <em>rendimientos netos reales</em>. Es decir, a más ingresos, mayor cuota. No obstante, si acabas de iniciar tu actividad, es muy probable que puedas acogerte a la <strong>Tarifa Plana</strong> durante tu primer año (unos 80€/mes en la mayoría de comunidades autónomas).
          </li>
          <li>
            <strong>Retenciones a cuenta del IRPF:</strong> Al facturar a otras empresas o profesionales, normalmente debes deducir y retener un 15% de tus ingresos (o un 7% los tres primeros años de actividad) en concepto devIRPF. Si tu cliente es particular, no retienes en la factura, pero tendrás que pagar un pago fraccionado trimestral equivalente, habitualmente el 20% de tu beneficio. Este dinero no es un gasto en sí, es un "adelanto" que le haces a Hacienda; en la campaña de la Renta anual se ajustará si has pagado de más o de menos.
          </li>
          <li>
            <strong>Gastos inherentes a la actividad:</strong> Suscripciones de software, alquileres de oficina, material de oficina, compra de mercadería, etc. Tienes que restarlo de tus ingresos brutos para saber cuál es tu verdadero rendimiento neto.
          </li>
        </ul>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>Cómo utilizar esta calculadora</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Para que el cálculo de tus beneficios sea preciso, debes indicarnos:
          1. <strong>Tus Ingresos Mensuales</strong>, excluyendo siempre el IVA (el IVA no es tuyo, eres solo un recaudador del Estado).
          2. <strong>Tus Gastos Mensuales Deducibles</strong> (aquellos intrínsecos al core de tu negocio que puedes justificar).
          3. <strong>Tu Cuota de Autónomo mensual</strong>, que dependerá del tramo en el que te encuentres, o si disfrutas de la Tarifa Plana.
          Rellenando estos 3 campos, la calculadora simulará automáticamente una retención conservadora del IRPF (estimada al 20%) y te ofrecerá el importe de tu ganancia neta.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
          Preguntas Frecuentes (FAQ) sobre autónomos
        </h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Qué se considera un "gasto deducible"?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Hacienda exige que los gastos deducibles cumplan tres requisitos principales: que estén vinculados directamente a tu actividad económica, que estén justificados (mínimo mediante una factura legal o ticket identificativo) y que estén registrados en tus libros de contabilidad. Ejemplos típicos son las cuotas de colegios profesionales, herramientas informáticas, publicidad, la cuota de gestoría, y, bajo circunstancias específicas, dietas u hospedaje.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿El IVA recaudado forma parte de mis ingresos?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            ¡Bajo ningún concepto! Aunque recibas ese dinero en tu cuenta bancaria del cliente, <strong>el IVA no es tuyo</strong>. Tienes que apartarlo obligatoriamente para luego liquidarlo a Hacienda en la declaración trimestral (Modelo 303). Si gastas el IVA recaudado pensando que es beneficio, tendrás un gran problema a final del trimestre. Por eso, en esta calculadora, todos los importes deben introducirse siempre <em>base imponible</em> (es decir, sin contar el IVA).
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Varía mucho el cálculo a final de año (Renta)?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Sí, ten en cuenta que la cifra que extrae esta calculadora reserva un 20% en concepto de IRPF. Durante la campaña de la Renta, todos tus ingresos mundiales y circunstancias personales (estado civil, hijos a cargo, hipoteca, etc.) se introducen en la base del IRPF. Tras ello, si habiendo adelantado ese 20% resulta que el impuesto total que debías era de un 16%, Hacienda te devolverá la diferencia. Si resulta ser de un 24%, te tocará pagar lo restante.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Autonomos;
