//How Do You Print the First Non-Repeated Character in a String?

const firstNonRepeatedCharacter = (stringValue) => {
    for (let i = 0; i < stringValue.length; i++) {
        let c = stringValue[i];
        
        //first conditional determines if current character is the first instance of that character...
        //second conditional determines if current character appears later in the string (indexOf will return -1 if it does not)
        //if both conditionals are truthy, current character must be first non-repeated character
        if (stringValue.indexOf(c) === i && stringValue.indexOf(c, i + 1) === -1) {
            return c;
        }
    }
    return null;
}

console.log(firstNonRepeatedCharacter('mississippi'));

//The code has a nested loop structure where for each character in the input string, 
//it checks the index of that character in the string. The indexOf function has a time complexity of O(n), and it is called twice for each character in the worst case scenario. 
//Therefore, the overall time complexity is O(n^2).