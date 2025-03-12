/*Given an integer array nums, 
return the number of non-empty subarrays with the leftmost element of the subarray not larger than other elements in the subarray.

A subarray is a contiguous part of an array.

Constraints:
1 <= nums.length <= 5 * 104
0 <= nums[i] <= 105
*/

const validSubarrays = (nums) => {
    let ans = 0;
    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        //maintain monotonic non decreasing stack 
        //and add difference between current index and index at top of stack to ans
        while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
            ans += (i - stack[stack.length - 1]);
            stack.pop();
        }
        stack.push(i);
    }

    while (stack.length) {
        //pop rest of stack for which there is no next smaller element
        //and add difference of nums length and popped index
        ans += (nums.length - stack[stack.length - 1]);
        stack.pop();
    }

    return ans;
}

const nums = [1,4,2,5,3];
console.log(validSubarrays(nums));