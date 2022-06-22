import { Content, Microtext, Button } from "./style";
import Arrow from "../../../../assets/Arrow.svg";

function Card () {
    return (
        <Content>
        <div>
          <strong>02/MAR</strong> - <span>19:00</span>
        </div>

        <h3>Criando interfacers muito malucas com o figma!</h3>
        <p>
          Você pode criar interfaces malucas que dispertam sua criativade.
          Usando de recursos do próprio figma, como seus plugins.
        </p>

        <Microtext>
          Organizado por:<strong>Comunidade Ballerini</strong>
        </Microtext>

        <Microtext>
          <span>
            Link do evento:
            <a href="https://www.google.com"> meet.google/evento-1</a>
          </span>

          <Button>
            <img src={Arrow} alt="avançar" />
          </Button>
        </Microtext>
      </Content>
    )
}

export default Card;