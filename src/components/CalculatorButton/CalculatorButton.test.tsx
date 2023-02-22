import calculatorSlice from "../../store/features/calculatorSlice";

describe("calculatorSlice", () => {
  const initialState = {
    currentValue: "0",
    previousValue: "0",
    operator: null,
  };

  it("should return the initial state on first run", () => {
    expect(calculatorSlice(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle updateValue", () => {
    const state = initialState;
    const payload = "5";
    const action = { type: "calculator/updateValue", payload };
    const newState = calculatorSlice(state, action);

    expect(newState.currentValue).toEqual(payload);
  });

  it("should handle clear", () => {
    const state = {
      currentValue: "5",
      previousValue: "3",
      operator: "+",
    };
    const action = { type: "calculator/clear" };
    const newState = calculatorSlice(state, action);

    expect(newState).toEqual(initialState);
  });
});
