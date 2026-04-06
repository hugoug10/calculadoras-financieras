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
      {/* EXPANSIÓN DE CONTENIDO PARA SEO Y ADSENSE */}
      <div className="seo-content glass" style={{ marginTop: '4rem', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>¿Qué es el IVA y cómo afecta a tus facturas?</h2>
        
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          El <strong>Impuesto sobre el Valor Añadido (IVA)</strong> es un impuesto indirecto que grava el consumo de bienes y servicios en España (y en casi toda la Unión Europea). 
          Decimos que es "indirecto" porque no lo pagas directamente a Hacienda según tus ingresos (como el IRPF), sino que lo abonas al comprar un producto o contratar un servicio, 
          y es el vendedor (autónomo o empresa) quien tiene la obligación de recaudarlo y entregarlo a la administración Tributaria (Hacienda) trimestralmente.
        </p>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>Tipos de IVA aplicables en España (Península y Baleares)</h3>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
          <li>
            <strong>IVA General (21%):</strong> Es el tipo por defecto que se aplica a la inmensa mayoría de productos y servicios: tecnología, ropa, vehículos, servicios profesionales, electricidad, telefonía, etc.
          </li>
          <li>
            <strong>IVA Reducido (10%):</strong> Se aplica a bienes y servicios considerados de primera necesidad o de impulso económico clave. Ejemplos incluyen el transporte de viajeros, la hostelería y restauración, ciertos productos alimenticios y productos sanitarios.
          </li>
          <li>
            <strong>IVA Superreducido (4%):</strong> Reservado para bienes de primera necesidad ineludible. Aplica a productos básicos como el pan, la leche, frutas y verduras, medicamentos, libros impresos, revistas y prensa.
          </li>
          <li>
            <strong>Exento (0%):</strong> Existen actividades que, por su naturaleza, no llevan IVA. Las más comunes son los servicios educativos (clases de temarios normados), los servicios médicos y sanitarios, y los seguros.
          </li>
        </ul>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text)' }}>¿En qué se diferencian la Base Imponible y la Cuota?</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Toda factura oficial se compone de tres partes. La <strong>Base Imponible</strong> es el precio real del producto o servicio que es "propiedad" del vendedor. 
          La <strong>Cuota de IVA</strong> o importe del impuesto es ese 21%, 10% o 4% que se calcula multiplicando el porcentaje por la base imponible. 
          Al sumar la Base y la Cuota, obtenemos el <strong>Precio Total Final</strong>, que es el desembolso que el cliente va a realizar de su bolsillo.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
          Preguntas Frecuentes (FAQ) sobre el cálculo del IVA
        </h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Cómo extraer el IVA de un precio total matemáticamente?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Un error matemático muy común es restarle el 21% directamente al precio total. ¡Eso está mal! Si un producto cuesta 121€ IVA incluido y le restas el 21%, te dará 95,59€. 
            Para extraer correctamente el IVA, debes dividir el Precio Total entre 1 más el porcentaje de IVA en decimal. Si es el 21%, debes dividir el Total entre <strong>1.21</strong>. 
            (Ejemplo: 121 / 1.21 = 100€ de Base Imponible exacta). Esta herramienta hace eso automáticamente por ti usando la pestaña "Total (Con IVA)".
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Cuándo debo utilizar la calculadora "Añadir IVA" vs "Extraer IVA"?</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Si eres un proveedor que ha fijado sus precios en limpio y necesita saber cuánto tiene que poner en la línea de Total de su factura para enviarla al cliente, debes elegir <strong>"Suma de Base (Sin IVA)"</strong>. 
            Si, por el contrario, has realizado una compra doméstica por internet o en un supermercado y quieres saber de esos euros que has gastado, cuántos son del producto real y cuántos se lleva el Estado, deberás elegir <strong>"Desglose desde Total (Con IVA)"</strong>.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Iva;
