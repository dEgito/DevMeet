import Person from "../../assets/person.svg";
import Button from "./components/Button";

import {Link} from 'react-router-dom'

import { Container } from "./style";

function Getting() {
  return (
    <Container>
      <header>
        <h1>Olá, Dev!</h1>
        <p>
          Encontre seu <span> próximo</span> evento de programação!
        </p>
      </header>

      <img src={Person} alt="pessoa" />
      <Link to="/events">
        <Button />
      </Link>
    </Container>
  );
}

export default Getting;
