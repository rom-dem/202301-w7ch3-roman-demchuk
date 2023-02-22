import calculatorReducer, {
  updateValue,
  clear,
  addDecimal,
  toggleSign,
  inputDigit,
  performOperation,
} from "./calculatorSlice";

describe("calculator reducer", () => {
  it("should return the initial state", () => {
    expect(calculatorReducer(undefined, {} as any)).toEqual({
      currentValue: "0",
      previousValue: "0",
      operator: null,
    });
  });

  it("should handle updateValue", () => {
    const state = {
      currentValue: "0",
      previousValue: "0",
      operator: null,
    };
    const action = updateValue("123");
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("123");
  });

  it("should handle clear", () => {
    const state = {
      currentValue: "123",
      previousValue: "456",
      operator: "+",
    };
    const action = clear();
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("0");
    expect(nextState.previousValue).toEqual("0");
    expect(nextState.operator).toBeNull();
  });

  it("should handle addDecimal", () => {
    const state = {
      currentValue: "3",
      previousValue: "2",
      operator: "+",
    };
    const action = addDecimal();
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("3.");
  });

  it("should handle toggleSign", () => {
    const state = {
      currentValue: "3",
      previousValue: "2",
      operator: "+",
    };
    const action = toggleSign();
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("-3");
  });

  it("should handle inputDigit when currentValue is '0'", () => {
    const state = {
      currentValue: "0",
      previousValue: "2",
      operator: "+",
    };
    const action = inputDigit("3");
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("3");
  });

  it("should handle inputDigit when currentValue is not '0'", () => {
    const state = {
      currentValue: "3",
      previousValue: "2",
      operator: "+",
    };
    const action = inputDigit("4");
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("34");
  });

  it("should handle performOperation when operator is null", () => {
    const state = {
      currentValue: "3",
      previousValue: "2",
      operator: null,
    };
    const action = performOperation("+");
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("0");
    expect(nextState.previousValue).toEqual("3");
    expect(nextState.operator).toEqual("+");
  });

  it("should handle performOperation when operator is not null", () => {
    const state = {
      currentValue: "3",
      previousValue: "2",
      operator: "+",
    };
    const action = performOperation("-");
    const nextState = calculatorReducer(state, action);

    expect(nextState.currentValue).toEqual("0");
    expect(nextState.previousValue).toEqual("5");
    expect(nextState.operator).toEqual("-");
  });
});
