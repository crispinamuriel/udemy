const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}



const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
} ]

const under30 = people.filter((person) => person.age < 30)
// console.log(under30)
// find the person with age == 22, print the person's name

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)
