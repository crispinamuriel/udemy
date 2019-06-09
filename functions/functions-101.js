//Three Important Parts to a Function
//Function - input (argument), code, output (return value)

// let greetUser = function () {
//     console.log('Welcome user!')
// }

// greetUser()
// greetUser()
// greetUser()

// let squareNumber = function (num) {
//     let result = num * num
//     return result
// }

// let value = squareNumber(3)
// let otherValue = squareNumber(10)

// console.log(value)
// console.log(otherValue)

//Challenge Area

// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (num) {
    let celsius = (num - 32) / 1.8
    return celsius
}

let value = convertFahrenheitToCelsius(68)
console.log(value)