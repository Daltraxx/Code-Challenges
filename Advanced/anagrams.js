//Write a function that determines if two strings are anagrams of each other 

const anagrams = (str1, str2) => {
    
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

let word1 = 'mammoth';
let word2 = 'mmhtoam';
console.log(anagrams(word1, word2));

console.log(word1, word2);