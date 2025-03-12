//Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

/*By using two methods together and creating a deep clone, 
I can serialize the object to a JSON string. 
I would then parse it back into a new object, 
thereby removing any reference to the original object. */

//The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string.
//The JSON.stringify() static method converts a JavaScript value to a JSON string

const deepClone = (input) => {
    return JSON.parse(JSON.stringify(input));
};

const arr = [0, 5, 5, 8];

console.log(deepClone(arr));