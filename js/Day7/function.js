// function with two parameters

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return
function sumTwoNumbersAndReturn(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}

console.log(sumTwoNumbersAndReturn(10, 20))
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))