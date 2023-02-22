import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./CalculatorButton";

describe("Given a Button component", () => {
  describe("CalculatorButton", () => {
    test("renders label", () => {
      render(<Button label="7" onClick={() => {}} />);
      const labelElement = screen.getByText("7");
      expect(labelElement).toBeInTheDocument();
    });

    test("calls onClick when clicked", () => {
      const handleClick = jest.fn();
      render(<Button label="7" onClick={handleClick} />);
      const buttonElement = screen.getByText("7");
      fireEvent.click(buttonElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
