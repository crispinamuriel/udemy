//Type Coercion - a string, a number, a boolean

// console.log('5' + 5) //string
// console.log('5' - 5) //number
// console.log('5' == 5) //use 'strict equality' instead of this, 'loose equality' == checks for equality but does not take type into account

//avoid at all costs!

value = true + 12  //coercion on boolean to number makes true equal 1, and zero equals 0
const type = typeof({})
console.log(type)
console.log(value)