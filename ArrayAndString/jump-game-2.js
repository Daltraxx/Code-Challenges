/*You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].*/

const jump = (nums) => {
    // The starting range of the first jump is [0, 0]
    let curEnd = 0, curFar = 0;
    let answer = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest reachable index of this jump.
        curFar = Math.max(curFar, i + nums[i]);

        // If we finish the starting range of this jump,
        // Move on to the starting range of the next jump.
        if (i === curEnd) {
            answer++;
            curEnd = curFar;
        }
    }

    return answer;
}

/*Time complexity: O(n)
We iterate over nums and stop at the second last element. 
In each step of the iteration, we make some calculations that take constant time. 
Therefore, the overall time complexity is O(n).

Space complexity: O(1)
In the iteration, we only need to update three variables, curEnd, curFar and answer, they only take constant space.*/

const nums = [2,3,1,1,4];
console.log(jump(nums));