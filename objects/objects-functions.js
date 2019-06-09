let myBook = {
    title: 'The Brave Little Toaster',
    author: 'Thomas M. Disch',
    pageCount: '135'
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: '723'
}

//Create a function that accepts a book
//will be able to use the books properties to generation the message

let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
    console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

//passing an object into a function

//returning an object from a function, return multiple values, send back as many values as we want
//by returning objects from functions we're able to retunr back multiple values in this case 2 strings. 

//Challenge area
//create function - take fahrenheit in - return an object with F C Kelvin

let tempObject = function (temp){
    let f = temp
    let c = (f - 32) * 5 / 9
    let k = (f + 459.67) * 5 / 9

    let object = {
        fahrenheit: `${f}`,
        celsius: `${c}`,
        kelvin: `${k}`
    }
    return object
}

let result = tempObject(74)
//console.log(result)

//Can use dot notation to pull off a single value from returned object
//Passing objects into fucntions returning objects from funtions
//cleaner, pass in just a single value instead of many values
//allows us to return multiple values