import React from "react";
import Calculator from "./components/Calculator/Calculator";
import GlobalStyle from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Calculator />
    </>
  );
};

export default App;
