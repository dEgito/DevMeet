import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  min-width: 18.75rem;
  max-width: 20rem;
  height: 13.75rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  color: var(--gray-900);

  > div {
    margin-bottom: 0.5rem;
    font-family: var(--secundary-type);
  }

  div > strong {
    font-size: 1rem;
    color: var(--orange-500);
    font-weight: 600;
  }

  div > span {
    font-size: 1rem;
    font-weight: 500;
    color: var(--orange-500);
  }

  > h3 {
    color: var(--gray-900);
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  > p {
    font-size: 0.625rem;
    line-height: 0.875rem;
    color: var(--gray-500);
    max-width: none;
    margin-bottom: 0.875rem;
  }
`;

export const Microtext = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--gray-900);
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;

  a {
    text-decoration: none;
    color: var(--orange-500);
    font-weight: 700;
    padding: 0 0.25rem;

    &:hover {
      color: var(--orange-300);
    }
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
  transition: all 1s;

  &:hover {
    background-color: var(--green-700);
    padding-left: .5rem;
    box-sizing: border-box;
    transition: all 1s;
  }
`;
