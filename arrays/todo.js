//Create an array with five todo strings
//you have x todos print the message that includes the length of the array
//print the first and second to last todos to the terminal -> todo: text

// const todos = ['learn javascript', 'learn css/grid', 'learn react/redux', 'create an app', 'get a job']
// console.log(`You have ${todos.length} todos.`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length-2]}`)

//Delete 3rd todo
//Add a new todo onto the end
//Remove the first item from list

// todos.splice(2,1)
// todos.push('marry Jason')
// todos.shift()
// //console.log(todos)
// console.log(`You have ${todos.length} todos!`)

// //methods to manipulate arrays

// //print all of the items left todo 1. First item 2. Second item

// todos.forEach((el, index)=>{
//     console.log(`${index + 1}. ${el}`)
// })

// //1. 
// //2.
// //3. ...

// for(let i = 0; i < todos.length; i++){
//     console.log(`${i + 1}. ${todos[i]}`)
// }

//WHY FOREACH?  Have an array and want to do something in counting order
//WHY FOR LOOP?  Not an array, or trying to count in a different order

// const todos = [{
//     text: 'learn javascript',
//     completed: true
// }, {
//     text: 'learn css/grid',
//     completed: true
// }, {
//      text: 'learn react/redux',
//      completed: false
// }, {
//     text: 'create an app',
//     completed: false 
//  }, {
//     text: 'get a job',
//     completed: false 
// }]

//convert array to array of objects
//properties  text:  => completed: true/false
//create a function that works with objects, to remove a todo by text value
//find index of , remove the item



// const deleteTodo = function (todos, todoText) {
//     const index = todos.findIndex(function (todo, index) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if(index > -1){
//         todos.splice(index, 1)
//     }
// }


// deleteTodo(todos, 'get a job')
// console.log(todos)

//create a function that shows just the todos that are completed false

// const getThingsToDo = function (todos){
//     return todos.filter((todos, index) => {
//         const isNotCompleted = todos.completed === false
//         return isNotCompleted
//     })
// }

// console.log(getThingsToDo(todos))

//sort our arrays
// searching arrays
// putting completed items last
// sorting our notes into alphabetical order

const todos = [{
    text: 'learn javascript',
    completed: true
}, {
    text: 'learn css/grid',
    completed: true
}, {
    text: 'learn react/redux',
    completed: false
}, {
    text: 'create an app',
    completed: false
}, {
    text: 'get a job',
    completed: false
}]


const sortTodos = (todos) => {
    todos.sort((a, b) => {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)