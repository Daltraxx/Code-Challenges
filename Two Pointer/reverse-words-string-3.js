/*Given a string s, 
reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order.
- s does not contain any leading or trailing spaces.
- There is at least one word in s.
- All the words in s are separated by a single space.*/

//not two pointer
const reverseWords = (s) => {
    wordArray = s.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].split('').reverse().join('');
    }

    return wordArray.join(' ');
}

//O(n*m)

const reverseWordsTwoPointer = (s) => {
    let lastSpaceIndex = -1;
    const charArray = s.split('');
    const n = s.length;

    for (let strIndex = 0; strIndex <= n; strIndex++) {
        if (strIndex === n || charArray[strIndex] === ' ') {
            let startIndex = lastSpaceIndex + 1;
            let endIndex = strIndex - 1;

            while(startIndex < endIndex) {
                [charArray[startIndex], charArray[endIndex]] = [charArray[endIndex], charArray[startIndex]];
                startIndex++;
                endIndex--;
            }

            lastSpaceIndex = strIndex;
        }
    }

    return charArray.join('');
}

/*Time Complexity: O(N) The outer loop iterates over N characters to find the start and end index of every word. 
The algorithm to reverse the word also iterates N times to perform N/2 swaps. Thus, the time complexity is O(N+N)=O(N).

Space Complexity: O(1) We use constant extra space to track the last space index.*/

const s = "Let's take LeetCode contest";
console.log(reverseWordsTwoPointer(s)) //"s'teL ekat edoCteeL tsetnoc"