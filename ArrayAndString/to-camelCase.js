//Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?

const toCamelCase = (str) => {
    const regEx = /[-_]/g;
    str = str.split('');
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === regEx) {
            str[i] = str[i].toUpperCase();
        }
    }

    return str.join('').replace(regEx, '');
}

//O(n)
/*The code iterates through the input string once, making it linear time complexity O(n), where n is the length of the input string.*/

const toCamelCaseConcise = str => str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());

//O(n)
/*The code snippet uses the replace method with a regular expression to replace all occurrences of '-' or '_' followed by a character with the uppercase version of that character. 
This involves iterating over the string once, making it a linear time complexity O(n), where n is the length of the input string.*/
/*This function uses the replace method with a regular expression to match hyphens or underscores followed by any character. 
The callback function within replace converts the matched character to uppercase,
effectively transforming the string to camel case.*/


console.log(toCamelCase('secret_key_one'));