// function factorial(num) {
//     if (num === 1 || num === 0) {
//         return 1
//     }
//     console.log(factorial(num - 1))
// }

// let result = factorial(2)
// console.log(result)

// function factorial(num) {
//     if (num === 1 || num === 0) {
//         return 1
//     }
//     let result = num * factorial(num - 1)
//     return result
// }

// factorial(5)
// console.log(result)


//base cae is the length of the string in the array
//sum of num of an array

/*  Recursion 2
sum all values in obj
*/

let numberObject = {
    a: {
        b: {
            c: {
                d: '5',
                e: '2'
            }
        }
    },
    f: 5
}

// function sumValues (obj) {
//     let total = 0
//     for (let key in obj) {
//         total += obj[key]
//     }
//     return total 
// }

function sumValues(obj) {
    let total = 0
    for (let key in obj) {
        let currentValue = obj[key]
        if ( typeof currentValue === 'object') { //base case
            total += sumValues(currentValue)
        } else {
            total += currentValue
        }
    }
    return total
}

/*
sumValues() --> 7 recurse into the obj and pull out the 2 and 5 
sumValues() --> 7
sumValues() --> 7
sumValues() 7 + 5 = 12 --> 12
*/

//console.log(sumValues(numberObject))

/* function calling itself inside an iteration  */


function concatEls(array) {
    let finalString = '';
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        finalString += element;
    }
    return finalString;
}
let result = concatEls(['a', 'b', 'c']);
console.log(result);

/* 
think of base case what is the mental proccess to think of that base case
step towards the case what is your mental process to think of that step towards
simple case obj what should i do? 

if you jbiw theres a number inside you can just add the outer sum 
if complex keep going if its not then don't call the function 
after the whole loop is done

keeping a tally 
start off with an initialization of the count or the sum.

set the sum equal to the value of the recursive call 
write down the call stack 
what function is on it, with what values

write down what it evaluates to 
*/
