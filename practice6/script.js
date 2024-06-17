/*
Transaction analysis
Imagine you have a list of financial transactions and you want to perform various data processing operations.
Use the following instructions as a guide to complete the exercise:
1. Calculate Total Balance: - Use the reduce method to calculate and display the total balance of all
transactions.
2. Find the Largest Transaction (Income or Expense): - Utilize the reduce method to find the transaction
with the largest amount (either income or expense) and display it in the console.
3. Filter Purchase Transactions: - Use the filter method to obtain and display in the console only the
purchase transactions (with negative amounts).
4. Find a Transaction by Description: - Use the find method to search and display in the console a specific
transaction by its description.
5. Find the Index of a Transaction by Amount: - Employ the findIndex method to find and display in the
console the index of a specific transaction by its amount.
6. Update Transaction Descriptions: - Use the forEach method to update the descriptions of transactions.
Add the prefix "Expense: " to transactions with negative amounts and "Income: " to transactions with
positive amounts. Display the updated transactions in the console.
Remember to adapt and combine these operations as needed.
*/
const transactions = [
    { id: 1, description: "eggs", amount: -50 },
    { id: 2, description: "parents", amount: 150 },
    { id: 3, description: "transport", amount: -250 },
    { id: 4, description: "gym", amount: -650 },
]

//TOTAL BALANCE
const totalBalance = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
console.log("Total balance is: ", totalBalance);

//THE LARGEST TRANSACTION 
const largestTransaction = transactions.reduce((accumulator, currentValue) => {
    return Math.abs(currentValue.amount) > Math.abs(accumulator.amount) ? currentValue : accumulator
}, transactions[0])
console.log("Largest transaction: ", largestTransaction);

//FILTER PRUCHASE TRANSACTIONS
const filterPurchaseTransactions = transactions.filter(purchase => purchase.amount < 0)
console.log("Purchase transactions: ", filterPurchaseTransactions);

//FIND A TRANSACTIONS BY DESCRIPTION
const transactionDescription = "transport"
const findTransactionDescription = transactions.find(transaction => transaction.description === transactionDescription)
console.log("Transaction by description: ", findTransactionDescription);

//FIND THE INDEX OF A TRANSACTION BY AMOUNT
const indexOfAmount = transactions.findIndex(transaction => transaction.amount === -250)
console.log("Index of a transaction bt amount: ", indexOfAmount);

//UPDATE TRANSACTION DESCRIPTIONS 
transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})
console.log("Update transactions", transactions);