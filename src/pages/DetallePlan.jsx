import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetallePlan.css";

const DetallePlan = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    async function fetchPlan() {
      try {
        const response = await fetch(`/planes.json`);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        const selectedPlan = data.find((p) => p.id.toString() === id);
        setPlan(selectedPlan);
      } catch (error) {
        console.error("Error al obtener el plan:", error);
      }
    }

    fetchPlan();
  }, [id]);

  const renderObjectives = () => {
    if (!plan) return null;

    let objectives = [];
    let structure = [];
    let conclution;

    if (plan.name === "Plan Advanced") {
      objectives = [
        "Aumento de Fuerza y Potencia: Incorporar ejercicios de levantamiento de pesas, como el squat, el peso muerto y el press de banca, con un enfoque en la progresión de cargas.",
        "Mejora de la Resistencia Aeróbica y Anaeróbica: Utilizar entrenamientos de intervalos de alta intensidad (HIIT) y sesiones de cardio prolongadas para desarrollar la capacidad cardiovascular.",
        "Desarrollo de la Flexibilidad y Movilidad: Integrar estiramientos dinámicos y estáticos, así como ejercicios de movilidad, para prevenir lesiones y mejorar el rango de movimiento.",
        "Optimización de la Composición Corporal: A través de una nutrición adecuada y un control riguroso de las macros, se busca reducir el porcentaje de grasa corporal y aumentar la masa muscular magra.",
      ];

      structure = [
        "Fase de Carga: En esta fase, se realizan ejercicios compuestos con un enfoque en la cantidad de peso. Se recomienda trabajar en un rango de 4-6 repeticiones para maximizar la ganancia de fuerza.",

        "Fase de Hipertrofia: Aquí, se busca un mayor volumen de trabajo con rangos de 8-12 repeticiones. Se incorporan superseries y técnicas de entrenamiento como drop sets para estimular el crecimiento muscular.",

        "Fase de Potencia: Se introducen ejercicios explosivos, como saltos y levantamientos olímpicos, utilizando rangos de 1-3 repeticiones para desarrollar la velocidad y la fuerza explosiva.",

        "Fase de Recuperación: Esta fase incluye ejercicios de baja intensidad y movilidad, permitiendo que el cuerpo se recupere adecuadamente antes de iniciar un nuevo ciclo.",
      ];
      conclution =
        "Un plan de entrenamiento avanzado es una herramienta poderosa para quienes están dispuestos a comprometerse con un régimen riguroso y disciplinado. La clave está en la consistencia, la atención al detalle en la nutrición y la recuperación, y la voluntad de adaptarse a los cambios y desafíos que surjan en el camino hacia el logro de metas más ambiciosas. Con la mentalidad adecuada y un enfoque estructurado, el éxito está al alcance.";
    } else if (plan.name === "Plan Intermediate") {
      objectives = [
        "Aumento de Fuerza: Fortalecer los músculos mediante ejercicios compuestos y técnicas avanzadas, mejorando tanto la fuerza máxima como la resistencia.",
        "Mejora de la Resistencia Cardiovascular: Aumentar la capacidad aeróbica a través de entrenamientos de resistencia y ejercicios de alta intensidad.",
        "Desarrollo Muscular: Trabajar en la hipertrofia mediante una combinación de repeticiones y series que promueven el crecimiento muscular.",
        "Optimización de la Flexibilidad y Movilidad: Incluir rutinas que favorezcan el rango de movimiento y reduzcan el riesgo de lesiones.",
      ];

      structure = [
        "Entrenamiento de Fuerza: Se realizan de tres a cinco sesiones semanales, centradas en ejercicios compuestos (como sentadillas, peso muerto, y press de banca). Se utilizan rangos de repeticiones de 6 a 12 para fomentar tanto la fuerza como la hipertrofia.",

        "Entrenamiento Cardiovascular: Se incorporan de dos a cuatro sesiones semanales. Estas pueden variar desde cardio continuo a intensas sesiones de HIIT, adaptando la duración y la intensidad según el nivel de condición física del individuo.",

        "Flexibilidad y Movilidad: Se programan sesiones cortas al final de los entrenamientos o en días específicos, utilizando estiramientos estáticos y dinámicos, así como yoga o pilates para mejorar la recuperación y la movilidad articular.",
      ];
      conclution =
        "Un plan de entrenamiento intermedio es una excelente oportunidad para quienes desean avanzar en su viaje de fitness. Al integrar una variedad de métodos y enfoques, se puede lograr una mejora significativa en la fuerza, la resistencia y la composición corporal. La clave está en la consistencia, la atención a la nutrición y la recuperación adecuada. Con determinación y un enfoque estructurado, los resultados deseados están al alcance de la mano.";
    } else {
      // Otros planes o un mensaje predeterminado
      objectives = [
        "Introducción a la Actividad Física: Familiarizarse con diferentes tipos de ejercicios y comprender la importancia del ejercicio regular en la salud general.",
        "Desarrollo de la Fuerza: Trabajar en los músculos principales del cuerpo mediante ejercicios compuestos que promuevan el fortalecimiento y la tonificación.",
        "Mejora de la Resistencia Cardiovascular: Incrementar la capacidad cardiovascular a través de actividades aeróbicas que fomenten la salud del corazón y mejoren la resistencia.",
        "Fomento de la Flexibilidad y Movilidad: Incorporar estiramientos y ejercicios de movilidad que prevengan lesiones y mejoren el rango de movimiento.",
      ];

      structure = [
        "Entrenamiento de Fuerza: Se realizan de dos a tres sesiones por semana, centrándose en ejercicios básicos como sentadillas, flexiones y press de hombros. Se recomienda usar el peso corporal inicialmente y, a medida que se gana confianza y fuerza, se pueden incorporar mancuernas o bandas de resistencia.",

        "Entrenamiento Cardiovascular: Se incluyen de dos a tres sesiones semanales, que pueden consistir en caminatas, trotes ligeros, ciclismo o clases de aeróbicos. Estas sesiones deben durar entre 20 y 30 minutos, con un enfoque en mantener una conversación durante el ejercicio para asegurarse de que se trabaja a una intensidad moderada.",

        "Flexibilidad y Movilidad: Al final de cada sesión de entrenamiento, se deben incluir estiramientos estáticos para los principales grupos musculares. También se pueden dedicar días específicos a clases de yoga o pilates que ayuden a mejorar la flexibilidad y la conciencia corporal.",
      ];
      conclution =
        "Un plan de entrenamiento básico es una excelente manera de comenzar a construir un estilo de vida activo y saludable. Al enfocarse en ejercicios fundamentales, se sientan las bases para el progreso futuro, además de mejorar la salud general y el bienestar. Con consistencia, dedicación y un enfoque equilibrado en el ejercicio y la nutrición, los participantes pueden esperar ver mejoras significativas en su fuerza, resistencia y calidad de vida.";
    }

    return (
      <>
        <h3>Objetivos del Plan</h3>
        <ol>
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ol>
        <h3>Estructura del Plan</h3>
        <ol>
          {structure.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ol>
        <h3>Conclusion</h3>
        {conclution}
      </>
    );
  };

  return (
    <>
      {plan ? (
        <>
          <h1 className="text-center text-primary p-3 bg-body-secondary">
            Detalles del Plan
          </h1>
          <div className="p-3">
            <p className="display-3 underline-primary">{plan.name}</p>
            <p className="lead">{plan.description}</p>
            {renderObjectives()}
            <p className="fs-4 text-center fw-bold bg-body-secondary">
              {`$${plan.price}`}
            </p>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default DetallePlan;
