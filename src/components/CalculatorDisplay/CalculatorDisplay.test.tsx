import { render, screen } from "@testing-library/react";
import CalculatorDisplay from "./CalculatorDisplay";

describe("CalculatorDisplay", () => {
  it("renders the value", () => {
    const value = "123.45";
    render(<CalculatorDisplay value={value} />);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
