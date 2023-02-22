import { render, screen } from "@testing-library/react";
import { CalculatorGrid } from "./CalculatorGrid";

describe("CalculatorGrid", () => {
  it("renders its children", () => {
    render(
      <CalculatorGrid>
        <button>Button 1</button>
        <button>Button 2</button>
      </CalculatorGrid>
    );

    expect(screen.getByText("Button 1")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });
});
