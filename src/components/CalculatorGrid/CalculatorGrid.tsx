import React, { ReactNode } from "react";
import { Grid } from "./CalculatorGridStyled";

interface Props {
  children: ReactNode;
}

export const CalculatorGrid: React.FC<Props> = ({ children }) => {
  return <Grid>{children}</Grid>;
};
