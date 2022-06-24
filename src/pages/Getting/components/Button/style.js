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
  background-color: var(--orange-500);

  &:hover {
    background-color: var(--orange-300);
    transition: all .2s ease-in-out;
  }
`;
