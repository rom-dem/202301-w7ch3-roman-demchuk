import React from "react";
import CalculatorButtonStyled from "./CalculatorButtonStyled";

interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <CalculatorButtonStyled onClick={onClick}>{label}</CalculatorButtonStyled>
  );
};
