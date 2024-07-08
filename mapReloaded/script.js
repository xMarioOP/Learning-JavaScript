const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

const total = orders.map(item => item.total)
console.log("Original array: ", orders);
console.log("Total array o: ", total);


//THIS MUTATES THE ORIGINAL ARRAY
// const taxes = orders.map(item => {
//     item.tax = 0.19
//     return item
// })
// console.log("Original array: ", orders);
// console.log("New taxes array: ", taxes);

//THIS DOES NOT GENERATE MUTATION
const taxes2 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})
console.log("Original array: ", orders);
console.log("New taxes array: ", taxes2);