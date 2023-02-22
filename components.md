# DATA

## DATA LAYER

## DATA MODIFICATION

CalculatorInput
The CalculatorInput component is responsible for handling user input. It includes an input field where the user can enter two numbers, and a set of buttons to select the arithmetic operation to perform.

Props
onInputChange: A function to handle changes to the input field value.
onButtonClick: A function to handle button clicks.

# STORE

# COMPONENTS

## APP

App
The App component is the top-level component of the calculator application. It includes the CalculatorInput and CalculatorDisplay components, and manages the state of the input field and the displayed result.

State
num1: The first number entered by the user.
num2: The second number entered by the user.
operator: The arithmetic operation selected by the user.
result: The result of the arithmetic operation.
Methods
handleInputChange: A function to handle changes to the input field value.
handleButtonClick: A function to handle button clicks.
calculateResult: A function to calculate the result of the arithmetic operation.

## DISPLAY

CalculatorDisplay
The CalculatorDisplay component is responsible for displaying the result of the arithmetic operation. It includes a read-only input field to display the result.

Props
value: The value to display in the input field.

## BUTTON

CalculatorButton
The CalculatorButton component is responsible for rendering a single calculator button. It includes a button element and a label for the button.

Props
label: The label for the button.
onClick: A function to handle button clicks.
