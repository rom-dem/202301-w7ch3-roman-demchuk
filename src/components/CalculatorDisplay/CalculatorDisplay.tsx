import React from "react";
import { DisplayContainer } from "./CalculatorDisplayStyled";

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return <DisplayContainer>{value}</DisplayContainer>;
};

export default CalculatorDisplay;
