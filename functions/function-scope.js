//Global scope (convertFahrenheitToCelsius, value, value2)
    //Local scope (num, celsius)
        //Local scope (isFreezing)

let convertFahrenheitToCelsius = function (num) {
    let celsius = (num - 32) / 1.8

    if(celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

let value = convertFahrenheitToCelsius(68)
let value2 = convertFahrenheitToCelsius(32)
console.log(value)
console.log(value2)