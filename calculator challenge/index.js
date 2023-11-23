let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// create four functions: add(), subtract(), divide(), multiply()
// call the correct function when the user clicks on the buttons
// performthe given calculation using num1 and num2
// render the result of the calculation in the paragraph with id="sum-el"

// e.g. if the user click on the "plus" button, you should render
// "sum: 10" (since 8+2=10) inside the pargraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add() {
    // sumEl.textContent += 10
    // or
    // let sumAdd = num1 + num2
    // sumEl.textContent = sumEl.textContent + sumAdd
    // or
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result // with the sum added if add is clicked it will bring its sum with result and this also apply to the others
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " +  result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " +  result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " +  result
}