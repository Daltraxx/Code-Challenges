/*You are given an integer array nums. 
You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.*/

/*This is a dynamic programming question. Usually, solving and fully understanding a dynamic programming problem is a 4 step process:

1. Start with the recursive backtracking solution
2. Optimize by using a memoization table (top-down2 dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity
All solutions presented below produce the correct result, but they differ in run time and memory requirements.*/

const canJumpBacktracking = (nums) => {
    const canJumpFromPosition = (position, nums) => {
        if (position === nums.length - 1) {
            return true;
        }

        let furthestJump = Math.min(position + nums[position], nums.length - 1);

        for (let nextPosition = furthestJump; nextPosition > position; nextPosition--) {
            if (canJumpFromPosition(nextPosition, nums)) {
                return true;
            }
        }

        return false;
    }

    return canJumpFromPosition(0, nums);
}

/*Time complexity : O(2^n). 
There are 2^n (upper bound) ways of jumping from the first position to the last, where n is the length of array nums.
Space complexity : O(n). Recursion requires additional memory for the stack frames.*/

const canJumpDynamicTopDown = (nums) => {
    let memo = new Array(nums.length).fill('UNKNOWN');
    memo[memo.length - 1] = 'GOOD';


    const canJumpFromPosition = (position, nums) => {
        if (memo[position] !== 'UNKNOWN') {
            return memo[position] === 'GOOD';
        }

        let furthestJump = Math.min(position + nums[position], nums.length - 1);

        for (let nextPosition = furthestJump; nextPosition > position; nextPosition--) {
            if (canJumpFromPosition(nextPosition, nums)) {
                memo[position] = 'GOOD';
                return true;
            }
        }

        memo[position] = 'BAD';
        return false;
    }

    return canJumpFromPosition(0, nums);
}

/*Time complexity : O(n^2).
For every element in the array, say i, 
we are looking at the next nums[i] elements to its right aiming to find a GOOD index. 
nums[i] can be at most n, 
where n is the length of array nums.

Space complexity : O(2n) = O(n).
First n originates from recursion. Second n comes from the usage of the memo table.*/

const canJumpDynamicBottomUp = (nums) => {
    // using Number object to simulate enum
    let Index = { GOOD: 1, BAD: 0, UNKNOWN: -1 };

    let memo = new Array(nums.length).fill(Index.UNKNOWN);
    memo[memo.length - 1] = Index.GOOD;

    for (let i = nums.length - 2; i >= 0; i--) {
        let furthestJump = Math.min(i + nums[i], nums.length - 1);

        for (let j = i + 1; j <= furthestJump; j++) {
            if (memo[j] === Index.GOOD) {
                memo[i] = Index.GOOD;
                break;
            }
        }
    }

    return memo[0] === Index.GOOD;

}

/*Time complexity : O(n^2).
For every element in the array, say i, we are looking at the next nums[i] elements to its right aiming to find a GOOD index. nums[i] can be at most n, where n is the length of array nums.
Space complexity : O(n).
This comes from the usage of the memo table.*/

const canJumpGreedy = (nums) => {
    let lastPosition = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPosition) {
            lastPosition = i;
        }
    }

    return lastPosition === 0;
}

/*Time complexity : O(n).
We are doing a single pass through the nums array, hence n steps, where n is the length of array nums.
Space complexity : O(1).
We are not using any extra memory.*/

const nums = [2, 4, 2, 1, 0, 2, 0];

console.log(canJumpGreedy(nums));