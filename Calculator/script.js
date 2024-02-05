// Get the HTML element with the id 'display'
let display = document.getElementById('display');

// Initialize the variable 'currentInput' with the default value '0'
let currentInput = '0';

// Function to clear the display and set 'currentInput' to '0'
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Function to toggle the sign of the current input (positive/negative)
function toggleSign() {
    // Check if the current input is not '0' and not an 'Error'
    if (currentInput !== '0' && currentInput !== 'Error') {
        // Toggle the sign by multiplying the current input by -1
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

// Function to append a value to the display
function appendToDisplay(value) {
    // Check if the current input is '0' or an 'Error'
    if (currentInput === '0' || currentInput === 'Error') {
        // Set the current input to the new value
        currentInput = value;
    } else {
        // Append the value to the current input
        currentInput += value;
    }
    updateDisplay();
}

// Function to append an operator to the current input
function operate(operator) {
    // Check if the current input is not an 'Error'
    if (currentInput !== 'Error') {
        // Append the operator to the current input
        currentInput += operator;
        updateDisplay();
    }
}

// Function to calculate the percentage of the current input
function percentage() {
    // Check if the current input is not an 'Error'
    if (currentInput !== 'Error') {
        // Calculate the percentage by dividing the current input by 100
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

// Function to calculate the result of the expression and update the display
function calculateResult() {
    try {
        // Use the 'eval' function to calculate the result of the expression
        currentInput = eval(currentInput).toString();
    } catch (error) {
        // If an error occurs during evaluation, set 'currentInput' to 'Error'
        currentInput = 'Error';
    }
    updateDisplay();
}

// Function to update the display with the current input value
function updateDisplay() {
    display.textContent = currentInput;
}
