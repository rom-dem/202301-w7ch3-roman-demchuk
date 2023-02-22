import styled from "styled-components";

const CalculatorButtonStyled = styled.button`
  font-size: 2rem;
  padding: 1rem;
  background: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  grid-area: auto;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
  }
`;

export default CalculatorButtonStyled;
