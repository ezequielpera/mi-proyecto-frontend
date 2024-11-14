import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Register() { 
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [plan, setPlan] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('Cuentas')) || [];
    setUsers(usuariosGuardados);
  }, []);

  const agregarUsuario = () => {
    let user = {
      nombre,
      correo,
      contraseña,
      plan
    };

    const nuevosUsuarios = [...users, user];
    setUsers(nuevosUsuarios);
    localStorage.setItem('Cuentas', JSON.stringify(nuevosUsuarios));

    setNombre('');
    setCorreo('');
    setContraseña('');
    setPlan('');  
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  
  return (
    <div className="container-sm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Eligí tu plan de entrenamiento</Form.Label>
          <Form.Select value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option>---</option>
            <option>Plan Beginner</option>
            <option>Plan Intermediate</option>
            <option>Plan Advanced</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Button type="button" variant="success" onClick={agregarUsuario}>Registrarme</Button>

      {/* Modal de éxito */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>La cuenta ha sido creada exitosamente.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;
