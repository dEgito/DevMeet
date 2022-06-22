import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 1rem;

  background-color: #282828;
  font-family: Epilogue, sans-serif;
  color: #ffffff;

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
`;

