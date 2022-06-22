import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh;
  background-color: #282828;
`;

export const Content = styled.img`
  position: absolute;
  width: 80%;
`;

export const Logo = styled.img`
  display: flex;
  animation: scale 2s infinite;

  @keyframes scale {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`;
