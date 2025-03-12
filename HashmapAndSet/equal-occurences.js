/*Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).*/

const areOccurrencesEqual = (s) => {
    const counts = new Map();

    for (let char of s) {
        counts.set(char, (counts.get(char) || 0) + 1)
    }

    const check = counts.get(s[0]);

    for (let value of counts.values()) {
        if (value !== check) {
            return false;
        }
    }

    
    return true;
}

//Linear time and space complexity

const areOccurrencesEqualRefactoredWithSet = (s) => {
    const counts = new Map();

    for (let char of s) {
        counts.set(char, (counts.get(char) || 0) + 1)
    }

    const frequencies = new Set(counts.values());

    return frequencies.size === 1;
}

/*Given n as the length of s, it costs O(n) to populate the hash map, then O(n) to convert the hash map's values to a set. 
This gives us a time complexity of O(n). 
The space that the hash map and set would occupy is equal to the number of unique characters. 
As previously discussed, some people would argue that this is O(1) since the characters come from the English alphabet, which is bounded by a constant. 
A more general answer would be to say that the space complexity is O(k), 
where k is the number of characters that could be in the input, which happens to be 26 in this problem.*/

const s = "abacbc";
console.log(areOccurrencesEqualRefactoredWithSet(s));