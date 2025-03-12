/* Returns an array of size 256 containing count
of characters in the passed char array */
const getCharCountArray = (str) => {
    let count = new Array(256).fill(0);

    for (let i = 0; i < str.length; i++) {
        count[str[i].charCodeAt(0)]++;
    }

    return count;
}

/* Returns index of first
non-repeating character in a string. If all
characters are repeating then returns -1 */
const firstNonRepeatedCharacter = (str) => {
    let count = getCharCountArray(str);
    let firstNonRepeatedCharacter = -1

    for (let i = 0; i < str.length; i++) {
        if (count[str[i].charCodeAt(0)] === 1) {
            firstNonRepeatedCharacter = str[i];
            break;
        }
    }

    return firstNonRepeatedCharacter;
}

console.log(firstNonRepeatedCharacter('buabgodnfgsdnfs'));

//time complexity O(n)
/*	The time complexity of the getCharCountArray function is O(n) where n is the length of the input string 'str'. The function iterates through the input string once to count the characters,
logging their frequency in a hashmap.
The time complexity of the firstNonRepeatedCharacter function is also O(n) where n is the length of the input string 'str'. 
It iterates through the input string once to check for the first non-repeating character by looking up it's frequency in the count hashmap. 
Therefore, the overall time complexity is O(n)*/