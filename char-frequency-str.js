//Given a string, write a function to count the occurrences of each character in the string. 

const charCounter = (str) => {
    const charFrequency = {};
    for (let char of str.toLowerCase()) {
        charFrequency[char] ? charFrequency[char]++ : charFrequency[char] = 1;
    }
    return charFrequency;
}

//O(n)
/*The code iterates through each character in the input string once, 
resulting in a linear time complexity of O(n), 
where n is the length of the input string.*/

console.log(charCounter('Mississippi'));