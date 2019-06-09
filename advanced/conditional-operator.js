// const userAge = 25
// let message

// message = userAge >= 18 ? 'You can vote!' : 'You cannot vote.'

// if(userAge >= 18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote.'
// }

const myAge = 20
const showPage = () => {
    console.log('Showing the page.')
}
const showErrorPage = () => {
    console.log('Showing the error page.')
}

// myAge >= 21 ? showPage() : showErrorPage()

//1. Print 'Team size: 3" if less than or equal to 4
//conditional logic checking size of array
//2. Print 'Too many people on your team' otherwise
const team = ['Tyler', 'Jason', 'JonA', 'Rinat']

const teamSize = () => {
    console.log(`Team size: ${team.length}`)
}
const tooMany = () => {
    console.log('Too many people on your team.')
}

//team.length <= 4 ? teamSize() : tooMany()
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')