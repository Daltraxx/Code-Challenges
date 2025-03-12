/*Given an array of integers nums and an integer k. 
A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.*/

const numberOfSubarrays = (nums, k) => {
    //hashmap to store 'prefix odd' counts
    const counts = new Map();
    counts.set(0, 1);

    let current = 0; //keep track of current 'prefix odd' count
    let ans = 0;

    for (let num of nums) {
        current += num % 2;
        ans += counts.get(current - k) || 0;
        counts.set(current, (counts.get(current) || 0) + 1)
    }

    return ans;
}

//linear time and space complexity

const nums = [1,1,2,1,1], k = 3;
console.log(numberOfSubarrays(nums, k));