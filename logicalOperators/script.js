/*
AND operator (&&):
Syntax: expression1 && expression2.
Returns true if both expressions are true, otherwise returns false.
*/  

true && true // → true
true && false // → false
false && false // → false


/*
OR operator (||):
Syntax: expression1 || expression2.
Returns true if at least one of the expressions is true, otherwise it returns false.
*/

true || true // → true
true || false // → true
false || false // → false


/*
NOT (!) operator:
Syntax: !expression
Returns the opposite boolean value of the expression. If the expression is true, it returns false, and vice versa.
*/

!true // → false
!false // → true


/*
Logical operators and comparison operators can be combined to form more elaborate expressions. 
For example, we can create conditions that check whether a number is within a specific range.
*/

2 < 3 && 3 < 4 // → true


/*
You can also use parentheses to group operations and use logical and arithmetic operators.
*/

(2 + 2) < 3 && (10 < (8 * 2)) // → false


/*
It is necessary to remember that arithmetic operations have priority over comparison operations.
*/

2 + 2 < 3 && 10 < 8 * 2 
// First the arithmetic operations are done: 
// → 4 < 3 && 10 < 16 
// Now the comparisons: 
// → false && true 
// Finally: 
// → false