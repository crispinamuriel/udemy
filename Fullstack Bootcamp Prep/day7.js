// /*  
// Higher order functions: fn can be passed into other functions or return a function
// loop through an array and call every function.
// */

// // function happyFunction () {
// //     console.log('I am happy')
// // }

// // let amazingArray 


// // let element = amazingArray[i]
// // element()

// /*

// can pass strings of any value into a function

// */

// function addWorld (str){
//     return str + ' world'
// }

// function callsWithHello (func) {
//     return func('hello')
// }
// console.log(callsWithHello(addWorld))

// function callsOther (string, callback) {
//     return callback(string)
// }

// function saysHello (string) {
//     console.log('hello ' + string)
// }

// console.log(callsOther('marko', saysHello))

// // let group = ['jenn', 'jason', 'gessie']

// // console.log(sayToAll (group, function (name) {
// //     console.log("Bye, " + name + "!")
// // })
// // )

// function plus (num1, num2) {
//     return num1 + num2
// }
// function minus (num1, num2) {
//     return num1 - num2
// }

// function calc (num1, functionDef, num2){

// }
// let bridges = ['Brooklyn', 'Golden Gate', 'London']

// function logWithIdx (string, idx) {
//     console.log(string, 'is at index', idx)
// }

// bridges.forEach(logWithIdx)

/* forEach takes argument callback 

current element and optional index */
function saysHi (){
    console.log('hi')
}

function returnsSaysHi () {
    return saysHi
}

let whatIsThis = returnsSaysHi()
console.log(whatIsThis)
/*
if you try to invoke a function that does not return anything it will implicitly return undefined  
type error trying to invoke something that is not a function


2 functions

closure: the fact that this function has acess of outer variables outside of the function
scope talks about any kind of block of code
explicitly functions and parameters inside of a function is closure
*/
let name1 = 'nick'

function saysHello (name1){
    function saysGoodBye(name2){
        console.log(name1, 'says hello but', name2, 'says good bye')
    }
    saysGoodBye('marko')
}

console.log(saysHello())

/* returning functions 
closure is the fact that an inner function can STILL to access values
 defined in the outer function even after the outer function is finished
 running!

 you need to look up closure
 it looks where that function is defined
 can access name 
 assigning a varialbe a function that returns a fuhnction will 
 that's why this works
PARAMETER / ARGUMENT
you have to pass in a parameter to the function invokcation if it is expecting an argument
you have to pass in a parameter or else the return value will be undeinfed the parameters will be undefined

a call back function is a one time use tool
*/

