import React from 'react';
import { Link } from 'react-router-dom';

const GuiaInteres = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/guias" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Volver a Guías</Link>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: '1.2' }}>
          El Secreto de la Inversión: Comprensión Total del Interés Compuesto
        </h1>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Se atribuye frecuentemente (aunque puede que apócrifamente) a Albert Einstein la célebre cita de que *"El interés compuesto es la octava maravilla del mundo. Quien lo entiende, se beneficia de él; quien no, lo paga"*. Históricamente ha demostrado ser el motor silencioso detrás de la erradicación del trabajo activo como única fuente de acumulación patrimonial a largo plazo. 
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>¿Qué es realmente el Interés Compuesto?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A diferencia de la aritmética estéril e independiente del interés simple, el interés compuesto es la materialización en finanzas de una **"bola de nieve"**. Sucede cuando el capital invertido genera rentabilidad durante un periodo, y al siguiente ciclo, esa rentabilidad producida se suma indisolublemente al capital subyacente. Al ocurrir esto, el nuevo porcentaje de rentabilidad no incidirá solo y unícamente sobre el capital semilla inicial, sino que comenzará a generar "*intereses de los intereses de los intereses*".
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>El papel central y fundamental del Tiempo</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Mucha literatura de educación financiera personal reciente se basa en el espejismo táctico del *"Market Timing"*, el intentar entrar al mercado buscando los cruces de medias móviles. En escenarios bursátiles genéricos basados en el crecimiento intrínseco del mercado de fondos S&P500, la variable matemáticamente principal que distorsionará positivamente cualquier proyección **no es el capital invertido y adosado al inicio, sino el Tiempo**.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Una contribución mensual pequeña sostenida mecánicamente e ininterrumpida a lo largo de 30 años, destrozará estruendosamente la capacidad de rendimientos de un aporte monumental único que solo trabaje durante la penúltima década de un ciclo de madurez poblacional. Por eso usar frecuentemente simuladores, en conjunción con calculadoras y nuestra propia <Link to="/interes" style={{ color: 'var(--primary)' }}>herramienta gráfica de interés</Link> te motivará incesablemente a arrancar aportes desde edades universitarias para generar una masa crítica inalcanzable pasada la treintena.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>Cómo aplicarlo prácticamente</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Re-inversión sistemática:</strong> Para que exista compuesto, los dividendos otorgados a los inversores de las corporaciones subyacentes no pueden ser gastados y liquidados trivialmente; obligatoriamente deberán de ser reinyectados de regreso al capital de fondo de inversión para poder recomprar nuevas participaciones que aceleren el factor temporal.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Puestos inflacionarios y Fiscales:</strong> El mayor depredador del interés compuesto es el entorno impositivo cíclico y de fricción. Herramientas con aplazamiento fiscal intrínseco blindarán el efecto bola de nieve en plazos decenales largos ante la vigilancia estatal.</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default GuiaInteres;
