let display = document.getElementById('display');
let currentInput = '0';

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== '0' && currentInput !== 'Error') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function appendToDisplay(value) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function operate(operator) {
    if (currentInput !== 'Error') {
        currentInput += operator;
        updateDisplay();
    }
}

function percentage() {
    if (currentInput !== 'Error') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
