import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;

  h1 {
    color: var(--white);
    font-size: 2.5rem;
  }

  p {
    color: var(--gray-100);
    font-size: 1.5rem;
    width: 100%;
    max-width: 250px;
    line-height: 2.2rem;

    @media (min-width: 700px) {
      max-width: 300px;
    }

    span {
      color: var(--white);
      background-color: var(--orange-500);
    }
  }
`;
