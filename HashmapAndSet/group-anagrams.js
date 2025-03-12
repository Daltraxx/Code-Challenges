/*Given an array of strings strs, group the anagrams together.

For example, given strs = ["eat","tea","tan","ate","nat","bat"], return [["bat"],["nat","tan"],["ate","eat","tea"]].*/

const groupAnagrams = (strs) => {
    const groups = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');

        if (!groups.has(key)) {
            groups.set(key, []);
        }
            
        groups.get(key).push(str);
    }

    const ans = [];

    for (let group of groups.values()) {
        ans.push(group);
    }

    return ans;
}

/*Given n as the length of strs and m as the average length of the strings, we iterate over each string and sort it, which costs O(n⋅m⋅log⁡m). 
Then, we need to iterate over the keys. I
n the worst case scenario, when there are no matching anagrams, there will be n groups, which means this will cost O(n), 
giving an overall time complexity of O(n⋅m⋅log⁡m) (the final  +n is dominated). 

The space complexity is O(n⋅m) as each string will be placed in an array within the hash map.*/

const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));