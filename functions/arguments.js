//Multiple arguments

let add = function (a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)

//console.log(result)

// Default arguments - if we do not provide argument value we will get undefined.
// Can provide default value inside function arguments. 
// Can get access to second default argument by placing 'undefined' as the first argument, which will use the default argument.

let getScoreText = function (name = 'Anonymous', score = 0 ){
     //return 'Name: ' + name + ' - Score: ' + score
     return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
//console.log(scoreText)

// Challenge area
//arguments that change wont have a default value, arguments that don't change will have a default value
//A 25% tip on $40 would be $10

let tipCalculator = function (total, tipPercent = .2){
    tip2 = total * tipPercent
    tipPercentWhole = tipPercent * 100
    return `A ${tipPercentWhole}% tip on $${total} would be $${tip2}`
}

let tip = tipCalculator(40, .25)
console.log(tip)


//Template strings using backticks are easier to manipulate, less static than concatinaton.
//Template strings is more readable and maintainable 

let name = 'Jason'
let age = '32'
//console.log(`Hey, my name is ${name}! I am ${age} years old.`)
