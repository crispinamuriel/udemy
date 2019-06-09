// let count = 3;

// while (count >= 1) {
//     console.log('count is ', count);
//     count --;
// }
 
/* each computer has a specific amount of memory allocated
make sure the condition inside the while loop will be eventually false
didn't decrement so we crash, the condition will never be met

1.keyword while
2.condtition that evaluates to true or false 
3.block of code thaT will run when its 

a for loop requires 3 elements

1.for keyword
2.  (let i = 0; i < arr.length; i++) three optional expressions
for (initialization; condition; final-expression )
3. a block of code

where to start, what is the condition to terminate, step towards the condition
after each iteration the final expression is run



for (let i = 1; i < 3; i++) {
    console.log(i)
}

/* Once the middle condition is met, it stops 
put the semi colon at the end of a statement 
TIDY code, best practicies 


for (let i = 5; i >= 1; i--) {
    console.log('i is:', i)
}

for (let i = 100; i <= 300; i) {

let letters = 'abcdefg'  //length is an actual character length
//index is shifted by one

let currentLetter  = letters[i]
console.log(currentLetter)
}

/* = / == / === use stictly equals 

for (let i = 1; i <= 5; i++) {
    if (false){
        continue
    }
    if (false){

    }
}
let myGrade = "a"
while (true) {
    myGrade += '+';
    if (myGrade.length === 3) {
        break;
    }
}


//the break keyword also words i forloops

for (let i - 10; i>-1; i--) {
    console.log('i is', i)
}

/*
Coercion and Truthiness 


Lose equality
strict equality ===

Primitive types - passed by value

number
string 
boolean
null 
undefined
symbol


COMPLEX Values - only complex types can be mutated, passed by reference 

functions in goobal objects to create a value of a new type 
type of a value is changed to a new type
expliict coercion happens when we use one of bu8ilt

*/
 let num = 10

 console.log(typeof(num))
/*
 implicit HTMLFormControlsCollection */

 let notSure = 10 + "20" //evaluates to STRING '1020'

 /*  
 == compare number and string , does not check for type when using looose equality operator
 === strict checks the type of
 */
 console.log(10 == '10')

 /* if you are going to compare values use the strict === 
 
 Most everything in javascrip-t is a truthy value

 FALSEY VALUES:

 empty string
 0
 undefined
 null
 NaN


 Conditionals:

 if (5) {
    console.log('in)
 }

 Not operator flips the boolean value, coorces it to be the opposite
 

 */

 if (10 && 0) {
     console.log( 'wont run')
 } else {
     console.log('zero is falsey')
 }
/*
 && returns first if any is false
 && returhns last value ir all are true

 || returns the first value o the last value if all are falsey
 
 (3%2) // evaluates to true by itself
 (4%2) //evaluates to false by itself 
 */