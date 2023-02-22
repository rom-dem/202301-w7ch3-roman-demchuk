import React from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorInput from "./CalculatorInput";
import CalculatorButtonGrid from "./CalculatorButtonGrid";
import { useSelector } from "react-redux";
import { selectCalculatorState } from "../store/calculatorSlice";
import CalculatorContainer from "./CalculatorStyled";

const Calculator = (): JSX.Element => {
  const calculatorState = useSelector(selectCalculatorState);

  return (
    <CalculatorContainer>
      <CalculatorDisplay value={calculatorState.displayValue} />
      <CalculatorInput />
      <CalculatorButtonGrid />
    </CalculatorContainer>
  );
};

export default Calculator;
