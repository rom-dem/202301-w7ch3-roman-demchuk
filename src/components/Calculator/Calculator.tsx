import React from "react";
import {
  addDecimal,
  clear,
  inputDigit,
  performOperation,
  toggleSign,
} from "../../store/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CalculatorButton } from "../CalculatorButton/CalculatorButton";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import { CalculatorGrid } from "../CalculatorGrid/CalculatorGrid";

const Calculator = () => {
  const currentValue = useAppSelector((state) => state.calculator.currentValue);
  const dispatch = useAppDispatch();

  const handleInputDigit = (digit: string) => {
    dispatch(inputDigit(digit));
  };

  const handleAddDecimal = () => {
    dispatch(addDecimal());
  };

  const handleToggleSign = () => {
    dispatch(toggleSign());
  };

  const handlePerformOperation = (operator: string) => {
    dispatch(performOperation(operator));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <>
      <CalculatorDisplay value={currentValue} />
      <CalculatorGrid>
        <CalculatorButton label="AC" onClick={handleClear} />
        <CalculatorButton label="+/-" onClick={handleToggleSign} />
        <CalculatorButton
          label="%"
          onClick={() => handlePerformOperation("%")}
        />
        <CalculatorButton
          label="÷"
          onClick={() => handlePerformOperation("÷")}
        />
        <CalculatorButton label="7" onClick={() => handleInputDigit("7")} />
        <CalculatorButton label="8" onClick={() => handleInputDigit("8")} />
        <CalculatorButton label="9" onClick={() => handleInputDigit("9")} />
        <CalculatorButton
          label="x"
          onClick={() => handlePerformOperation("x")}
        />
        <CalculatorButton label="4" onClick={() => handleInputDigit("4")} />
        <CalculatorButton label="5" onClick={() => handleInputDigit("5")} />
        <CalculatorButton label="6" onClick={() => handleInputDigit("6")} />
        <CalculatorButton
          label="-"
          onClick={() => handlePerformOperation("-")}
        />
        <CalculatorButton label="1" onClick={() => handleInputDigit("1")} />
        <CalculatorButton label="2" onClick={() => handleInputDigit("2")} />
        <CalculatorButton label="3" onClick={() => handleInputDigit("3")} />
        <CalculatorButton
          label="+"
          onClick={() => handlePerformOperation("+")}
        />
        <CalculatorButton label="0" onClick={() => handleInputDigit("0")} />
        <CalculatorButton label="." onClick={handleAddDecimal} />
        <CalculatorButton
          label="="
          onClick={() => handlePerformOperation("=")}
        />
      </CalculatorGrid>
    </>
  );
};

export default Calculator;
