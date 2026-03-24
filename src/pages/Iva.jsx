import React, { useState, useEffect } from 'react';
import './SueldoNeto.css'; // Reutilizamos base
import './Iva.css';

const Iva = () => {
  const [importe, setImporte] = useState(100);
  const [tipoImporte, setTipoImporte] = useState('base'); // 'base' o 'total'
  const [porcentajeIva, setPorcentajeIva] = useState(21);

  const [resultados, setResultados] = useState({ base: 0, cuota: 0, total: 0 });

  useEffect(() => {
    calcularIva();
  }, [importe, tipoImporte, porcentajeIva]);

  const calcularIva = () => {
    let base = 0;
    let cuota = 0;
    let total = 0;
    const multiplicadorIva = porcentajeIva / 100;

    if (tipoImporte === 'base') {
      base = importe;
      cuota = base * multiplicadorIva;
      total = base + cuota;
    } else {
      // Desglosar desde el total
      total = importe;
      base = total / (1 + multiplicadorIva);
      cuota = total - base;
    }

    setResultados({
      base: base.toFixed(2),
      cuota: cuota.toFixed(2),
      total: total.toFixed(2)
    });
  };

  return (
    <div className="calc-container animation-fade">
      <div className="calc-header">
        <h1>Calculadora de IVA online</h1>
        <p>Añade o extrae el IVA de cualquier importe al instante, sin complicaciones.</p>
      </div>

      <div className="calc-grid">
        <div className="calc-panel form-panel glass">
          <div className="form-group toggle-group">
            <label>¿Qué importe vas a introducir?</label>
            <div className="toggle-buttons">
              <button 
                className={`toggle-btn ${tipoImporte === 'base' ? 'active' : ''}`}
                onClick={() => setTipoImporte('base')}
              >
                Base (Sin IVA)
              </button>
              <button 
                className={`toggle-btn ${tipoImporte === 'total' ? 'active' : ''}`}
                onClick={() => setTipoImporte('total')}
              >
                Total (Con IVA)
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Importe</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={importe} 
                onChange={(e) => setImporte(Number(e.target.value))}
                min="0"
                step="0.01"
              />
              <span className="symbol">€</span>
            </div>
          </div>

          <div className="form-group">
            <label>Tipo de IVA aplicado</label>
            <select value={porcentajeIva} onChange={(e) => setPorcentajeIva(Number(e.target.value))}>
              <option value="21">21% (General)</option>
              <option value="10">10% (Reducido)</option>
              <option value="4">4% (Superreducido)</option>
              <option value="0">0% (Exento)</option>
            </select>
          </div>
        </div>

        <div className="calc-panel results-panel glass">
          <h2>Desglose de la factura</h2>
          
          <div className="result-highlight" style={{ flexDirection: 'column', gap: '5px' }}>
            <span className="result-period" style={{ fontSize: '1rem' }}>PRECIO FINAL</span>
            <span className="result-amount">{new Intl.NumberFormat('es-ES').format(resultados.total)} €</span>
          </div>
          
          <div className="results-breakdown">
            <div className="breakdown-item">
              <span>Base Imponible</span>
              <span>{new Intl.NumberFormat('es-ES').format(resultados.base)} €</span>
            </div>
            <div className="breakdown-item warning">
              <span>Cuota de IVA ({porcentajeIva}%)</span>
              <span>+ {new Intl.NumberFormat('es-ES').format(resultados.cuota)} €</span>
            </div>
            <div className="breakdown-total">
              <span>Total a pagar/cobrar</span>
              <span>{new Intl.NumberFormat('es-ES').format(resultados.total)} €</span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => {
            navigator.clipboard.writeText(`Base: ${resultados.base}€ | IVA: ${resultados.cuota}€ | Total: ${resultados.total}€`);
            alert('¡Resultado copiado al portapapeles!');
          }}>Copiar Resultados</button>
        </div>
      </div>
      
    </div>
  );
};

export default Iva;
