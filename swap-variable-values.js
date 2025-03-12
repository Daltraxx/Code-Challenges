//Can you write a line of code in JavaScript to swap the values of two variables without using a temporary variable?

let a = 3;
let b = 5;

[a, b] = [b, a];

/*This simple line of code uses destructuring assignment to swap the values of a and b without the need for a temporary variable. 
The right-hand side [b, a] creates a new array with the values of b and a, 
and the destructuring assignment [a, b] assigns these values back to a and b respectively.*/

console.log(a, b);