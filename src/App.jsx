import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavbarC from "./components/NavbarC";
import Rutas from "./components/Rutas";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarC />
        <Rutas />
      </BrowserRouter>
    </>
  );
}

export default App;
