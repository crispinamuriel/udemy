let num = 103.941

//console.log(num.toFixed(1))

//console.log(Math.round(num))

//console.log(Math.floor(num))
//console.log(Math.ceil(num))

// let min = 10
// let max = 20

// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// //10- 20
// console.log(randomNum)

//Guessing Game

//Challenge, create a functoin that takes in a guess and generates a random number within a range
//1-5 true if correct, fales if not correct

let makeGuess = function (guess){
    let min = 1
    let max = 5

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum === guess
}

console.log(makeGuess(1))

