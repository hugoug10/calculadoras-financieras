import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './SueldoNeto.css';

const SueldoNeto = () => {
  const [bruto, setBruto] = useState(25000);
  const [pagas, setPagas] = useState(12);
  const [edad, setEdad] = useState(30);

  useEffect(() => {
    const saved = localStorage.getItem('financalc_sueldo');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.bruto) setBruto(data.bruto);
        if (data.pagas) setPagas(data.pagas);
        if (data.edad) setEdad(data.edad);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('financalc_sueldo', JSON.stringify({ bruto, pagas, edad }));
  }, [bruto, pagas, edad]);
  
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

  const chartData = [
    { name: 'Sueldo Neto Anual', value: parseFloat(resultados.netoAnual) },
    { name: 'Seguridad Social', value: parseFloat(resultados.ss) },
    { name: 'IRPF', value: parseFloat(resultados.irpfTotal) }
  ];
  const COLORS = ['#10B981', '#F5A623', '#F43F5E'];

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
      
      {/* EXPANSIÓN DE CONTENIDO PARA SEO Y ADSENSE */}
      <div className="seo-content glass" style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>¿Qué es el Sueldo Neto y cómo se diferencia del Bruto?</h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Cuando recibes una oferta de trabajo o estás negociando tu salario, las empresas siempre te comunican el <strong>Sueldo Bruto Anual</strong>. 
          Este importe incluye la cantidad total de dinero que la empresa destina a pagarte antes de aplicar los impuestos y cotizaciones obligatorias por ley. 
          Sin embargo, lo que realmente ingresas en tu cuenta bancaria cada mes es el <strong>Sueldo Neto</strong>, la cantidad final "limpia" tras las deducciones.
        </p>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>Principales deducciones en tu nómina (España)</h3>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
          <li>
            <strong>Aportaciones a la Seguridad Social (SS):</strong> Es una cuota obligatoria que se destina a financiar el estado del bienestar (pensiones, sanidad pública, prestación por desempleo). En general, a un trabajador por cuenta ajena se le descuenta en torno a un 6,35% de su base de cotización (4,7% por contingencias comunes, 1,55% por desempleo y 0,10% por formación profesional).
          </li>
          <li>
            <strong>Retención del IRPF (Impuesto sobre la Renta de las Personas Físicas):</strong> Es un anticipo o pago a cuenta que haces al Estado de cara a tu declaración de la Renta anual. Es un impuesto <em>progresivo</em>: cuanto más alto sea tu salario, mayor será el porcentaje de retención que se aplicará. No todo tu sueldo tributa al máximo, va tributando por "tramos".
          </li>
        </ul>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>¿Cómo usar esta calculadora?</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Nuestra calculadora de salario está diseñada de manera sencilla para ofrecerte un cálculo orientativo muy próximo a la realidad en unos pocos clics.
          Solamente tienes que introducir tu salario bruto anual (por ejemplo 25.000€), indicar si recibes 12 pagas (sueldo prorrateado) o 14 pagas (con dos pagas extras en verano y navidad), 
          y tu edad (ya que esto puede afectar a mínimos personales y familiares en el cálculo oficial).
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
          Preguntas Frecuentes (FAQ)
        </h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Me conviene más tener 12 o 14 pagas?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            A nivel anual, cobrarás <strong>exactamente el mismo Sueldo Neto</strong>. La diferencia radica únicamente en cómo se distribuye ese dinero a lo largo del año. 
            Si tienes 12 pagas, tu nómina mensual será más alta, ya que las pagas extra (normalmente de verano y navidad) están prorrateadas dentro de esas 12 mensualidades. 
            Con 14 pagas, cobrarás menos durante todos los meses ordinarios, pero recibirás nóminas duplicadas (o casi dobles, dependiendo del prorrateo) en los meses donde cae la extra.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Por qué mi empresa me retiene menos IRPF al principio?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Si empiezas a trabajar a mitad de año, la empresa calcula tu retención estimando lo que vas a ganar en los meses que restan de ese año, no sobre el salario anual completo. 
            Al ser una cantidad total menor, el porcentaje del IRPF será más bajo. Sin embargo, en enero del año siguiente la retención se ajustará y se incrementará de acuerdo con tu salario íntegro anual.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Es éste un cálculo exacto garantizado?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Nuestra herramienta ofrece una <strong>estimación técnica detallada</strong> basada en promedios y tramos generales actuales. No obstante, tu nómina exacta puede variar ligeramente 
            dependiendo del tipo de contrato (indefinido o temporal), convenio colectivo y circunstancias personales (porcentaje de invalidez, hijos a cargo). Recomendamos siempre hablar con el departamento 
            de RRHH de tu empresa para ajustar retenciones.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SueldoNeto;
