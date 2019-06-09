// let temp = 55

// if (temp >= 60) {
//     if (temp <= 90){

//     }
// }

// Logical && Operator - True if both sides are true. Otherwise False.

// if (temp >= 60 && temp <=90) {
//     console.log("It is pretty nice out.")
// }

// Logical || Operator - As long as one of the sides are true, Whole statement Evaluates True. False otherwise. 

// if (temp <= 0 || temp >= 120){
//     console.log('Do not go outside.')
// }

// if (temp >= 60 && temp <= 90) {
//     console.log("It is pretty nice out.")
// }else if (temp <= 0 || temp >= 120) {
//     console.log('Do not go outside.')
// } else {
//     console.log('Eh. Do what you want')
// }

// Challenge area
//vegan reservations 

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer vegan dishes.
if (isGuestOneVegan && isGuestTwoVegan){
    console.log("Here is our vegan only menu.")
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log("Here are our vegan options along with the non-vegan options.")
} else {
    console.log("Here is our entire menu. Help yourself to anything!")
}
//At least one guest is vegan. Make sure to offer up some vegan options. 
//Else, Offer up anything on the menu.