/*Given a string s, find the length of the longest substring without repeating characters.*/

const lengthOfLongestSubstring = (s) => {
    const chars = new Map();

    let left = 0, right = 0;

    let maxSubStr = 0;
    while (right < s.length) {
        let rightChar = s[right];
        chars.set(rightChar, (chars.get(rightChar) || 0) + 1);

        while (chars.get(rightChar) > 1) {
            let leftChar = s[left];
            chars.set(leftChar, chars.get(leftChar) - 1);
            left++;
        }

        maxSubStr = Math.max(maxSubStr, right - left + 1);

        right++;
    }

    return maxSubStr;
}

//linear time and space

const lengthOfLongestSubstringOptimized = (s) => {
    const charToNextIndex = new Map();

    let maxSubStr = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        if (charToNextIndex.has(s[right])) {
            left = Math.max(charToNextIndex.get(s[right]), left)
        }

        maxSubStr = Math.max(maxSubStr, right - left + 1);
        charToNextIndex.set(s[right], right + 1);
    }

    return maxSubStr;
}

//time down from 2n in previous approach to n

const s = "abcabcbb";
console.log(lengthOfLongestSubstringOptimized(s));