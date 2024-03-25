/*
undefined in JavaScript indicates that a variable has been declared but has not yet been assigned a value.
It also occurs when an attempt is made to access a property that does not exist in an object.
When a function does not explicitly return a value, undefined is automatically returned.
*/
let x; // x is declared but no value is assigned to it, so x is undefined
console.log(x); // prints undefined

let obj = {}; // An empty object
console.log(obj.property); // since the property 'property' does not exist in the object, print undefined


/*
null is a special value in JavaScript that indicates the intentional absence of a value.
It is used to indicate that a variable or property exists but does not have a valid value.
It is not the same as undefined, since null is a deliberately assigned value.
*/
let y = null; // y is explicitly set to null
console.log(y); // prints null

let object = { property: null }; // property 'property' has a value of null
console.log(obj.property); // print null



//In short, undefined is used to denote the lack of value or definition, while null is used to indicate the intentional absence of value. 