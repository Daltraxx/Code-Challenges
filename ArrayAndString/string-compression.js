/*Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:
If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
After you are done modifying the input array, return the new length of the array.*/

const compress = (chars) => {
    //index
    let i = 0;
    //length of compressed string and tool for writing to chars array
    let res = 0;

    while (i < chars.length) {
        let groupLength = 1;
        while (i + groupLength < chars.length && chars[i] === chars[i + groupLength]) {
            groupLength++;
        }

        //After determining the groupLength, the character chars[i] is stored at the current res index in the chars array, and res is incremented.
        chars[res] = chars[i];
        res++;
        //Note: above two lines could be simplified to `chars[res++] = chars[i]`
        
        //add compression number after chars[i] to array if more than 1 of character. Add one digit at a time if more than ten
        if (groupLength > 1) {
            for (let char of groupLength.toString()) {
                chars[res] = char;
                res++;
            }
        }
        
        i += groupLength;
    }

    //there may be extra characters in chars unless this code is added
    while (res < chars.length) {
        chars.pop();
    }

    return res;
}

//O(n)
/*The time complexity of the compress function is O(n) where n is the length of the input array 'chars'. 
The function iterates through the array once, and the nested while loop also iterates through a portion of the array. 
The overall time complexity is linear with respect to the length of the input array.*/

const chars = ["a","a","a","b","b","a","a"];
console.log(compress(chars));

console.log(chars);