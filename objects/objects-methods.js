//Method: A method is an object property whos value is a function
//Putting a function on an object (You get access to that objects properties right inside the function)
//To access the objects properties we use the .this keyword
//Inside of our methods we have acces to .this references the object the method is defined on. 
//This refers to the object (you can console.log(this) on the method)
//This is a way to access our object properties inside of a method
//Using this we will be able to get the guest capacity and the guest count to see if we have enough seats
//Using methods we will add functionality right onto the object itself
//Can get arguments, can return values, can also us this to access properties off of the object the method is defined on
//By using objects and methods can create a self-contained unit where we have functionality / methods , stored along side the data that they work on
//methods and objects come up a lot in javascript, many methods exhist more than console.log()

// let restraunt = {
//     name: 'Mad 4 Chicken',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function(partySize){
//         let seatsLeft = this.guestCapacity - this.guestCount
//         return seatsLeft >= partySize
//     },
//     seatParty: function(partySize){
//         this.guestCount = this.guestCount + partySize
//     },
//     removeParty: function(partySize){
//         this.guestCount = this.guestCount - partySize
//     }
// }


let restraunt = {
    name: 'Mad 4 Chicken',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    }
}

// seatParty
// removeParty


restraunt.seatParty(72)
console.log(restraunt.checkAvailability(10))
restraunt.removeParty(50)
console.log(restraunt.checkAvailability(4))