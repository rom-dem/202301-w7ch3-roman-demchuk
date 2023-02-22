import React from "react";
import styled from "styled-components";

interface CalculatorDisplayProps {
  value: string;
}

const DisplayContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 48px;
  padding: 0 16px;
  background-color: #fff;
  color: #333;
`;

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return <DisplayContainer>{value}</DisplayContainer>;
};

export default CalculatorDisplay;
