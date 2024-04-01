/*
A JavaScript for loop is a control flow statement that allows you to repeatedly execute a block of 4
code a specified number of times. Here's the basic syntax of a for loop:
*/
for (initialization; condition; iteration) {
    // code block to be executed
}

/*
- initialization: This is where you initialize the loop counter variable. It's typically used to declare and/or initialize 
one or more loop control variables. This part is executed only once at the beginning of the loop.

- condition: This is the condition that is evaluated before each iteration. If the condition evaluates to true, the loop 
continues; if it evaluates to false, the loop stops. If the condition is omitted, it is treated as true, which results 
in an infinite loop unless there is a break statement inside the loop.

- iteration: This is usually an expression that increments or decrements the loop counter variable. It's executed after 
each iteration of the loop.
*/

//Let's see an example of a for loop that prints the numbers from 1 to 5:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
/*
In this example:
- let i = 1 initializes the loop counter variable i to 1.
- i <= 5 is the condition. As long as i is less than or equal to 5, the loop will continue.
- i++ is the iteration expression. It increments i by 1 after each iteration.
- console.log(i) prints the value of i to the console during each iteration.

The output of this code will be:
*/
1 
2 
3 
4 
5