// Can use objects to store related peices of information in a single place
//Model things from the real world like books, cars, people (title author page count for book)
//object can describe real world thing stores the peices of information that make4 that thing up (props)

let myBook = {
    title: 'The Brave Little Toaster',
    author: 'Thomas M. Disch',
    pageCount: '135'
}

//console.log(`${myBook.title} by ${myBook.author}`)

//defining object
//reading properties off of object via dot.notation

//change object property values
//creating model of real world things

myBook.title = 'The Brave Little Toaster Goes to Mars'

//console.log(`${myBook.title} by ${myBook.author}`)

//Challenge area

let myPerson = {
    name: 'Jason',
    age: '32',
    location: 'Flushing'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)

myPerson.age++

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)

