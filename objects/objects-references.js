let myAccount = {
    name: 'Crispina Muriel',
    expenses: 0,
    income: 0
}

//Create a function that allows us to add an expense.
// let otherAccount = myAccount
// otherAccount.income = 1000
// otherAccount = {}
//3 functions to create
//addIncome, takes account to maniplulate and take amount of income we're trying to add
//resetAccount, will reset the expenses and the income to an account to 0
//getAccountSummary, will print the summary of the account , account balance and total income
//Account for Andrew has $900. $1000 in income. $100 in expenses. 

//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary



let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income){
    account.income = account.income + income
}

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}

getAccountSummary = function (account){
    let total = account.income - account.expenses
    return `Account for ${account.name} has $${total}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
let summary1 = getAccountSummary(myAccount)
console.log(summary1)
resetAccount(myAccount)
console.log(myAccount)
let summary2 = getAccountSummary(myAccount)
console.log(summary2)




//When we pass an object into a function we can manipulate it's properties,
//If we manipulate it's properties we're manipulating the properties of the object originally passed in
//If we assign a new value to that argument we break this binding completely 
//Now account does not point to the same thing that myAccount did
//We cannot use the assignment operator, in account, to clear myaccount or set it to something new
//Like the number one, this will not work
//It's only when we manipulate the properties of the object do we see the change reflected in both
//Maninpulate the expenses property, not a need to log account, just seeing what is happening
//Referencing the same object in memory, only when we see a change in property will we see a change
