//#1 challenge
//each expense modles real world expense  #1 property description, also #2 the amount
//menthods : functions as object properties on account that i will create
//addExpense method will take two arguments (description for expense, amount for expense)
//add a new object onto the expenses array , with the correct data , populate the expenses array
//getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.
//calculate the total expenses use foreach to go through every single item in the expenses array
// expenseTotal =+ exepense total + expense



const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function (description, amount){
        this.expenses.push({
            description: description, 
            amount: amount
        })
    },
    addIncome: function (description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let totalIncome = 0
        let totalExpenses = 0
        
        this.expenses.forEach(expense => {
           totalExpenses += expense.amount
        });

        this.income.forEach(income => {
            totalIncome += income.amount
        });

        let total = totalIncome - totalExpenses
        
        return `${this.name} has a balance total of $${total}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())


//console.log(account)
//#2 Challenge
//Take income into account
//1. add income array to account income : []
//2. addIncome method -> description , amount
//3. Tweek getAccountSummary, how much in expenses, how much in income, balance  income - expenses
//Andrew Mead has a balance of $10. $100 in income. $90 in expenses. 