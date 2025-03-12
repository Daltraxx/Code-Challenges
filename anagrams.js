//How Do You Determine Whether the Following Two Strings Are Anagrams of Each Other?

const areAnagrams = (string1, string2) => {
    string1 = string1.toLowerCase().split('').sort().join('');
    string2 = string2.toLowerCase().split('').sort().join('');
    console.log(string1, string2);

    return string1 === string2;

}

console.log(areAnagrams('abcd', 'daCb'));

//O(n log n)
/*The code first converts both input strings to lowercase, then splits them into arrays of characters, sorts the arrays, and finally joins them back into strings. 
The sorting operation has a time complexity of O(n log n), where n is the length of the input strings. 
Therefore, the overall time complexity of the function is O(n log n)*/