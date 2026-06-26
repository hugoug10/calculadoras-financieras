import React from 'react';
import { Link } from 'react-router-dom';

const GuiaAhorro = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/guias" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>← Volver a Guías</Link>
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)', lineHeight: '1.2' }}>
          Guía de Ahorro Personal: Cómo construir un colchón financiero desde cero
        </h1>

        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Ahorrar no es una cuestión de ingresos altos. Es una cuestión de hábitos y sistema. Hay personas con salarios muy por encima de la media que llegan justos a final de mes, y otras con ingresos modestos que construyen un patrimonio sólido año tras año. La diferencia no está en cuánto ganan, sino en cómo gestionan lo que ganan. Esta guía te da las herramientas concretas para empezar.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>1. Por qué ahorrar es urgente: el coste de no hacerlo</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            La mayor trampa financiera de la vida moderna es la <strong>ilusión de liquidez</strong>: tener dinero en cuenta corriente que parece abundante pero que desaparece mes a mes sin dejar rastro. Sin un fondo de ahorro, cualquier imprevisto —una avería del coche, una reparación en casa, una baja médica larga— se convierte en deuda. Y la deuda tiene un coste que se acumula silenciosamente.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Los datos son contundentes: más del 40% de los hogares españoles no podría afrontar un gasto imprevisto de 650€ sin endeudarse. Este colchón mínimo es precisamente lo primero que debes construir antes de pensar en invertir o en cualquier otro objetivo financiero.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>2. La Regla 50/30/20: el punto de partida</h2>
          <p style={{ marginBottom: '1rem' }}>
            Una de las metodologías de presupuesto más populares y efectivas para quienes empiezan es la <strong>Regla 50/30/20</strong>. Divide tu sueldo neto mensual en tres grandes categorías:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>50% para Necesidades:</strong> Alquiler o hipoteca, alimentación básica, suministros (luz, agua, gas), transporte al trabajo, seguros obligatorios. Todo aquello que no puedes eliminar sin que tu vida se vea seriamente afectada.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>30% para Deseos:</strong> Ocio, restaurantes, ropa, suscripciones de streaming, vacaciones, caprichos. Son gastos legítimos y necesarios para la calidad de vida, pero pueden reducirse si es necesario.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>20% para Ahorro e Inversión:</strong> Fondo de emergencia primero, después plan de pensiones, y finalmente cualquier otro objetivo financiero (entrada de piso, fondo de estudios de hijos, inversión indexada, etc.).
            </li>
          </ul>
          <p style={{ marginBottom: '1.5rem' }}>
            Si tu situación actual dista mucho de este esquema, no te agobies. Úsalo como <em>brújula</em>, no como mandamiento. El objetivo es progresar hacia ese equilibrio de forma gradual.
          </p>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>3. El Fondo de Emergencia: el primer objetivo irrenunciable</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Antes de cualquier inversión, antes de hacer aportaciones a planes de pensiones, antes de amortizar hipoteca anticipadamente: <strong>construye tu fondo de emergencia</strong>. La regla general es acumular entre 3 y 6 meses de tus gastos fijos mensuales en una cuenta líquida y separada de tu cuenta corriente.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            ¿Por qué separada? Porque el dinero que está accesible en la cuenta corriente tiende a gastarse. El fondo de emergencia debe estar fuera de tu vista diaria, pero accesible en 24-48 horas si lo necesitas. Una cuenta de ahorro remunerada o un fondo monetario son las opciones más adecuadas.
          </p>
          <div style={{ backgroundColor: 'rgba(245, 166, 35, 0.1)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid rgba(245, 166, 35, 0.3)', marginBottom: '1.5rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Ejemplo práctico:</strong> Si tus gastos fijos mensuales (alquiler + suministros + alimentación + transporte) suman 1.400€, tu fondo de emergencia objetivo debería estar entre 4.200€ (3 meses) y 8.400€ (6 meses). Empieza con el objetivo de los 3 meses y amplíalo después.
            </p>
          </div>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>4. Cómo construir el hábito: el ahorro automático</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            El mayor enemigo del ahorro no es la falta de dinero, sino la <strong>procrastinación y la racionalización</strong>: "este mes gasto más de lo normal, el mes que viene ahorro más". Ese mes que viene nunca llega. La solución es eliminar la decisión:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Configura una <strong>transferencia automática periódica</strong> el mismo día en que cobras tu nómina. El dinero debe salir antes de que tengas la oportunidad de gastarlo.</li>
            <li style={{ marginBottom: '0.5rem' }}>Empieza con una cantidad pequeña y cómoda aunque sea 50€ al mes. La consistencia importa más que el importe inicial.</li>
            <li style={{ marginBottom: '0.5rem' }}>Cada vez que recibas un ingreso extraordinario (paga extra, devolución de la renta, bonus), destina al menos el 50% al ahorro antes de hacer cualquier otro gasto.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>5. Control de gastos: encontrar las fugas</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Muchas personas se sorprenden cuando registran sus gastos por primera vez durante un mes completo. Las "fugas" más comunes son:
          </p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Suscripciones olvidadas:</strong> Servicios de streaming, aplicaciones, gimnasios que no se usan. Revisa tus cargos recurrentes cada 3 meses.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Alimentación sin planificar:</strong> Comer fuera por no planificar la semana o comprar sin lista de la compra. Cocinar en casa con planificación puede reducir este gasto un 40-60%.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Compras impulsivas online:</strong> El carrito fácil y los descuentos por tiempo limitado. La regla de las 72 horas (espera 3 días antes de cualquier compra no planificada) elimina el 80% de los impulsos.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Pequeños gastos diarios:</strong> El café, el tabaco, los tentempiés. Individualmente son insignificantes; sumados en un año pueden superar los 1.500€.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>6. Errores frecuentes que frenan el ahorro</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Intentar ahorrar lo que "sobra" a final de mes:</strong> Normalmente, no sobra nada. El ahorro debe ser el primer gasto del mes, no el último.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Mezclar el fondo de emergencia con objetivos de inversión:</strong> Son propósitos distintos. El fondo de emergencia es capital de protección, no de rendimiento. No lo pongas en activos volátiles.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Compararse con otros:</strong> La inflación del estilo de vida (upgrading constante de coche, piso, gadgets) es el principal ladrón silencioso del patrimonio de la clase media.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>No tener objetivos concretos:</strong> "Quiero ahorrar más" no es un objetivo. "Quiero tener 5.000€ en mi fondo de emergencia el 31 de diciembre" sí lo es.
            </li>
          </ul>

          <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '2rem', borderRadius: 'var(--radius)', marginTop: '3rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>Combina ahorro con inversión inteligente</h3>
            <p style={{ marginBottom: '0' }}>
              Una vez tengas tu fondo de emergencia cubierto, el siguiente paso es poner tu ahorro a trabajar mediante el interés compuesto. Descubre cómo funciona y visualiza el crecimiento de tu patrimonio en nuestra{' '}
              <Link to="/interes" style={{ color: 'var(--primary)' }}>Calculadora de Interés Compuesto</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaAhorro;
