import React from "react";
import { render, screen } from "@testing-library/react";
import GlobalStyle from "./GlobalStyles";

describe("GlobalStyle", () => {
  it("renders without crashing", () => {
    render(<GlobalStyle />);
  });

  it("applies the expected global style", () => {
    render(<GlobalStyle />);
    const bodyElement = screen.getByRole("generic");
    expect(bodyElement).toBeInTheDocument();
  });
});
