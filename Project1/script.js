const constants = {
    PI: Math.PI,
    e: Math.E
};

const variables = {};

// function appendToExpression(value) {
//     const expressionInput = document.getElementById('expression');
//     if (expressionInput.value === 'Error') {
//         expressionInput.value = '';
//     }
//     expressionInput.value += value;
// }

function appendToExpression(value) {
    const expressionInput = document.getElementById('expression');
    if (expressionInput.disabled) 
        //return; // Prevent input if disabled
    expressionInput.disabled = false;
     if (expressionInput.value === 'Error') {
        expressionInput.value = '';
    }
    expressionInput.value += value;
}

function deleteLast() {
    const expressionInput = document.getElementById('expression');
    expressionInput.value = expressionInput.value.slice(0, -1);
}

function clearExpression() {
    document.getElementById('expression').value = '';
    document.getElementById('output').textContent = '0.0000';
}

function calculateResult() {
    const expressionInput = document.getElementById('expression');
    let expression = expressionInput.value;

    // Replace variables and constants in the expression
    for (const [key, value] of Object.entries(variables)) {
        expression = expression.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
    }
    expression = expression.replace(/PI/g, constants.PI).replace(/e/g, constants.e);

    try {
        // Evaluate expression safely
        const result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid result');
        }
        document.getElementById('output').textContent = result.toFixed(4);
    } catch (error) {
        document.getElementById('output').textContent = 'Error';
    }
}

function addVariable() {
    const nameInput = document.getElementById('variableName');
    const valueInput = document.getElementById('variableValue');
    const name = nameInput.value.trim();
    const value = parseFloat(valueInput.value.trim());

    if (!name || !valueInput.value || isNaN(value) || ['PI', 'e'].includes(name)) {
        alert('Invalid variable name or value.');
        return;
    }

    variables[name] = value;
    nameInput.value = '';
    valueInput.value = '';
}
