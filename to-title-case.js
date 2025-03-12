//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

const toTitleCase = (str) => {
    const strArray = str.split(' ');
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1);
    }

    return strArray.join(' ');
}

//O(n)
/*The code splits the input string into an array of words and then iterates through each word to capitalize the first letter. 
The time complexity is linear, O(n), where n is the number of words in the input string.*/

console.log(toTitleCase('the cow jumped over the moon'));

const toTitleCaseRegEx = (str) => {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

//O(n)
/*The code uses a regular expression to replace each word boundary followed by a word character with the uppercase version of that character. 
This involves iterating over each word character in the input string, 
resulting in a linear time complexity of O(n), where n is the length of the input string.*/

console.log(toTitleCaseRegEx('the cow jumped over the moon'));