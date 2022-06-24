import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 1rem;

  color: var(--white);

  header {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    width: 100%;
    max-width: 250px;
    margin: 0;

    @media (min-width: 700px) {
      max-width: 300px;
    }
  }

  > main {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
  }
`;
