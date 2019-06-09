//Prototypal Inheritance
//myPerson --> Person.prototype --> Object.prototype --> null
class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
     setName(fullName) {
         const names = fullName.split(' ') // => ['alexis', 'turner']
         this.firstName = names[0] //=> names array firstname in index 0
         this.lastName = names[1] //=>  last name would be in the second index
     }
}

class Employee extends PersonClass {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft () {
        return 65 - this.age
    }
}

class Student extends PersonClass {
    constructor(firstName, lastName, age, grade, status='passing') {
        super(firstName, lastName, age)
        this.grade = grade
        this.status = status
    }
    getBio() {
        if(this.grade > 70) {
            this.status = 'passing'
        } else {
            this.status = 'failing'
        }
        return `${this.firstName} ${this.lastName} is ${this.status} the class.`
    }
    updateGrade(amount) {
        this.grade += amount
    }
}
let student = new Student('Jenn', 'Muriel', 35, 98)
console.log(student)
console.log(student.getBio())
student.updateGrade(-55)
console.log(student.getBio())

//1. Create class for students
//2. Track student grade. 0-100
//3. Override bio to print a passing or failing message. 70 and above andrew is passing the class
//4. Create 'updateGrade' that takes the amount to add or remove from the grade 

//create new student
//print status (passing or failing)
//change grade to change status
//print status again

// const me = new Employee('Jason', 'Fevrier', 32, 'Software Engineer', ['Video Games', 'Chocolate', 'Bacon', 'Plantain'])
// console.log(me.getYearsLeft())
// me.setName('Alexis Turner')
// console.log(me.getBio())

// class Person {
//     constructor(firstName, lastName, age, likes = []) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.likes = likes
//     }
//     getBio() {
//         let bio = `${this.firstName} is ${this.age}.`

//         this.likes.forEach((like) => {
//             bio += ` ${this.firstName} likes ${like}.`
//         })

//         return bio
//     }
//     setName(fullName){
//         const names = fullName.split(' ') // => ['alexis', 'turner']
//         this.firstName = names[0] //=> names array firstname in index 0
//         this.lastName = names[1] //=>  last name would be in the second index
//     }
// }
// const me = new PersonClass('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
// me.setName('Alexis Turner')
// console.log(me.getBio())

// const person2 = new PersonClass('Jenn', 'Muriel', 35)
// console.log(person2.getBio())

// const person1 = new PersonClass('Clancey', 'Turner', 51)
// person1.setName('Jason Fevrier')

/* Notes

 new Person () creating a new custom object type
 the object type gets its name from the function
 functions that are used with the 'new' operator are Constructor Functions
Constructor Functions
1. generate a new empty object for that new instance of Person
2. gives us access to that empty object in constructor function via the 'this' value. 

used the constructor function to creat4e a new intance of person.
any time we create a constructor function we call with a captial letter

EX: 

const Person = function (firstName) {
    this.firstName = firstName
}

There is no need to have a return statment inside of a constructor function

const me = new Person ('Jenn')


The whole point of a constructor function is to set up a new object and then get access to it.
1.pass in each value to the new instance as arguments
2.then put them into the constructor function as arguments
3.last set up all of those properties on 'this' inside of the object as propertires

now am able to console.log(me.age) to display a property of the new instance of person
am now also able to set a property

constructor functions allow us to customize the individual instances
how to create methods? 
 
Creating two instances of our object of type Person
let person2 = new Person('clancey', 'turner', 56)

Old person constructor function:

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ') // => ['alexis', 'turner']
    this.firstName = names[0] //=> names array firstname in index 0
    this.lastName = names[1] //=>  last name would be in the second index 
}

*/