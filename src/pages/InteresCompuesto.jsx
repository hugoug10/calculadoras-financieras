import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SueldoNeto.css';

const InteresCompuesto = () => {
  const [inversionInicial, setInversionInicial] = useState(1000);
  const [aportacionMensual, setAportacionMensual] = useState(150);
  const [anualidadPct, setAnualidadPct] = useState(7);
  const [anos, setAnos] = useState(20);

  useEffect(() => {
    const saved = localStorage.getItem('financalc_interes');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.inversionInicial !== undefined) setInversionInicial(data.inversionInicial);
        if (data.aportacionMensual !== undefined) setAportacionMensual(data.aportacionMensual);
        if (data.anualidadPct !== undefined) setAnualidadPct(data.anualidadPct);
        if (data.anos !== undefined) setAnos(data.anos);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('financalc_interes', JSON.stringify({ inversionInicial, aportacionMensual, anualidadPct, anos }));
  }, [inversionInicial, aportacionMensual, anualidadPct, anos]);

  const calcularEvolucion = () => {
    const tasaMensual = (anualidadPct / 100) / 12;
    let balance = inversionInicial;
    let aportadoTotal = inversionInicial;
    const datos = [];

    for (let i = 0; i <= anos; i++) {
      datos.push({
        anio: i,
        Balance: Math.round(balance),
        Aportado: Math.round(aportadoTotal),
      });

      // Simular 12 meses del siguiente año
      for (let m = 0; m < 12; m++) {
        balance += aportacionMensual;
        aportadoTotal += aportacionMensual;
        balance *= (1 + tasaMensual);
      }
    }

    return datos;
  };

  const evolucion = calcularEvolucion();
  const resultadoFinal = evolucion[evolucion.length - 1];
  const beneficioTotal = resultadoFinal.Balance - resultadoFinal.Aportado;

  return (
    <div className="calc-container animation-fade">
      <div className="calc-header">
        <h1>Calculadora de Interés Compuesto</h1>
        <p>Proyecta cómo crecerá tu dinero a largo plazo gracias a la inversión.</p>
      </div>

      <div className="calc-grid">
        <div className="calc-panel form-panel glass">
          <div className="form-group">
            <label>Inversión Inicial</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={inversionInicial} 
                onChange={(e) => setInversionInicial(Number(e.target.value))}
                min="0"
                step="100"
              />
              <span className="symbol">€</span>
            </div>
          </div>

          <div className="form-group">
            <label>Aportación Mensual</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={aportacionMensual} 
                onChange={(e) => setAportacionMensual(Number(e.target.value))}
                min="0"
                step="50"
              />
              <span className="symbol">€</span>
            </div>
          </div>

          <div className="form-group">
            <label>Tasa de Rentabilidad Anual</label>
            <div className="input-with-symbol">
              <input 
                type="number" 
                value={anualidadPct} 
                onChange={(e) => setAnualidadPct(Number(e.target.value))}
                min="0"
                step="0.5"
              />
              <span className="symbol">%</span>
            </div>
          </div>

          <div className="form-group">
            <label>Años de Inversión</label>
            <input 
              type="number" 
              value={anos} 
              onChange={(e) => setAnos(Number(e.target.value))}
              min="1"
              max="50"
            />
          </div>
        </div>

        <div className="calc-panel results-panel glass">
          <h2>En {anos} años tendrás</h2>
          <div className="result-highlight">
            <span className="result-amount">{new Intl.NumberFormat('es-ES').format(resultadoFinal.Balance)} €</span>
          </div>
          
          <div style={{ height: '250px', width: '100%', marginTop: '1.5rem', marginBottom: '1rem' }}>
            <ResponsiveContainer>
              <AreaChart data={evolucion} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="anio" stroke="var(--text-muted)" tickFormatter={(val) => `A:${val}`} />
                <YAxis stroke="var(--text-muted)" tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`} />
                <Tooltip 
                  formatter={(value) => new Intl.NumberFormat('es-ES').format(value) + ' €'}
                  labelFormatter={(label) => `Año ${label}`}
                  contentStyle={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--text)' }}
                />
                <Area type="monotone" dataKey="Balance" stroke="var(--primary)" fillOpacity={1} fill="url(#colorBalance)" />
                <Area type="monotone" dataKey="Aportado" stroke="var(--text-muted)" fill="transparent" strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="results-breakdown">
            <div className="breakdown-item">
              <span>Dinero aportado por ti</span>
              <span>{new Intl.NumberFormat('es-ES').format(resultadoFinal.Aportado)} €</span>
            </div>
            <div className="breakdown-item" style={{ color: 'var(--primary)' }}>
              <span>Intereses ganados</span>
              <span>+ {new Intl.NumberFormat('es-ES').format(beneficioTotal)} €</span>
            </div>
          </div>

          <button className="btn-primary" onClick={() => window.print()}>Guardar Proyección PDF</button>
        </div>
      </div>
      
      {/* SEO INFO */}
      <div className="glass" style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>La Magia del Interés Compuesto</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
          El interés compuesto es la fuerza más poderosa del universo financiero. A diferencia del interés simple, el interés compuesto significa que los beneficios de tu inversión también generan sus propios beneficios al año siguiente.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          En el gráfico superior, la línea horizontal representa el <strong>dinero que ha salido de tu bolsillo</strong>. El área coloreada por encima representa el "dinero gratis" que ha generado tu capital invertido con el paso del tiempo. ¡El tiempo es el mayor aliado del ahorrador!
        </p>
      </div>

    </div>
  );
};

export default InteresCompuesto;
