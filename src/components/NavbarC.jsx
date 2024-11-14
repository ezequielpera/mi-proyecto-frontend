import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarC.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../helpers/AuthContext';

function NavbarC() {
  const { user, setUser } = useContext(AuthContext); // Usa el contexto

  const capitalizarPrimeraLetra = (str) => {
    if (!str) return ''; // Manejo de cadenas vacías
    let primeraLetra = str.charAt(0).toUpperCase();
    return primeraLetra + str.slice(1);
  };

  const cerrarSesion = () => {
    sessionStorage.removeItem("Sesion");
    setUser(null); // Limpia el contexto
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-0">
      <Container fluid>
        <img src="/logotipo.png" alt="Imagen logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Inicio</NavLink>
            <NavLink to="/about" className="nav-link">Sobre nosotros</NavLink>
            <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            <NavLink to="/shop" className="nav-link">Tienda</NavLink>
            {user && <NavLink to="/plan" className="nav-link">MI PLAN</NavLink>}
            
          </Nav>
          <Nav>
            {user ? (
              <>
                <NavLink
                  to="/plan"
                  className="nav-link bg-success px-4 me-3 border-radius-3"
                >
                  {capitalizarPrimeraLetra(user.nombre)}
                </NavLink>
                <NavLink
                  to="/login"
                  className="nav-link bg-dark px-4 text-light"
                  onClick={cerrarSesion} // Solo pasa la función aquí
                >
                  Cerrar Sesión
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="nav-link bg-success px-4 me-3 border-radius-3"
                >
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  to="/register"
                  className="nav-link bg-dark px-4 text-light"
                >
                  Registrarme
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
