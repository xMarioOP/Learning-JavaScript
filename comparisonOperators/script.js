//Used to compare two values and return a Boolean result (true or false) based on whether the comparison is true or false.

//For example, we can compare whether one number is greater than another with the `>` operator , or whether one number is less than another with the  `<` operator. 

5 > 3 // true
5 < 3 // false

//We also have the operators '>=' and '<=' that allow us to compare whether one number is greater than or equal to another, or whether one number is less than or equal to another.

5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true

//To know if two values are equal we can use the operator '===' or, to know if they are different, the operator '!=='.

5 === 5 // true
5 !== 5 // false


//We can also use them to compare text strings and other types of data.

'JavaScript' === 'JavaScript' // true 
'JavaScript' === 'Java' // false 
"JavaScript" !== 'PHP' // true `I am learning JavaScript` === 'I am learning JavaScript' // true
 
//We can also compare booleans with the comparison operators.
true === true // true 
true === false // false 
false !== false // false 


//In case you're wondering how the greater than or less than operators(> and <) behave with booleans, I'll tell you that, although it doesn't make sense, you should know that true is greater than false.
true > false // true
false < true // true 
true > true  //  false 
false < false // false
 