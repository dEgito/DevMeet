import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  min-width: 300px;
  max-width: 320px;
  border-radius: 0.5rem;
  background-color: var(--white);
  color: var(--gray-900);

  strong {
    color: var(--orange-500);
    font-weight: 600;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bolder;
  }

  p {
    font-size: 0.9rem;
    color: var(--gray-400);
    max-width: none;
    margin-bottom: 1rem;
  }
`;

export const Microtext = styled.div`
  font-size: 0.8rem;
  line-height: 2rem;
  color: var(--gray-900);
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--orange-500);
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 4px;
  border: none;
  background-color: var(--green-500);
`;
