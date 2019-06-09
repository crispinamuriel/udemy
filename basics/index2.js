// const user = {
//     name: 'Jenn',
//     age: 35
// }

// localStorage

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)
// console.log(localStorage)

// const userJSON = localStorage.getItem('user')

// const user = JSON.parse(userJSON)

// console.log(`${user.name} is ${user.age}`)

//CREATE UPDATElocalStorage.setItem('location', 'New York')

//READ console.log(localStorage.getItem('location'))

//DELETE localStorage.removeItem('location')   &&   localStorage.clear()

// document.querySelector('#name-form').addEventListener('submit', (e) =>{
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

//<form id="name-form">
//<input type = "text" placeholder="firstName" name="firstName">
//<button>Submit</button> </form>

//document.querySelectorAll(query selector all gives us an array of all of the tag matches)
//< button id = "remove-all" > Remove All Notes < /button>
// document.querySelector('#remove-all').addEventListener('click', (e)=> {
//     document.querySelectorAll('.note').forEach((note)=> {
//         note.remove()  
//     })
//     console.log('remove function')
// })

// -- Single Selector Query --
// p   (target everything that has a p tag)
// #id-name (target single element that has an id)
// .class-name (all elements that have a class)

//-- Multiple Selector Queries (advanced) --
// p#id-name (targeting a paragraph tag that has an id)
// button.class-name (targeting all buttons if class name)
// h1#title.application
// h1.application#title

///filter the data and render the filtered data
//only show the notes that actually match the text input value

//RECAP
//1. Set up a div with an id
//2. Created renderNotes function which takes array of notes, AND
//the object filters which has a property searchText that is being changed by user input
//figures out which one matches the user input filters.searchText
//3. Clear the div wiping all previously rendered notes that don't match filter
//4. add just the filtered notes into the div
//5. call the renderNotes function once right away on it's own line to be parsed by self, 
//to make sure that something is rendered before user interacts with the page
//6. Once entire page is shown, document.queryselector on the input box with an event
//listener on the input box will listen for an input change on the input box from the user
// and once this happens it sets the filters array with whatever the user typed in
//and also rerenders the page to reflect the filtered notes

//<form>
//  <input type="text" placeholder="First name" name="firstName">
//  <button>Submit</button>
//</form>

//inside our form we will use the attribute name=""
//name attribute is something that you put on fields when they are inside of a form
//makes it easy to access all of those field values once a form is submitted.


// console.log('this Index.js file')
// DOM - Document Object Model
// HTML document, JavaScript Object, that models our html object
// Listen for input field's value to change, delete a form , javascript to do something with HTML use DOM
//perform basic DOM Manipulation: delete one element in our document from our JS file
// Dom is modeled , document  delete an element

//1 . get the elemnt out of the document by querying it, then remove it!, update it or replace it
//Query and remove

// const p = document.querySelector('p')
// p.remove()

// Query ALL and remove 
// method forEach to iterate over all nodes that match and remove

// const ps = document.querySelectorAll('p')

// ps.forEach((p) => {
//     p.textContent = '***********'
//     console.log(p.textContent)
//     p.remove()
// })

// Add a new paragraph element
    //1. create new element
    //2. update it's content, give it a text value
    //3. put it somehwere pick a place to put it and insert the p

// const newP = document.createElement('p')
// newP.textContent = 'This note is a new Element from JavaScript!'
// document.querySelector('body').appendChild(newP)

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

//loop over each item in notes
//add something to the dom for each element