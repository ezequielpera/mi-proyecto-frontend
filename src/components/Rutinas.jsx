import Accordion from "react-bootstrap/Accordion";
import React from "react";

function Rutina({ value }) {
  return (
    <>
      {value === 0 && (
        <Accordion defaultActiveKey="0">
          <h3 className="text-center p-2">Tu rutina en la semana</h3>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Calentamiento (10-15 minutos)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Caminata de rodillas al pecho:</strong> 2 minutos
                </li>
                <li className="pb-2">
                  <strong>Balanceo de brazos:</strong> 1 minuto
                </li>
                <li className="pb-2">
                  <strong>Círculos de cadera:</strong> 2 series de 10
                  repeticiones en cada dirección
                </li>
                <li className="pb-2">
                  <strong>Saltos en el lugar:</strong> 2 series de 30 segundos
                </li>
                <li>
                  <strong>Estiramientos dinámicos:</strong> 5 minutos (enfócate
                  en piernas, caderas, hombros)
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fuerza (20-25 minutos)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <strong>
                    Push-ups modificados (fondos de brazos con rodillas)
                  </strong>
                  <ul>
                    <li>3 series de 8-10 repeticiones.</li>
                    <li>
                      Si es demasiado fácil, intenta hacerlo con las piernas
                      estiradas.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Hollow Body Hold (postura hueca en el suelo)</strong>
                  <ul>
                    <li>3 series de 15-20 segundos.</li>
                    <li>
                      Mantén la espalda baja contra el suelo y los brazos
                      estirados hacia adelante.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Hollow Body Holds (postura hueca)</strong>
                  <ul>
                    <li>3 series de 30-40 segundos.</li>
                    <li>
                      Mantén el abdomen contraído y la espalda baja presionada
                      contra el suelo.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Squats (sentadillas)</strong>
                  <ul>
                    <li>3 series de 12-15 repeticiones.</li>
                    <li>
                      Asegúrate de que tus rodillas no pasen por delante de los
                      pies.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Plank (plancha)</strong>
                  <ul>
                    <li>3 series de 20-30 segundos.</li>
                    <li>Mantén el cuerpo recto y el abdomen contraído.</li>
                  </ul>
                </li>
                <li>
                  <strong>Superman Hold (postura de superhéroe)</strong>
                  <ul>
                    <li>3 series de 15-20 segundos.</li>
                    <li>
                      Levanta los brazos y piernas del suelo, manteniendo el
                      pecho elevado.
                    </li>
                  </ul>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Habilidades básicas de gimnasia (15 minutos)
            </Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <strong>Forward Rolls (volteretas hacia adelante)</strong>
                  <ul>
                    <li>3 series de 3-5 repeticiones.</li>
                    <li>Concéntrate en hacer una voltereta suave y redonda.</li>
                  </ul>
                </li>
                <li>
                  <strong>Bear Walks (caminata de oso)</strong>
                  <ul>
                    <li>3 series de 10-15 metros.</li>
                    <li>
                      Mantén las piernas y brazos rectos mientras caminas en
                      cuatro patas.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Crab Walks (caminata de cangrejo)</strong>
                  <ul>
                    <li>3 series de 10-15 metros.</li>
                    <li>
                      Empuja con tus brazos mientras caminas hacia atrás en la
                      posición de cangrejo.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Bridges (puentes)</strong>
                  <ul>
                    <li>3 series de 15-20 segundos.</li>
                    <li>
                      Si no puedes hacer un puente completo, apoya los hombros y
                      eleva las caderas.
                    </li>
                  </ul>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Flexibilidad (10 minutos)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Estiramiento de piernas en mariposa:</strong> 2 series
                  de 20-30 segundos.
                </li>
                <li className="pb-2">
                  <strong>Estiramiento de cuádriceps:</strong> 2 series de 20-30
                  segundos por pierna.
                </li>
                <li className="pb-2">
                  <strong>Estiramiento de isquiotibiales:</strong> 2 series de
                  20-30 segundos por pierna.
                </li>
                <li>
                  <strong>
                    Estiramiento de hombros con brazos estirados hacia atrás:
                  </strong>{" "}
                  2 series de 20-30 segundos.
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Enfriamiento (5 minutos)</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li className="pb-2">
                  <strong>Respiración profunda</strong> y estiramientos suaves
                  para brazos, piernas y espalda.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Consejos adicionales:</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Frecuencia:</strong> Realiza esta rutina 3 veces por
                  semana.
                </li>
                <li className="pb-2">
                  <strong>Progresión:</strong> A medida que te sientas más
                  fuerte, aumenta las repeticiones y el tiempo de los ejercicios
                  isométricos como el plank y el hollow body.
                </li>
                <li className="pb-2">
                  <strong>Técnica:</strong> Concéntrate en mantener una forma
                  adecuada en todos los movimientos para evitar lesiones.
                </li>
              </ol>
              <p>
                Esta rutina te ayudará a desarrollar una base sólida de fuerza,
                flexibilidad y habilidades básicas de gimnasia. Ideal para
                quienes están comenzando su viaje en el fitness.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
      {value === 1 && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <h3 className="text-center p-2">Tu rutina en la semana</h3>
            <Accordion.Header>Calentamiento (10-15 minutos)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Círculos de brazos:</strong> 2 minutos (1 minuto hacia
                  adelante, 1 minuto hacia atrás)
                </li>
                <li className="pb-2">
                  <strong>Balanceos de pierna:</strong> 10 repeticiones por
                  pierna
                </li>
                <li className="pb-2">
                  <strong>Sentadillas profundas:</strong> 3 series de 10
                  repeticiones
                </li>
                <li className="pb-2">
                  <strong>Rotaciones de torso:</strong> 2 series de 10
                  repeticiones por lado
                </li>
                <li>
                  <strong>Estiramientos dinámicos:</strong> 5 minutos (enfócate
                  en piernas, caderas, hombros)
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fuerza (30 minutos)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <strong>Handstand (parada de manos) - 5 minutos</strong>
                  <ul>
                    <li>
                      <strong>Progresión:</strong> Si no puedes mantener una
                      parada de manos aún, trabaja en apoyarte contra una pared.
                    </li>
                    <li>
                      <strong>Objetivo:</strong> Mantén la posición por 30-60
                      segundos. Haz 3 intentos.
                    </li>
                    <li>
                      <strong>Descanso:</strong> 1 minuto entre intentos.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Push-ups (fondos de brazos)</strong>
                  <ul>
                    <li>4 series de 12-15 repeticiones</li>
                    <li>
                      Variante intermedia: Push-ups en declive (pies elevados en
                      un banco o escalón).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Hollow Body Holds (postura hueca)</strong>
                  <ul>
                    <li>3 series de 30-40 segundos.</li>
                    <li>
                      Mantén el abdomen contraído y la espalda baja presionada
                      contra el suelo.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>L-Sit en paralelas o suelo</strong>
                  <ul>
                    <li>3 series de 10-20 segundos.</li>
                    <li>
                      Si es difícil, puedes empezar levantando solo una pierna o
                      usando bloques.
                    </li>
                  </ul>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Habilidades básicas de gimnasia (20 minutos)
            </Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <strong>Forward Rolls (volteretas hacia adelante)</strong>
                  <ul>
                    <li>3 series de 5 repeticiones.</li>
                    <li>
                      Concéntrate en mantener una posición de cuerpo redonda y
                      suave.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Cartwheels (ruedas)</strong>
                  <ul>
                    <li>3 series de 5 repeticiones por lado.</li>
                    <li>Trabaja en ambos lados para mejorar la simetría.</li>
                  </ul>
                </li>

                <li>
                  <strong>Pike Stretch (estiramiento de pica)</strong>
                  <ul>
                    <li>3 series de 20-30 segundos.</li>
                    <li>Trata de tocar tus pies sin doblar las rodillas.</li>
                  </ul>
                </li>
                <li>
                  <strong>Arch Holds (postura de arco)</strong>
                  <ul>
                    <li>3 series de 20-30 segundos.</li>
                    <li>
                      Estira los brazos y piernas manteniendo el pecho elevado
                      del suelo.
                    </li>
                  </ul>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Flexibilidad (10 minutos)</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Estiramiento de hombros:</strong> 1 minuto por lado.
                </li>
                <li className="pb-2">
                  <strong>Estiramiento de isquiotibiales en pica:</strong> 2
                  series de 30 segundos.
                </li>
                <li className="pb-2">
                  <strong>Estiramiento de split frontal </strong> (si lo
                  tienes): 1 minuto por lado.
                </li>
                <li>
                  <strong>Estiramiento de puente:</strong> 2 series de 30
                  segundos.
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Enfriamiento (5-10 minutos)</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li className="pb-2">
                  <strong>Respiración controlada</strong> y estiramientos suaves
                  para piernas y espalda.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Consejos adicionales:</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Frecuencia:</strong> Realiza esta rutina 3-4 veces por
                  semana.
                </li>
                <li className="pb-2">
                  <strong>Progresión:</strong> Aumenta el tiempo en las paradas
                  de manos y L-sit, y mejora la técnica en los movimientos de
                  habilidad.
                </li>
                <li className="pb-2">
                  <strong>Descanso:</strong> Mantén descansos de 60-90 segundos
                  entre series.
                </li>
              </ol>
              <p>
                Esta rutina te ayudará a fortalecer tu control corporal, ganar
                flexibilidad y desarrollar habilidades clave en la gimnasia a
                nivel intermedio.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
      {value === 2 && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <h3 className="text-center p-2">Tu rutina en la semana</h3>
            <Accordion.Header>Calentamiento (15-20 minutos):</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li className="pb-2">
                  <strong>Rotaciones articulares:</strong> Cabeza, hombros,
                  muñecas, caderas, rodillas, tobillos.
                </li>
                <li className="pb-2">
                  <strong>Círculos con brazos:</strong> 2 series de 20
                  repeticiones en cada dirección.
                </li>
                <li className="pb-2">
                  <strong>Salto a la cuerda:</strong> 3-5 minutos.
                </li>
                <li className="pb-2">
                  <strong>Estiramientos dinámicos:</strong> Piernas (zancadas),
                  espalda (gatos y vacas), y hombros (rotaciones).
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fuerza (40 minutos)</Accordion.Header>
            <Accordion.Body>
              <h3>Parte Principal</h3>
              <ol>
                <li>
                  <strong>Parada de Manos (Handstand)</strong>
                  <ul>
                    <li>
                      4 series de 20-30 segundos en pared o libre, según tu
                      nivel. Objetivo: Mejora del equilibrio y fortalecimiento
                      del core.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Fondos en Anillas o Fondos Profundos</strong>
                  <ul>
                    <li>
                      4 series de 6-10 repeticiones. Objetivo: Desarrollo de
                      fuerza en el pecho, hombros y tríceps, con un enfoque en
                      el control de las anillas o el rango profundo de
                      movimiento.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Muscle-Ups (En anillas o barra)</strong>
                  <ul>
                    <li>
                      4 series de 4-8 repeticiones. Objetivo: Desarrollo de
                      fuerza explosiva y técnica de transición.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Front Lever</strong>
                  <ul>
                    <li>
                      4 series de 10-15 segundos o progresiones si aún no logras
                      mantener la posición completa. Progresiones: Rodillas
                      encogidas, una pierna extendida, posición en L. Objetivo:
                      Fortalecimiento de la espalda y el core.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Flexiones en Pica (Handstand Push-ups)</strong>
                  <ul>
                    <li>
                      4 series de 6-10 repeticiones. Objetivo: Fortalecer los
                      hombros y el core, mejorando el control en la posición
                      invertida.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Plancha (Planche) Progresiones</strong>
                  <ul>
                    <li>
                      4 series de 15-20 segundos o lo que puedas mantener en la
                      progresión más avanzada. Progresiones: Rodillas encogidas,
                      posición en tuck, media plancha. Objetivo: Aumentar la
                      fuerza del core, los hombros y los brazos.
                    </li>
                  </ul>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Enfriamiento y Estiramiento (10-15 minutos):
            </Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>
                  <strong>Estiramiento de puente:</strong> 2 series de 30
                  segundos.
                </li>
                <li>
                  <strong>Estiramiento de pectorales y hombros:</strong> 3
                  series de 30 segundos por lado.
                </li>
                <li>
                  <strong>
                    Estiramiento de cadena posterior (Isquiotibiales y espalda
                    baja):
                  </strong>{" "}
                  2 series de 30 segundos.
                </li>
                <li>
                  <strong>Relajación del core:</strong> Estiramientos suaves de
                  abdominales y espalda.
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Consejos adicionales:</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li className="pb-2">
                  Asegúrate de tener buena técnica antes de intentar los
                  movimientos más avanzados como el muscle-up y la plancha.
                </li>
                <li>
                  El progreso en movimientos avanzados requiere consistencia y
                  paciencia, enfócate en la técnica correcta para evitar
                  lesiones.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}

export default Rutina;
