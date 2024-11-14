import CardsC from "../components/CardsC";
import Carrousel from "../components/Carrousel";
import Container from "react-bootstrap/Container";

function Home() {  
  return (
    <>
      <Carrousel />
      <Container fluid="md">
        
          <CardsC/>
           
      </Container>
    </>
  );
}

export default Home;
