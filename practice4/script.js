/*
Passing Grade Average
Create a program that takes an array of grades as input and calculates the average only for passing
grades (greater than or equal to 70)
*/

function passingGradeAverage(array) {
    let totalNotes = array.filter(note => note >= 70);
    console.log("Passing notes: ", totalNotes);

    if (totalNotes.length > 0) {
        let average = totalNotes.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / totalNotes.length;
        console.log("Your average is: ", average);

        if (average >= 70) {
            console.log("Congratulations, you approve!");
        } else {
            console.log("Sorry, you do not approve");
        }
    } else {
        console.log("No passing grades.");
    }
}

