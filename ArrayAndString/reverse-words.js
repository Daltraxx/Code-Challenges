/*Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.*/

const reverseWords = (s) => {
    let wordArr = s.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
        console.log(`"${wordArr[i]}"`);
        if (wordArr[i] === '') {
            wordArr = wordArr.slice(0, i).concat(wordArr.slice(i + 1));
            i--;
        }
    }

    return wordArr.reverse().join(' ');
    
}

//O(n^2)
/*	The code has a loop that iterates through each word in the input string, splitting it into an array. 
Inside the loop, there is a conditional check and potentially a slice operation which can take O(n) time. 
As a result, the overall time complexity is O(n^2) 
where n is the length of the input string.*/

const reverseWordsTrimRegex = (s) => s.trim().split(/\s+/).reverse().join(' ');

//O(n)
/*The code first trims the input string, which takes O(n) time where n is the length of the input string. 
Then it splits the string into an array of words using the split method, which also takes O(n) time. 
The reverse method reverses the array in place, which is O(n) as well. 
Finally, the join method concatenates the reversed array into a string, which also takes O(n) time. 
Therefore, the overall time complexity is O(n).*/

//doesn't use built-in methods such as split and trim
const reverseWordsDeque = (s) => {
    let left = 0,
        right = s.length - 1;
    
    //for removing/not dealing with leading and trailing spaces (instead of trim)
    while (left <= right && s[left] === ' ') left++;
    while (left <= right && s[right] === ' ') right--;

    let dequeu = [];
    let word = '';

    while (left <= right) {
        if (word.length !== 0 && s[left] === ' ') {
            dequeu.push(word);
            word = '';
        } else if (s[left] !== ' ') {
            word += s[left];
        }
        left++;
    }

    dequeu.push(word);

    return dequeu.reverse().join(' ');
}

//O(n)
/*The code iterates through the input string 's' once to extract words and store them in a deque. 
The final step of reversing and joining the words in the deque has a time complexity of O(n) as well. 
Therefore, the overall time complexity is O(n).*/

const s = " a good   example ";
console.log(reverseWordsDeque(s));
