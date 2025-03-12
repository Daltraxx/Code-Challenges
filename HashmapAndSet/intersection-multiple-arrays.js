/*Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, 
return the list of integers that are present in each array of nums sorted in ascending order.*/

const intersection = (nums) => {
    const hashmap = new Map();

    for (let i of nums) {
        for (let num of i) {
            hashmap.set(num, (hashmap.get(num) || 0) + 1)
        }
    }

    let ans = [];

    for (let [key, value] of hashmap) {
        if (value === nums.length) ans.push(key);
    }

    ans.sort((a, b) => a - b);

    return ans;
}

//Time: O(m⋅(n+logm))
/*Let's say that there are n lists and each list has an average of m elements. To populate our hash map, it costs O(n⋅m)O(n⋅m) to iterate over all the elements. 
The next loop iterates over all unique elements that we encountered. If all elements are unique, this can cost up to O(n⋅m)O(n⋅m), 
although this won't affect our time complexity since the previous loop also cost O(n⋅m)O(n⋅m). 
Finally, there can be at most m elements inside ans when we perform the sort, 
which means in the worst case, the sort will cost O(m⋅log⁡m)O(m⋅logm). 
This gives us a time complexity of O(n⋅m+m⋅log⁡m)=O(m⋅(n+log⁡m))O(n⋅m+m⋅logm)=O(m⋅(n+logm))*/

//Space = O(n*m)
/*If every element in the input is unique, then the hash map will grow to a size of n⋅m, 
which means the algorithm has a space complexity of O(n⋅m).*/

const nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];
console.log(intersection(nums));