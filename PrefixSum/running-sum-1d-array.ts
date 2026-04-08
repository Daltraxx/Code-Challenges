/*Given an array nums. 
We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.*/

const runningSumSeparateArr = (nums: number[]): number[] => {
    let prefixSumArr = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefixSumArr.push(nums[i] + prefixSumArr[i - 1]);
    }

    return prefixSumArr;
}

/*Time complexity: O(n) where n is the length of the input array. 
This is because we use a single loop that iterates over the entire array to calculate the running sum.

Space complexity: O(n) We declare an array of size n to store the running sum and access the previous value to calculate the next value. 
Although output space is not considered when calculating space complexity, 
our result array is used for calculating the answer, so its space is considered.*/

const runningSumConstantSpace = (nums: number[]): number[] => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }

    return nums;
}

/*Time complexity: O(n) where n is the length of input array.

Space complexity: O(1) since we don't use any additional space to find the running sum. 
Note that we do not take into consideration the space occupied by the output array.*/

const nums = [1,2,3,4];
console.log(runningSumSeparateArr(nums)); //should return [1,3,6,10]