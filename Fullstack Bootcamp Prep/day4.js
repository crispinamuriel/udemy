let gotChar = ['wolf', 'stark', 'joffry', 'dragons']

let gotObj = {
    wolf: 'house of stark',
    stags: 'house of b',
    dragons: 'house of t',
    lions: {
        brandon: 'king',

    }

}

gotObj.karen = 'house of g'
gotObj['karen'] = 'house of p'

//console.log(gotObj)
/* obj = dictionary

key: value

pairs

inside an object keys are always strings

elements inside are separated by a comma!
to access things inside an object
you cah use a dot notation or a bracket notation have to add quotations to access this way
gotObj['lions']

in operator
for...in loop - to loop through objects to access a value at each key

object methods are functions
assign a value of that key to a function .push .pop . length

Object.keys()
nested arrays and objects

OBJ : unordered collection of key-value pairs
when you are looping it appears its in order of definition but its not garanteed
KEYS ARE ALWAYS STRINGS

cannot assign key names reserved javascript word
*/

let personObject = {
    firstName: 'harry',
    lastName: 'potter'
}

let pusheen = {
    name: 'Pusheen',
    age: 7,
    color: 'gray and tabby'
}

// console.log(pusheen['name'])

let keyToCheck = 'name'
console.log(pusheen[keyToCheck])
console.log(pusheen.name)
console.log(pusheen.keyToCheck) //undefined because it is not exact

/* adding a new value to an object

1. by bracket['key'] = 'value'
2. by dot notation .key = 'value'
*/

pusheen['sister'] = 'Stormy'
pusheen.brother = 'Pip'
console.log(pusheen)

/* change a value 


deleting a key/value pair from an object

delete pusheen['age']
delete pusheen.color

in operator - used to check if a certain key is inside the obj
returns a boolean value
*/

console.log('name' in pusheen);
console.log('sadness' in pusheen)

/* 
use the for..in loop to loop through all of the keys in an object
for ( let animal in animalObject) {
    console.log(animal)
}
if you found the key you're looking for then it will terminate the loop

*/

for (let key in pusheen) {
    console.log(key)
}

for (let key in pusheen) {
    console.log("Pusheen's", key, 'is', pusheen[key])
}

/* 
for(let key in pusheen) {
    console.log("Pusheen's", key, 'is', pusheen.key) UNDEFINED WILL NOT WORK EXEPECTS THE KEY NAME TO BE KEY
}

Object.keys is a method that will return an array of all the keys in an object
keys will not return in the order defined

can create an object on an object

let pusheen = {
    name
}

pusheen.siblings.sister => stormy
cmd+option+j ==> terminal 
*/


