//Length property, reference string, access it's length property. .length, property grab the data. 
//password validation

let name = 'Crispina Muriel'
console.log(name.charCodeAt(name.length-1))

name.toUpperCase()

console.log(name.toUpperCase())














//console.log(name.length)

//convert to uppercase

//console.log(name.toUpperCase())

//documentation for string properties and methods

//convert to lowercase

//console.log(name.toLowerCase())

//Includes method

// let password = 'abc123password098'

//console.log(password.includes('password'))

//Trim Method , allows us to remove extra whitespace from the string

// let trimmedString = '   hello    '
//console.log(trimmedString)
//console.log(trimmedString.trim())

//Challenge 
//function isValidPassword, single argument string password to validate
//return true if the length is greater than 8, doesnt contain the word password

// let isValidPassword = function (string){
//     if(string.length > 8 && !string.includes('password')){
//         return true
//     } else {
//         return false
//     }
// }

// let isValidPassword = function (string) {
//     return string.length > 8 && !string.includes('password')
// }

// console.log(isValidPassword('asdf'))
// console.log(isValidPassword('abc123!@#$%^&*'))
// console.log(isValidPassword('asdfp#$$@$%$password'))

/*
MDN String Methods:

ALL:
.fromCharCode()
.fromCodePoint()
.anchor()
.big()
.blink()
.bold()
.charAt()
.charCodeAt()
.codePointAt()
.concat()
.endsWith()
.fixed()
.fontcolor()
.fontsize()
.includes()
.indexOf()
.italics()
.lastIndexOf()
.link()
.localeCompare()
.match()
.matchAll()
.normalize()
.padEnd()
.padStart()
.repeat()
*/