/*Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).*/

//don't like
const isSubsequence = (s, t) => {
    let checklist = [];
    for (let i = 0; i < s.length; i++) {
        checklist[i] = s[i];
    }

    for (let char of t) {
        if (char === checklist[0]) {
            checklist.shift();
        }
    }

    return checklist.length === 0;
}

//O(n)

//don't like
const isSubsequenceDivideConquer = (s, t) => {
    let leftBound = s.length;
    let rightBound = t.length;

    const recursiveIsSubsequence = (leftIndex, rightIndex) => {
        //base cases
        if (leftIndex === leftBound) {
            //s becomes empty, i.e. matches are found for all letters in source string
            return true;
        } else if (rightIndex === rightBound) {
            //t becomes empty, i.e. target string is exhausted but there are letters left unmatched in souce string
            return false;
        }

        //if s[index] === t[index], advance s[index] as well as t[index]
        if (s[leftIndex] === t[rightIndex]) {
            leftIndex++;
        }
        //else just advance t[index]
        rightIndex++;

        return recursiveIsSubsequence(leftIndex, rightIndex);
    }

    return recursiveIsSubsequence(0, 0);
}

//O(n)
/*The time complexity of the isSubsequenceDivideConquer function is O(n) where n is the length of the target string 't'. 
The function uses a recursive approach to check if the source string 's' is a subsequence of the target string 't'. 
In the worst case scenario, 
the function will iterate through all characters in the target string 't' before determining if 's' is a subsequence, 
resulting in a linear time complexity.*/

const isSubsequenceTwoPointer = (s, t) => {
    if (s.length === 0) return true;
    
    let sPointer = 0;
    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (s[sPointer] === t[tPointer]) sPointer++;
        if (sPointer === s.length) return true;
    }

    return false;
}

//probably overcomplicated, but worth knowing
const isSubsequenceHashMap = (s, t) => {
    const binarySearch = (prev, start, end, arr) => {
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            if (arr[mid] <= prev) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        if (arr[start] === undefined) {
            return -1;
        }

        return arr[start];
    }

    if (s.length === 0) return true;
    if (s.length > t.length) return false;

    //create hashmap of target chars and their indices
    const hashMap = new Map();
    for (let i = 0; i < t.length; i++) {
        hashMap.has(t[i]) ? hashMap.set(t[i], [...hashMap.get(t[i]), i]) : hashMap.set(t[i], [i]);
    }

    let prev = -1; // the previous matched index in t, the later matched index should be bigger than this one
    //iterate through source string and use binary search of matched indices in target string to see if there is index if greater than previously matched index. Return false if ever not true
    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (!hashMap.has(current)) {
            //early exit if target doesn't have source character at all
            return false
        } else {
            const indices = hashMap.get(current);
            prev = binarySearch(prev, 0, indices.length - 1, indices);
            if (prev === -1) return false;
        }
    }

    return true;
}
//O(∣T∣+∣S∣⋅log∣T∣).

const s = 'abc';
const t = 'ahbgdbcb';

console.log(isSubsequenceHashMap(s, t));