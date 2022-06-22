import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;

  background-color: #282828;
  font-family: Epilogue, sans-serif;
  color: #ffffff;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
    width: 100%;
    max-width: 250px;
    line-height: 2.2rem;

    @media (min-width: 700px) {
      max-width: 300px;
    }

    span {
      background-color: #ff5100;
    }
  }
`;
