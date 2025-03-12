/*Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

- ransomNote and magazine consist of lowercase English letters.*/

const canConstruct = (ransomNote, magazine) => {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    const sourceCharCount = new Array(26).fill(0);
    for (let char of magazine) {
        sourceCharCount[char.charCodeAt(0) - 97]++;
    }

    const targetCharCount = new Array(26).fill(0);
    for (let char of ransomNote) {
        targetCharCount[char.charCodeAt(0) - 97]++;
    }

    
    for (let i = 0; i < 26; i++) {
        if (sourceCharCount[i] < targetCharCount[i]) {
            return false;
        }
    }


    return true;
}

const ransomNote = "a", magazine = "b";
console.log(canConstruct(ransomNote, magazine));