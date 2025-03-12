/*Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.*/

const subarraySum = (nums, k) => {
    //hashmap to store frequency of prefix sums
    const counts = new Map();
    counts.set(0, 1);

    let current = 0; //keep track of current prefix sum
    let ans = 0;

    for (let num of nums) {
        current += num;
        ans += counts.get(current - k) || 0;
        counts.set(current, (counts.get(current) || 0) + 1);
    }

    return ans;
}

const nums = [1,1,1], k = 2;
console.log(subarraySum(nums, k));