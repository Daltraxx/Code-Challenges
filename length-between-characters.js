/*Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the function should return 0.*/

const subLength = (string, character) => {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            counter++;
        }
    }

    if (counter !== 2) {
        return 0;
    }

    counter = 0;
    for (let i = string.indexOf(character); i < string.length; i++) {
        counter++;
        if (counter > 1 && string[i] === character) {
            return counter;
        }
    }
  }
  
  //O(n)
  /*The code snippet contains two loops, one that iterates through the string to count the occurrences of the character, 
  and another loop that iterates through the string starting from the index of the character. 
  Both loops iterate through the string once, 
  so the overall time complexity is O(n), where n is the length of the input string. */
  
  
  
  
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0