import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operator: string | null;
}

const initialState: CalculatorState = {
  currentValue: "0",
  previousValue: "0",
  operator: null,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload;
    },
    clear: (state) => {
      state.currentValue = "0";
      state.previousValue = "0";
      state.operator = null;
    },
    addDecimal: (state) => {
      if (!state.currentValue.includes(".")) {
        state.currentValue += ".";
      }
    },
    toggleSign: (state) => {
      state.currentValue =
        state.currentValue.charAt(0) === "-"
          ? state.currentValue.slice(1)
          : "-" + state.currentValue;
    },
    inputDigit: (state, action: PayloadAction<string>) => {
      if (state.currentValue === "0" || state.currentValue === "-0") {
        state.currentValue = action.payload;
      } else {
        state.currentValue += action.payload;
      }
    },
    performOperation: (state, action: PayloadAction<string>) => {
      const operator = action.payload;

      if (state.operator !== null) {
        const prev = parseFloat(state.previousValue);
        const current = parseFloat(state.currentValue);
        const result = operate(prev, current, state.operator);
        state.currentValue = String(result);
        state.previousValue = String(result);
      } else {
        state.previousValue = state.currentValue;
      }

      state.currentValue = "0";
      state.operator = operator;
    },
  },
});

function operate(a: number, b: number, op: string): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
    default:
      return b;
  }
}

export const {
  updateValue,
  clear,
  addDecimal,
  toggleSign,
  inputDigit,
  performOperation,
} = calculatorSlice.actions;

const calculatorReducer = calculatorSlice.reducer;
export default calculatorReducer;
