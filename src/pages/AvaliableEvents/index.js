import { Container } from "./style";
import Card from "./components/Card";

function AvaliableEvents() {
  return (
    <Container>
      <header>
        <h1>Eventos disponíveis</h1>
        <p>Selecione o evento desejado.</p>
        <p>E espere sua data!</p>
      </header>

      <Card />
    </Container>
  );
}

export default AvaliableEvents;
