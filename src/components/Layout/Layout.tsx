import React, { ReactNode } from "react";
import { LayoutContainer } from "./LayoutStyled";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
