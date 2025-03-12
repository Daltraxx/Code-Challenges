/*Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.*/

const reverseVowels = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let strVowelsArr = [];
    const vowelLocationArr = [];
    const strArray = s.split('');
    for (let i = 0; i < strArray.length; i++) {
        if (vowels.includes(strArray[i].toLowerCase())) {
            strVowelsArr.push(strArray[i]);
            vowelLocationArr.push(i);
        }
    }

    strVowelsArr = strVowelsArr.reverse();

    for (let i = 0; i < vowelLocationArr.length; i++) {
        strArray[vowelLocationArr[i]] = strVowelsArr[i];
    }
        
    return strArray.join('');       
        
}

//O(n)
/*The code iterates through the input string 's' once to identify and store the vowels and their locations, 
then it iterates through the vowel locations array to replace the vowels with the reversed vowels. 
Therefore, the time complexity is O(n) 
where n is the length of the input string 's'.*/

const reverseVowelsPointers = (s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let sArr = s.split('');
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        if (vowels.includes(sArr[start].toLowerCase()) && vowels.includes(sArr[end].toLowerCase())) {
            [sArr[start], sArr[end]] = [sArr[end], sArr[start]];
            start++;
            end--;
        } else if (vowels.includes(sArr[start].toLowerCase())) {
            end--;
        } else if (vowels.includes(sArr[end].toLowerCase())) {
            start++;
        } else {
            start++;
            end--;
        }
    }

    return sArr.join('');
}

//O(n) (simplified from O(n/2))
/*The code iterates through the input string 's' using two pointers, 'start' and 'end', 
which move towards each other until they meet in the middle. 
The while loop runs in O(n/2) time complexity, 
which simplifies to O(n) where n is the length of the input string 's'.*/


const s = 'Eestun sow I was nat Sou.';
console.log(vowels.includes(sArr[0].toLowerCase()));