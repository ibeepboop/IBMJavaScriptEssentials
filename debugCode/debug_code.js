let results = []

function performOperation() {
    // Get user input from input fields
    let a = parseInt(document.getElementById("input1").value);
    let b = parseInt(document.getElementById("input2").value);
    // Check if inputs are valid numbers
    if (!isNaN(a) && !isNaN(b)) {
    // Perform the operation

        multiply(a, b);
        add(a, b);
        divide(a, b);

        // Display the results
        displayResults(results) 
        } else {
            displayResults('Please enter valid numbers');
        }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    let multiplicationResult = a * b;
    results.push(multiplicationResult);
}

function add(a, b) {
    debugger;
    let additionResult = a + b;
    results.push(additionResult);
}

function divide(a, b){
    debugger;
    let divisionResult = a / b;
    results.push(divisionResult);
}

function displayResults(results) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `The multiplication result is: ${results[0]}<br>` +
    `The addition result is: ${results[1]}<br>` + `The division result is: ${results[2]}`;
}