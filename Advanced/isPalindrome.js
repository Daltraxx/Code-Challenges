//Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case. 

const isPalindrome = (str) => {
    const regex = /\W+/;

    const inputStr = str.toLowerCase().replace(regex, '');
    const comparisonStr = inputStr.split('').reverse().join('');

    return inputStr === comparisonStr;
}

//O(n)
/*The code snippet has a linear time complexity of O(n) where n is the length of the input string. 
This is because the code performs operations such as converting the input string to lowercase, 
removing non-alphanumeric characters, splitting the string into an array, reversing the array, 
and joining it back together. All these operations iterate through the characters of the input string once, 
resulting in a linear time complexity.*/

console.log(isPalindrome('race #car'));