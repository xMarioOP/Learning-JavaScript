const words = ["Apple", "JavaScript", "Samsung", "Banana", "Grape"]

let newArrayWords =words.filter(item => item.length > 6)
console.log("Array: ",words);
console.log("New Words Array: ",newArrayWords);

///////////////

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
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];

let delivered = orders.filter(item => item.delivered && item.total > 100)
console.log(delivered);

const search = (query) => {
    return orders.filter(item =>{
        return item.customerName.includes(query)
    })
}

console.log(search("a"));