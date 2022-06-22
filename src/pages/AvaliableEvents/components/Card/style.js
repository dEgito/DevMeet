import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #282828;

  strong {
    color: #ff5100;
    font-weight: 600;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bolder;
  }

  p {
    font-size: 0.9rem;
    color: #959595;
    max-width: none;
    margin-bottom: 1rem;
  }
`;

export const Microtext = styled.div`
  font-size: 0.8rem;
  line-height: 2rem;
  color: #282828;
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
    color: #ff5100;
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
  background-color: rgba(4, 211, 97, 0.2);
`;
