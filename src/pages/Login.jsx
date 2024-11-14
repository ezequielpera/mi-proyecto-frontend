import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const { user, setUser } = useContext(AuthContext);
 

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Recuperar las cuentas del localStorage
    const usuariosRegistrados =
      JSON.parse(localStorage.getItem("Cuentas")) || [];

    // Buscar si existe un usuario con el correo y la contraseña proporcionados
    const usuarioEncontrado = usuariosRegistrados.find(
      (user) => user.correo === correo && user.contraseña === contraseña
    );

    
      if (usuarioEncontrado) {
        setUser(usuarioEncontrado);
        setCorreo("");
        setContraseña("");
        setShowModalSuccess(true);
        navigate("/");
      } else {
        setError("Correo o contraseña incorrectos");
        setShowModal(true); // Muestra el modal si hay un error
      }
    
      
    
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowModalSuccess(false);
  };

  return (
    <div className="div-image">
      <Container>
        <Row className="h-100">
          <Col
            md={6}
            lg={3}
            className="ms-auto px-3 h-100 bg-form d-flex align-items-center"
          >
            <Form className="w-100 d-flex flex-column" onSubmit={handleLogin}>
              <h2 className="text-center">Inicia Sesión</h2>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduce tu correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introduce tu contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Loguearme
              </Button>
              {error && <p className="text-danger">{error}</p>}
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Modal para mostrar errores */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para mostrar logueo exitoso */}
      <Modal show={showModalSuccess} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido {user?.nombre || "Usuario"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Acabas de loguearte.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
