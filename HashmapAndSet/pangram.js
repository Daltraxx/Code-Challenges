/*A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
- sentence consists of lowercase English letters.*/

const checkIfPangram = (sentence) => {
    const charArray = new Array(26).fill(0);
    let totalLetters = 0;

    for (let i = 0; i < sentence.length; i++) {
        //charCode for 'a' is 97
        const hashValue = sentence.charCodeAt(i) - 97;
        
        if (charArray[hashValue] === 0) {
            totalLetters++;
            charArray[hashValue]++;
        } 

        if (totalLetters === 26) return true;
    }

    return false;
}

//Time Complexity O(n)
//Space Complexity: O(1) : charArray is constant size (26)

const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence));

