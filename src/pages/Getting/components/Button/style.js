import styled from "styled-components";

export const BackButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 8px;
  background-color: #ff5100;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 1s ease-in-out;
  }
`;
