/*Given an array of integers nums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
Return the minimum positive value of startValue such that the step by step sum is never less than 1.*/

const minStartValue = (nums) => {
    let prefixSum = [nums[0]];
    let minValue = nums[0];
    

    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1];
        minValue = Math.min(minValue, prefixSum[i]);
    }

    //because minimum start value must be positive, if all values in nums are positive, 1 is minimum start value
    if (minValue > 0) return 1;

    //the minimum startValue is the value that makes the minimum element in the step-by-step sums equal to exactly 1
    return Math.abs(minValue) + 1;
}

//O(n)
/*The code snippet contains a single loop that iterates through the 'nums' array once, 
performing constant time operations within the loop. Therefore, 
the time complexity is O(n) 
where n is the number of elements in the 'nums' array.*/

const minStartValueConstantSpace = (nums) => {
    let total = 0;
    let minValue = 0;

    for (let num of nums) {
        total += num;
        minValue = Math.min(minValue, total);
    }

    return Math.abs(minValue) + 1;
}

/*Time complexity: O(n)
In this method, we just need to traverse the array once.

Space complexity: O(1)
We just need to calculate the step-by-step total of the array and record the minimum step-by-step total, both only require constant space.*/


const nums = [1,-2,-3];
console.log(minStartValueConstantSpace(nums));