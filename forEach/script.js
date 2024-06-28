const letters = ["a", "b", "c"]

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log("With for", element);
}

letters.forEach(letter => {
    console.log("With forEach", letter);
});

//////////////////////////////////////////////////////////////////////////////////

const menu = [
    {plate: "Pizza", ingredients: "PineApple, jam, cheese", price: 15},    
    {plate: "Hamburguer", ingredients: "Meat, onions, tomatoes, pickles, cheese", price: 18},    
    {plate: "Hot-Dog", ingredients: "Sausage, onions, cheese, potates", price: 12}    
]

menu.forEach(plate => {
    console.log(`Plate: ${plate.plate}. ingredients: ${plate.ingredients}. Price: $${plate.price}` );
})