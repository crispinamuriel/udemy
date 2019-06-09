//Undefined for variale

let name 

name = "jenn"
if (name === undefined){
    console.log('please provide a name')
} else {
 console.log(name)
}

//console.log(name)

//Undefined for function arguments
//when an argument is not provided a definition it is assigned to undefined. 

let square = function (num){
    console.log(num)
}

let result = square()
console.log(result)

//if we try to do something with the return value of a function but it is not returning anything