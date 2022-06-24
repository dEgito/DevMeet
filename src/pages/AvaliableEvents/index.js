import { Container } from "./style";
import Card from "./components/Card";

const cards = [
  {
    id: 1,
    date: {
      day: "02/MAR",
      hour: "19:00",
    },
    title: "Criando interfaces muito malucas com o Figma!",
    description:
      "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
    organizedBy: "Comunidade Ballerini",
    link: {
      link: "meet.google/evento-1",
      url: 'https://www.google.com',
    },
  },

  {
    id: 2,
    date: {
      day: "01/MAR",
      hour: "10:00",
    },
    title: "Entendendo melhor o Z-Pattern.",
    description:
      "Conheça como o olho humano observa um website a partir dos conceitos hierarquicos do Z-Pattern.",
    organizedBy: "Comunidade Ballerini",
    link: {
      link: "meet.google/evento-2",
      url: 'https://www.google.com',
    },
  },

  {
    id: 3,
    date: {
      day: "02/MAR",
      hour: "19:00",
    },
    title: "Criando interfaces muito malucas com o Figma!",
    description:
      "Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.",
    organizedBy: "Comunidade Ballerini",
    link: {
      link: "meet.google/evento-3",
      url: 'https://www.google.com',
    },
  },

  {
    id: 4,
    date: {
      day: "01/MAR",
      hour: "10:00",
    },
    title: "Entendendo melhor o Z-Pattern.",
    description:
      "Conheça como o olho humano observa um website a partir dos conceitos hierarquicos do Z-Pattern.",
    organizedBy: "Comunidade Ballerini",
    link: {
      link: "meet.google/evento-4",
      url: 'https://meet.google.com/',
    },
  },
];

function AvaliableEvents(props) {
  return (
    <Container>
      <header>
        <h1>Eventos disponíveis</h1>
        <p>Selecione o evento desejado.</p>
        <p>E espere sua data!</p>
      </header>

      <main>
        {cards.map((card) => {
          return (
            <Card
              day={card.date.day}
              hour={card.date.hour}
              title={card.title}
              description={card.description}
              organizedBy={card.organizedBy}
              link={card.link}
            />
          );
        })}
      </main>
    </Container>
  );
}

export default AvaliableEvents;
