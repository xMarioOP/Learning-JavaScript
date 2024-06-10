/*
Farenheit to Celcius
Create a program that takes an array of temperatures in Farenheit as input and converts them to Celsius using the formula:}
C = 5/9 * (F - 32)
*/
let farenheitGrades = [32, 68, 95, 104, 212]

function farenheitToCelsius(array) {
    let celcius = array.map(item => (5 / 9 * (item - 32))
    )
    console.log("T° in celsius: ", celcius);
}

console.log("T° in farenheit: ", farenheitGrades);
farenheitToCelsius(farenheitGrades)
