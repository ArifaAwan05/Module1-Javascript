//Add new feature
let isResultDisplayed = false; // Flag to track if a result has been displayed

// Constants
const PI = 3.1416;
const E = 2.7182;


// Update display function
function updateDisplay(value) {
    document.getElementById('display').value = value;
}

// Append value to display
function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (isResultDisplayed) {
        // If a result has been displayed, reset display for new input
        display.value = ''; 
        isResultDisplayed = false;
    }

    display.value += value;
}

// Clear display
function clearDisplay() {
    updateDisplay('');
    isResultDisplayed = false; // Reset flag when display is cleared
}

// Delete the last character from the display
function deleteLastCharacter() {
    let display = document.getElementById('display');
    let currentValue = display.value;

    if (currentValue.length > 0) {
        // Remove the last character
        display.value = currentValue.slice(0, -1);
    }
}

// Evaluate the expression
function evaluateExpression(expression) {
    // Replace variable names with their values
    for (const [key, value] of Object.entries(variables)) {
        expression = expression.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
    }

    // Replace constants
    expression = expression.replace(/pi/g, PI);
    expression = expression.replace(/e/g, E);

    // Handle square roots
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');

    // Handle trigonometric functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');

    // Handle exponentiation
    expression = expression.replace(/\^/g, '**');

    try {
        // Use Function constructor to evaluate the expression
        let result = new Function('return ' + expression)();

        // Check for invalid results
        if (result === Infinity || isNaN(result)) {
            throw new Error('Math error');
        }

        return result.toFixed(4);
    } catch (error) {
        return 'Error: Invalid expression';
    }
}

// Calculate result
function calculateResult() {
    let expression = document.getElementById('display').value.replace(/\s+/g, '');
    let result = evaluateExpression(expression);
    updateDisplay(result);
    isResultDisplayed = true; // Set flag to prevent appending more values
}

