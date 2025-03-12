/*Given an integer array nums and a positive integer k, 
return the most competitive subsequence of nums of size k.

An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.

We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, 
subsequence a has a number less than the corresponding number in b. 
For example, [1,3,4] is more competitive than [1,3,5] 
because the first position they differ is at the final number, and 4 is less than 5.*/

const mostCompetitive = (nums, k) => {
    const deque = [];
    let removableNums = nums.length - k;

    for (let i = 0; i < nums.length; i++) {
        //maintain monotonic non decreasing deque while not removing more nums than allowed
        while (deque.length && nums[i] < deque[deque.length - 1] && removableNums > 0) {
            deque.pop();
            removableNums--;
        }
        deque.push(nums[i]);
    }

    //use first k nums in deque for answer
    return deque.slice(0, k);
}

const nums = [3,5,2,6], k = 2;
console.log(mostCompetitive(nums, k));