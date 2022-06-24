import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;

  h1 {
    color: var(--white);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    margin-bottom: 1.875rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
    max-width: 400px;

    span {
      margin: 0 .25rem;
      color: var(--white);
      background-color: var(--orange-500);
    }
  }
`;
