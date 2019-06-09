/* Scope */

// let wow = 'wow'
// //console.log(wow)
//  //globally scopped

// let wait = "here"
//console.log(wait)

//functional scope
// function happyFunction () {
//     let greet = "hello"
//     console.log(greet)
// }

// happyFunction()
// //console.log(message) cannot see inside of the function! Error 

// /*looking for variables you need to use locally first then outside of the scope of local to global */

// let message = 'think globally'

// function name1 () {

// }

/* arguments and parameters , functions take an argument and envoke it with a parameter
Higher order functions take in a function as an argument

we envoke function with a parameter, if we are expecting a parameter then we will
we define function with arguments
*/ 
 /* nested functions and scope, 
 javascrpt will rearrange function, JS will hoist or bubble the functions up to the top
 
 
 */

 // Function will take what it needs from local scope no matter what arguments we get
 /* we have to read each line of code and keep in mind what each function is doing */


// function (argument){
//     block of code
// }

// invokingFunction(parameter)

/* don't try to envoke a function expression before you've defined it
 
global scope outside
functional inside functiona
block scope inside if block or for loop

function declaration 
function expression
 cannot use variable before you define it

 best practice keep it in your functionm dont clutter global scope

*/

/* ARRAY

defining

fruits = []

*/

fruits = ['apple', 'kiwi', 'melon', 'potato']

console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    fruit = fruits[i]
    console.log(fruit)
}

/*
what's an array? 
typeof [] === object

a lot of methods we will discuss have for loops! 
array is a list liike data structure in JS
*/

console.log(fruits)

/*  You can reassign a value inside of an array, changing an element in an array iws an example  or mutating a value
You cannot mutate a string, you cannot reassing an index in a string but you can mutate an array so you can
reassign an element using the index of an array  

Length property. arrays and strings have lengths
names.length()
*/
 /*
 push takes or more elements to the end of a new array and 
 then returns the new length of the array

 you need the index of the end
 
 .pop method

 takes the last element removes it and gives it back to you returns that el


 .shift() works like pop but removes the first el of the array
 its called shift because the indecies for every el in the array are shifted over by one
 
 .unshift() adds one or more el to the front of the array
 everything else now needs to shift 
 
 let names = ['george']

 .indexOf method, give you back the index of the element you specifiy
 if it is not in the array then will return -1

 if el im looking at matchesmy target then i'll give the index 

 SOLVE EACH PROBLEM IN ENGLISH PLAN IT OUT FIRST THEN CODE IT

 TIME COMPLEXITY: SEARCH instant

 how quickly we can go through the data to finish the algorithm

 if we want miltiple instances, we will create a new array
 loop over the array to search
 if el === 'search string' then push el into my new array

 slice is special because it does not mutate the original array
makes a copy
if i use4 slice method, 
arguments for slice 1: starting index 2: ending but, omits ending

WHAT DOES "SHALLOW COPY" of a array mean

.includes()

.reverse() for loop
 */

