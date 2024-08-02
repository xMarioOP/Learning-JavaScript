const totals = [1,2,3,4,5,6]

let result = totals.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(result);