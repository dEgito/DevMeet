import { Content, Microtext, Button } from "./style";
import Arrow from "../../../../assets/Arrow.svg";
import { Link } from "react-router-dom";

function Card({ title, day, hour, description, organizedBy, link }) {
  return (
    <Content>
      <div>
        <strong>{day}</strong> - <span>{hour}</span>
      </div>

      <h3>{title}</h3>
      <p>{description} </p>

      <Microtext>
        Organizado por:<strong>{organizedBy}</strong>
      </Microtext>

      <Microtext>
        <span>
          Link do evento:
          <a href={link.url}>{link.link}</a>
        </span>

        <Button>
          <img src={Arrow} alt="avançar" />
        </Button>
      </Microtext>
    </Content>
  );
}

export default Card;
