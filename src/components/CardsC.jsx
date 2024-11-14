import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/esm/CardGroup";
import { Link } from "react-router-dom";

export default function CardsC() {
  // Estado para almacenar los planes
  const [planes, setPlanes] = useState([]);

  // Efecto para cargar los datos cuando el componente se monta
  useEffect(() => {
    async function obtenerPlanes() {
      try {
        const response = await fetch("/planes.json");

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        setPlanes(data); // Guardamos los datos en el estado
      } catch (error) {
        console.error('Error al obtener los planes:', error);
      }
    }

    obtenerPlanes();
  }, []); // El array vacío indica que se ejecutará una vez al montar el componente

  return (
    <div>
      <CardGroup>
      {planes.map((plan) => (
        <Card key={plan.id} className="mb-4">
          <Card.Img variant="top" src={plan.img} />
          <Card.Body>
            <Card.Title className={plan.color}>
              {plan.name}
            </Card.Title>
            <Card.Text>
              {plan.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Link to={`/plan/${plan.id}`} className="btn btn-dark">
              Ver más
            </Link>
          </Card.Footer>
        </Card>
      ))}
      </CardGroup>
    </div>
  );
}
