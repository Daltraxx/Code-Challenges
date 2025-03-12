//Can you write a function in JavaScript to create a countdown from a given number?

const countdown = num => Array.from({ length: num }, (_, i) => num - i);

//O(n)
/*The code snippet creates an array of length 'num' and fills it with values in descending order. 
The time complexity is linear, O(n), 
where n is the value of 'num'.*/

console.log(countdown(5));