/*
Is a control structure that allows a block of code to be executed repeatedly as long as a specified condition is true.
*/

while (condition) {
    // Code to execute while the condition is true
   }



/* 
- The condition is evaluated before each iteration and if it is true, the code block is executed. 
- After each iteration, the condition is re-evaluated. 
- The loop continues until the condition is false. 
- It is important to avoid infinite loops, making sure that the condition eventually becomes false.
*/

let i = 1;

while (i <= 5) {
 console.log(i);
 i++; //--> This is equal to i = i + 1  
}


/*
Exiting a loop with 'break':            
When a break statement is encountered inside a while loop, execution of the loop stops immediately, and control 
of the program passes to the first line of code after the loop.
*/
let j = 1;

while (j <= 10) {
 if (j === 5) {
 break; // Exits the loop when i is equal to 5
 }
 console.log(j);
 j++;
}


/*
Skipping iterations with 'continue':
When a continue statement is encountered inside a while loop, the rest of the code inside the loop for the current 
iteration is skipped and program control returns to the beginning of the loop for the next iteration.
*/ 
let k = 1;

while (k <= 5) {
 if (k === 3) {
 k++; // Make sure to increment i to avoid an infinite loop.
 continue; // Skip iteration when i is equal to 3
 }
 console.log(k);
 k++;
}