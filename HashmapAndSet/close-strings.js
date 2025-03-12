/*Two strings are considered close if you can attain one from the other using the following operations:
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Constraints:
1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.*/

/*the below function is built to test for closeness based on 2 conditions implied by directions:
1. The strings word1 and word2 must have the same characters
2. The occurrence or frequency of characters in word1 and word2 must be the same*/
const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    //construct hashmaps of characters and their frequencies
    const word1Map = new Map(), word2Map = new Map();
    for (let i = 0; i < word1.length; i++) {
        if (word1Map.has(word1[i])) {
            word1Map.set(word1[i], word1Map.get(word1[i]) + 1);
        } else {
            word1Map.set(word1[i], 1);
        }

        if (word2Map.has(word2[i])) {
            word2Map.set(word2[i], word2Map.get(word2[i]) + 1);
        } else {
            word2Map.set(word2[i], 1);
        }
    }

    //helper functions for comparing sets and arrays for equality
    const areSetsEqual = (set1, set2) => {
        return set1.size === set2.size && [...set1].every(value => set2.has(value));
    }
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    //create set of each word's characters and ensure they are the same
    let word1KeySet = new Set(word1Map.keys()), word2KeySet = new Set(word2Map.keys());
    if (!areSetsEqual(word1KeySet, word2KeySet)) return false;

    //create sorted arrays of characters' frequencies in each word ensure they are equal
    const word1FrequencyArray = new Array(...word1Map.values()).sort((a, b) => a - b), word2FrequencyArray = new Array(...word2Map.values()).sort((a, b) => a - b);
    if (!areArraysEqual(word1FrequencyArray, word2FrequencyArray)) return false;

    return true;
}

/*Time Complexity: O(n). We iterate over each word to build the hashmap which would take O(n) time.
Further, we sort the character keys and frequency values of each hashmap. 
The maximum size of hashmap would be 26, as we store each character a-z only once. 
In the worst case, all the sort operations would take O(26log26) time to sort those frequency values.
This gives us total time complexity as O(n).*/

const closeStringsFrequencyArray = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const word1Map = new Array(26).fill(0), word2Map = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        word1Map[word1.charCodeAt(i) - 97]++;
        word2Map[word2.charCodeAt(i) - 97]++;
    }

    //for first condition, make sure no characters exist in one string and not in the other
    for (let i = 0; i < 26; i++) {
        if ((word1Map[i] === 0 && word2Map[i] > 0) || (word2Map[i] === 0 && word1Map[i] > 0)) return false;
    }

    //helper function to determine array equality (requires sorted arrays)
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    //for second condition ensure sorted frequencies are the same
    return areArraysEqual(word1Map.sort(), word2Map.sort());
}

/*Time Complexity : O(n), where n is the length of word.
We iterate over words of size n to build the frequency map which takes O(n).
To check if both words have the same characters and frequency, 
we iterate over a fixed-size array of size 26 which takes constant time. 
The sort operation on the array also takes constant time, as the array is of size 26.
This gives us time complexity of O(n)+O(1)+O(1)=O(n)*/

const word1 = "abc", word2 = "bca";

console.log(closeStringsFrequencyArray(word1, word2));