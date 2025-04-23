function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = multiply(num1, num2);
                    let mathResult = addNum(num1, num2);
                    let divisionResult = division(num1, num2);

                    // Display the result
                    displayResult(result);
                    displayMath(mathResult);
                    displayDiv(divisionResult);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }
// addition function to add two numbers
            function addNum(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Add the numbers
                return a + b;
            }
// division function to divide two numbers            
            function division(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Divide the numbers
                if (b === 0) {
                    return 'Cannot divide by zero';
                }
                return a / b;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `Multiplication; The result is: ${result}`;
            }

            function displayMath(mathResult) {
                // Display the result in the paragraph element
                const mathElement = document.getElementById('mathResult');
                mathElement.textContent = `Addition; The result is: ${mathResult}`;
            }
            function displayDiv(divisionResult) {
                const divisionElement = document.getElementById('divisionResult');
                divisionElement.textContent = `Division; The result is: ${divisionResult}`;
            }
        