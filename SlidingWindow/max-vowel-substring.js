/*Given a string s and an integer k, 
return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
Constraint: s consists of lowercase English letters.*/

const maxVowels = (s, k) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let vowelCount = 0;

    // Build the window of size k, count the number of vowels it contains.
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) vowelCount++;
    }

    let maxVowels = vowelCount;
    // Slide the window to the right, focus on the added character and the
    // removed character and update "count". Record the largest "count".
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) vowelCount--;
        if (vowels.has(s[i])) vowelCount++;
        maxVowels = Math.max(maxVowels, vowelCount);
        
    }

    return maxVowels;
}

const s = 'abciiidef';
const k = 3;

console.log(maxVowels(s, k));