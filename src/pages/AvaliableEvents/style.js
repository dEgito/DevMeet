import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 3rem 1rem 0 0;

  color: var(--white);

  header {
    margin-bottom: 1rem;
    text-align: center;
  }

  h1 {
    line-height: 2.5rem;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  > p {
    color: var(--gray-100);
    font-size: 1rem;
    line-height: 2rem;
    width: 100%;
    max-width: 25rem;
    margin: 0;

    @media (min-width: 700px) {
      max-width: 18.75rem;
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
    max-width: 62rem;
  }
`;
