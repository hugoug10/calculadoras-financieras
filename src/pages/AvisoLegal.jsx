import React from 'react';

const AvisoLegal = () => {
  return (
    <div className="page-container animation-fade">
      <div className="calc-header">
        <h1>Aviso Legal</h1>
        <p>Datos identificativos y términos de uso generales de la plataforma.</p>
      </div>

      <div className="calc-panel glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>1. Datos de Identidad</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), le informamos que el presente sitio web es propiedad del equipo desarrollador de FinanCalc. Para ponerte en contacto con nosotros, puedes escribirnos al email <strong>soporte@financalc.es</strong>.
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>2. Objeto de la web</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          FinanCalc proporciona acceso a artículos, informaciones y herramientas interactivas (en adelante, "los contenidos") pertenecientes a FinanCalc o a sus licenciantes. El usuario asume la responsabilidad del uso del portal de forma personal.
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>3. Exclusión de Garantías y Responsabilidad Técnica</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          Las herramientas y calculadoras alojadas en esta web han sido diseñadas a partir de normativas vigentes genéricas con un <strong>fin exclusivamente educativo y orientativo</strong>. FinanCalc no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores impositivos en declaraciones, pérdida de rendimiento empresarial por depender de un cálculo erróneo, o desajustes normativos. <strong>No somos asesoría fiscal ni gestoría.</strong>
        </p>

        <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>4. Propiedad Intelectual e Industrial</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          FinanCalc es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, el código fuente en React, el diseño UI/UX, logotipos, etc.). Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default AvisoLegal;
