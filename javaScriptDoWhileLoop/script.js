/**
 * It is a loop that executes at least once, and then repeats as long as a condition is met.
 */

do {
    // Code to execute at least once
   } while (condition);

/**
 * The key difference between do while and while is that do while guarantees that the code block is executed at least once
 * even if the condition is false from the beginning. This can be useful in situations where you need to execute 
 * a block of code at least once before checking the output condition.
 */ 

let counter = 1;

do {
 console.log(counter);
 counter++;
} while (counter <= 5);

/**
 - The condition specified in the while is counter <= 5, which means that the loop will continue to run as long as the value of the counter is less than or equal to 5.

 - As a result, the loop will print the numbers 1 to 5 on the console. The loop will stop when counter reaches the value 6, since the condition counter <= 5 will be false at that point.
 */