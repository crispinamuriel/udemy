//const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('Note 4')

// console.log(notes.shift())
// console.log(notes.unshift('Myfirstnote'))

// console.log(notes.length)

//notes.splice(1, 1, 'This is the new second item')

//notes[2] = 'This is now the new andrew note 3'
//run code for each item in the array, go through entire list, text for each one, use method to manipulate
//looping method "forEach" takes a single argument, pass a function
//passing a function into a function, Is a CALLBACK FUNCTION
//using forEach we will do something meaningful for each item in the array
//forEach is the most common array method that we will use 
// notes.forEach((item, index)=> {
//     console.log(index)
//     console.log(item)
// })

//console.log(notes[0])
//console.log(notes)

//splice

//USING A FOR LOOP!
// Counting ... 1
//run a code a specific number of times
//1.Initializer, 2. Condition, 3. Final expression
// for(let i = 0; i < 3; i++){
//     console.log(i)
// }

// for(let i = 2; i >= 0; i--){
//     console.log(i)
// }

// for(let i = 0; i < notes.length; i++){
//     console.log(notes[i])
// }

// for (let i = notes.length - 1; i >= 0; i--){
//     console.log(notes[i])
// }

//MDN developer . Mozilla for statment
//Syntax :   for([initialization]; [condition]; [final-expression]) { statment }

//initialization : An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the let keyword. These variables are not local to the loop, i.e. they are in the same scope the for loop is in. The result of this expression is discarded.
//condition: An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional tst is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct. 
//final-expression: An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.
//statement: A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({...}) to group those statements. To execute no statement within the loop, use an empty statement (;).

//CONTINUE WITH ARRAYS - SEARCHING ARRAYS FIND IF NOTE EXHISTS 

//indexOf Method: goes through each item in your array and checking if the item is matching argument passed
//creating app , have list of notes, find if it exists or delete it
//indexOf method, returns a number of index it is in the array, -1 indicates it is not in the array
//when we pass an object to a function, what we get access to isn't a clone of that object,
//its a reference to the exact same object in memory, object is stored in memory, can change properties
//comparing two objects does not make two objects equal, only if they are the exact same object in memory
//objects are only equal to another object is if it the exact same object in memory
//indexOf always uses ===, which will not work with objects


//findIndex Method: Method that works with arrays of Objects.
//findIndex() goal is to actually find the index , meaningful return value
//findIndex looks for the first match it finds, when it finds that item it stops running the function

// const notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to Japan.'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eatting better.'
// }, {
//     title: 'Office modifications',
//     body: 'Get a roomba.'
// }]

//Method findIndex((callback))
// const findNote = function (notes, noteTitle){
//     const index = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }
// const note = findNote(notes, 'office modifications')
// console.log(note)



//Method find(), looking for entire element / object then use find
//if you're looking for the index to remove it by the index then use findIndex()
//Arrays are also passed by reference, If an array is modified by a function the original array reflects this change

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const note = findNote(notes, 'office modifications')
// console.log(note)

// console.log(notes.length)
// console.log(notes)
// // console.log(notes.indexOf({}))

// const index = notes.findIndex((note, i) => {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(index)

//FILTERing - take an existing array and create a new array with some of the items based off filter
//filter by specific author of emails or other example
// Provide a flexible search, by search term
// if that text exists anywhere inside the notes title or body it will be a match


//Search box :trip list of notese back with the word trip in it
//search 'ne' give back notes with 'ne' inside the note, both elements back. 
//outside of a function and then wrapped inside to be reused
//The filter() method creates a new array with all elements that pass the test implemented by the provided function
//SYNTAX : newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
//Parameters:
//   Callback: A function is a predicate, to test each element of the array. Return true to keep the element in the new array, false otherwise, it accepts 3 arguments:
//      Argument 1: Element: The current element being processed in the array.
//      Argument 2: Index (optional): The index of the current element being processed in the array.
//      Argument 3: Array (optional): The original array filter was called upon.
//   thisArg(optionial): Value to use as this when executing callback.

//Return Value: A new array with the elements that pass the test. If no elemments pass the test, an empty array will be returned. 

// const notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to Japan.'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eatting better.'
// }, {
//     title: 'Office modifications',
//     body: 'Get a roomba.'
// }]

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

//const note = findNote(notes, 'office modifications')
//console.log(note)

// const findNotes = function (notes, query){
//     return notes.filter((note, index) => {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

    // const filteredNotes = notes.filter((note, index)=>{
    //     const isTitleMatch = note.title.toLowerCase().includes('office')
    //     const isBodyMatch = note.body.toLowerCase().includes('office')
    //     return isTitleMatch || isBodyMatch
    // })

// console.log(findNotes(notes, 'eatting'))

//FILTER ARRAYS OF OBJECTS WITH SORT()

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Japan.'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eatting better.'
}, {
    title: 'Office modifications',
    body: 'Get a roomba.'
}]

// console.log('a' < 'A')

const sortNotes = (notes) => {
    notes.sort ((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

// Sorting notes with Case Sensitivity