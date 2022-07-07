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
        <p>
          Organizado por: <strong>{organizedBy}</strong>
        </p>
      </Microtext>

      <Microtext>
        <p>
          Link do evento:
          <a href={link.url} target="_blank">{link.link}</a>
        </p>

        <Link to="/info">
          <Button>
            <img src={Arrow} alt="avançar" />
          </Button>
        </Link>
      </Microtext>
    </Content>
  );
}

export default Card;
