/*You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. 
Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
- jewels and stones consist of only English letters.
- All the characters of jewels are unique.*/

const numJewelsInStones = (jewels, stones) => {
    const jewelsSet = new Set(jewels);
    
    let ans = 0;
    for (let stone of stones) {
        if (jewelsSet.has(stone)) {
            ans++;
        }
    }

    return ans;
}

//time: O(n + m)
//space: O(n)

const jewels = "aA", stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));