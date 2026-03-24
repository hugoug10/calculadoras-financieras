import React, { useState } from 'react';
import './SueldoNeto.css'; // Reutilizamos estilos base
import './Autonomos.css';

const Autonomos = () => {
  const [ingresosMensuales, setIngresosMensuales] = useState(3000);
  const [gastosMensuales, setGastosMensuales] = useState(500);
  const [cuotaMensual, setCuotaMensual] = useState(230); // El usuario introduce su cuota

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
      
    </div>
  );
};

export default Autonomos;
