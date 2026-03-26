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
  const COLORS = ['#10b981', '#6b7280', '#f59e0b', '#ef4444'];

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
      
      {/* SEO INFO */}
      <div className="glass" style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Ser autónomo no significa ganar el 100% que facturas</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          La viabilidad de ser tu propio jefe depende de tus <strong>Márgenes de Beneficio reales</strong>. Como puedes ver en el gráfico, tus ingresos íntegros se reducen drásticamente por la suma de tus <strong>Gastos Fijos</strong> directos y las obligaciones estatales.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          La Cuota mensual de la Seguridad Social (que varía según los últimos tramos normativos) y el adelante del IRPF (típicamente entre un 15% y 20%) actúan como una pinza. Usa siempre el número gigante de la parte superior (Beneficio Neto Limpio) para tomar decisiones importantes sobre tu nivel de vida.
        </p>
      </div>

    </div>
  );
};

export default Autonomos;
