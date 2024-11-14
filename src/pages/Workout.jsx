import React, { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useApi } from "../helpers/api";
import Rutina from "../components/Rutinas";

const Workout = () => {
  const { user } = useContext(AuthContext);

  // Si 'user' es nulo o indefinido, devuelve un mensaje o un loader
  if (!user) {
    return <p>Cargando información de usuario...</p>;
  }

  let id = -1;

  // Determina el plan basado en el campo 'plan' de 'user'
  if (user.plan === "Plan Beginner") {
    id = 0;
  } else if (user.plan === "Plan Intermediate") {
    id = 1;
  } else if (user.plan === "Plan Advanced") {
    id = 2;
  }

  // Llamar al hook useApi y obtener el plan y el error
  const { plan, error } = useApi(id);

  // Manejo de estados mientras se cargan los datos
  if (!plan) {
    return <p>Cargando plan...</p>;
  }

  if (error) {
    return <p>Error al cargar el plan: {error.message}</p>;
  }

  return (
    <>
      <h1 className="p-3 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        {user.plan}
      </h1>
      <Container fluid>
        <Row>
          <Col className="bg-secondary-subtle">
            <h3 className="text-center pb-3">La descripción de tu plan:</h3>
            <p className="w-80 text-center">{plan.description}</p>
          </Col>
          <Col>
            <Rutina value={id} />
          </Col>
        </Row>
        {id === 2 && (
          <>
            <Row>
              <Col>
                <p className="my-3 py-3">
                  Plan nutricional general para apoyar una rutina de gimnasio de
                  nivel avanzado. Este plan se enfoca en la recuperación
                  muscular, mejora de rendimiento, y equilibrio en los
                  macronutrientes (proteínas, carbohidratos y grasas
                  saludables). Recuerda que cada persona tiene necesidades
                  específicas basadas en sus metas, peso, nivel de actividad y
                  preferencias alimenticias. Es recomendable consultar a un
                  nutricionista para personalizar el plan según tu cuerpo.
                </p>

                <h3 className="mb-3">Plan Nutricional Diario para Nivel Avanzado</h3>
                <h4>Macronutrientes aproximados:</h4>
                <ul>
                  <li>
                    <strong>Proteínas:</strong> 1.6-2.2 g por kg de peso
                    corporal (para reparar y construir músculo).
                  </li>
                  <li>
                    <strong>Carbohidratos:</strong> 4-6 g por kg de peso
                    corporal (para energía).
                  </li>
                  <li>
                    <strong>Grasas saludables:</strong> 0.8-1 g por kg de peso
                    corporal (para función hormonal y energética).
                  </li>
                </ul>

                <h3 className="my-3 py-3">Día de ejemplo:</h3>
                <h4 className="my-3 pt-2">Desayuno (07:00-08:00)</h4>
                <ul>
                  <li>
                    <strong>4 claras de huevo + 2 huevos enteros</strong>{" "}
                    (Fuente de proteínas de alta calidad).
                  </li>
                  <li>
                    <strong>
                      1 taza de avena con frutas frescas (moras, fresas,
                      arándanos)
                    </strong>{" "}
                    (Carbohidratos complejos y antioxidantes).
                  </li>
                  <li>
                    <strong>1 cucharada de semillas de chía o linaza</strong>{" "}
                    (Fuente de fibra y grasas saludables).
                  </li>
                  <li>
                    <strong>1 vaso de agua o té verde.</strong>
                  </li>
                </ul>

                <h4 className="my-3 pt-2">Snack pre-entrenamiento (10:30-11:00)</h4>
                <ul>
                  <li>
                    <strong>
                      1 batido de proteínas (con leche de almendra o agua).
                    </strong>
                  </li>
                  <li>
                    <strong>1 plátano</strong> (Rico en potasio, excelente para
                    prevenir calambres).
                  </li>
                  <li>
                    <strong>20 gramos de almendras</strong> (Fuente de grasas
                    saludables y proteína).
                  </li>
                </ul>

                <h4 className="my-3 pt-2">Almuerzo (post-entrenamiento) (13:00-14:00)</h4>
                <ul>
                  <li>
                    <strong>
                      200 g de pechuga de pollo a la plancha o pescado
                    </strong>{" "}
                    (Fuente magra de proteínas).
                  </li>
                  <li>
                    <strong>1 taza de arroz integral o quinoa</strong>{" "}
                    (Carbohidratos de liberación lenta para reponer glucógeno
                    muscular).
                  </li>
                  <li>
                    <strong>1 taza de verduras al vapor</strong> (Brócoli,
                    espinacas, calabacín; ricos en micronutrientes).
                  </li>
                  <li>
                    <strong>1 cucharada de aceite de oliva virgen extra</strong>{" "}
                    (Grasas saludables).
                  </li>
                </ul>

                <h4 className="my-3 pt-2">Snack de la tarde (16:00-17:00)</h4>
                <ul>
                  <li>
                    <strong>1 batata o boniato asado</strong> (Carbohidratos
                    complejos).
                  </li>
                  <li>
                    <strong>1 puñado de nueces o semillas de calabaza</strong>{" "}
                    (Grasas saludables y magnesio).
                  </li>
                  <li>
                    <strong>1 yogurt griego bajo en grasa</strong> (Proteínas y
                    probióticos).
                  </li>
                </ul>

                <h4 className="my-3 pt-2">Cena (19:30-20:30)</h4>
                <ul>
                  <li>
                    <strong>200 g de salmón a la parrilla</strong> (Rico en
                    omega-3 y proteínas).
                  </li>
                  <li>
                    <strong>1 taza de quinoa o batata</strong> (Carbohidratos
                    complejos).
                  </li>
                  <li>
                    <strong>Ensalada de espinacas, aguacate y tomate</strong>
                    (Fibra, grasas saludables y antioxidantes).
                  </li>
                  <li>
                    <strong>Aderezo con aceite de oliva y limón.</strong>
                  </li>
                </ul>

                <h4 className="my-3 py-3">Snack nocturno (opcional) (21:30-22:00)</h4>
                <ul>
                  <li>
                    <strong>100 g de requesón o yogurt griego bajo en grasa</strong> (Caseína, una proteína de digestión lenta para la recuperación nocturna).
                  </li>
                  <li>
                    <strong>1 cucharada de mantequilla de maní o almendras</strong> (Grasas saludables y sabor).
                  </li>
                  
                </ul>

                <h3>Hidratación:</h3>

                <ul>
                  <li><strong>Agua:</strong> Beber al menos 2-3 litros de agua al día, dependiendo de la actividad física.</li>
                  <li><strong>Infusión:</strong> Té verde o té de jengibre para ayudar en la digestión.</li>
                  
                </ul>

                <h3>Suplementos (opcionales):</h3>
                <ol>
                  <li><strong>Proteína de suero (whey):</strong>Justo después del entrenamiento para recuperación muscular.</li>
                  <li><strong>Creatina monohidratada:</strong> Para mejorar la fuerza y el rendimiento en los entrenamientos.</li>
                  <li><strong>Multivitamínico:</strong>Para cubrir posibles deficiencias de micronutrientes.</li>
                  <li><strong>Omega-3 (aceite de pescado):</strong> Para la salud cardiovascular y la recuperación muscular.</li>
                </ol>

                <h3>Consejos adicionales:</h3>

                <ul>
                  <li>Intenta distribuir las proteínas en todas las comidas del día para maximizar la síntesis proteica.</li>
                  <li>Prioriza los carbohidratos complejos para energía sostenida, y evita los azúcares simples, excepto en momentos cercanos al entrenamiento.</li>
                  <li>Consume grasas saludables que apoyen la función hormonal y la saciedad.</li>
                </ul>

                <p>Puedes hacer ajustes según tus preferencias alimenticias o objetivos específicos (por ejemplo, ganancia muscular, pérdida de grasa).</p>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default Workout;
