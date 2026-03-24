import React, { useState } from 'react';
import './SueldoNeto.css';

const SueldoNeto = () => {
  const [bruto, setBruto] = useState(25000);
  const [pagas, setPagas] = useState(12);
  const [edad, setEdad] = useState(30);
  
  // Cálculo simplificado de ejemplo (IRPF progresivo y SS)
  const calcularNeto = () => {
    // 1. Descuento de Seguridad Social (~6.35%)
    const ss = bruto * 0.0635;
    const baseIrpf = bruto - ss;
    
    // 2. IRPF (Simplificado por tramos para el ejemplo)
    let irpfPrc = 0;
    if (bruto <= 12450) irpfPrc = 0.09; // Tramo mínimo real + reducciones = casi 0, pero simplificamos
    else if (bruto <= 20200) irpfPrc = 0.12;
    else if (bruto <= 35200) irpfPrc = 0.15;
    else if (bruto <= 60000) irpfPrc = 0.20;
    else irpfPrc = 0.25;
    
    const retencionIrpf = baseIrpf * irpfPrc;
    const netoAnual = bruto - ss - retencionIrpf;
    const netoMensual = netoAnual / pagas;
    
    return {
      ss: ss.toFixed(2),
      irpfTotal: retencionIrpf.toFixed(2),
      irpfPrc: (irpfPrc * 100).toFixed(2),
      netoAnual: netoAnual.toFixed(2),
      netoMensual: netoMensual.toFixed(2)
    };
  };

  const resultados = calcularNeto();

  return (
    <div className="calc-container animation-fade">
      <div className="calc-header">
        <h1>Calculadora de Sueldo Neto</h1>
        <p>Averigua cuánto cobrarás exactamente cada mes después de impuestos.</p>
      </div>

      <div className="calc-grid">
        {/* Panel Izquierdo: Formulario */}
        <div className="calc-panel form-panel glass">
          <div className="form-group">
            <label>Sueldo Bruto Anual (€)</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={bruto} 
                onChange={(e) => setBruto(Number(e.target.value))}
                min="0"
                step="1000"
              />
              <span className="symbol">€</span>
            </div>
          </div>

          <div className="form-group">
            <label>Número de Pagas</label>
            <select value={pagas} onChange={(e) => setPagas(Number(e.target.value))}>
              <option value="12">12 Pagas (Sin pagas extras)</option>
              <option value="14">14 Pagas (Verano y Navidad)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Edad (Años)</label>
            <input 
              type="number" 
              value={edad} 
              onChange={(e) => setEdad(Number(e.target.value))}
              min="18"
              max="100"
            />
          </div>
        </div>

        {/* Panel Derecho: Resultados */}
        <div className="calc-panel results-panel glass">
          <h2>Tu Sueldo Limpio</h2>
          <div className="result-highlight">
            <span className="result-amount">{new Intl.NumberFormat('es-ES').format(resultados.netoMensual)} €</span>
            <span className="result-period">/ mes</span>
          </div>
          
          <div className="results-breakdown">
            <div className="breakdown-item">
              <span>Sueldo Bruto Mensual</span>
              <span>{new Intl.NumberFormat('es-ES').format((bruto / pagas).toFixed(2))} €</span>
            </div>
            <div className="breakdown-item warning">
              <span>Seguridad Social (6.35%)</span>
              <span>- {new Intl.NumberFormat('es-ES').format((resultados.ss / pagas).toFixed(2))} €</span>
            </div>
            <div className="breakdown-item danger">
              <span>IRPF Estimado ({resultados.irpfPrc}%)</span>
              <span>- {new Intl.NumberFormat('es-ES').format((resultados.irpfTotal / pagas).toFixed(2))} €</span>
            </div>
            <div className="breakdown-total">
              <span>Neto Anual Total</span>
              <span>{new Intl.NumberFormat('es-ES').format(resultados.netoAnual)} €</span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => window.print()}>Guardar PDF</button>
        </div>
      </div>
      
    </div>
  );
};

export default SueldoNeto;
