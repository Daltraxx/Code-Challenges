/*Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.*/

//sorting solution to start
const missingNumber = (nums) => {
    const sortedArr = nums.sort((a, b) => a - b);

    if (sortedArr[0] !== 0) return 0;
    if (sortedArr[sortedArr.length - 1] !== sortedArr.length) return sortedArr.length;

    for (let i = 1; i < sortedArr.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            return nums[i] - 1;
        }
    }
}

const missingNumberHashSet = (nums) => {
    const hashSet = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!hashSet.has(i)) return i;
    }


    return hashSet;
}

//linear time and complexity

//Gauss Formula
/*We can compute the sum of nums in linear time, and by Gauss' formula, we
can compute the sum of the first n natural numbers in constant time. Therefore,
the number that is missing is simply the result of Gauss' formula minus the sum of nums,
as nums consists of the first n natural numbers minus some number.*/

const missingNumberGauss = (nums) => {
    const expectedSum = nums.length * (nums.length + 1) / 2;
    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

const nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));
console.log(nums);