/*You are given a 0-indexed array nums consisting of positive integers. 
You can choose two indices i and j, such that i != j, 
and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.*/

const maximumSum = (nums) => {
    const getDigitSum = (num) => {
        let digitSum = 0;
        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
        
        return digitSum;
    }

    const dict = new Map();
    let ans = -1;
    for (let num of nums) {
        let digitSum = getDigitSum(num);

        if (dict.has(digitSum)) {
            ans = Math.max(ans, num + dict.get(digitSum))
        }

        dict.set(digitSum, Math.max(num, dict.get(digitSum) || 0));
    }

    return ans;
}

//linear time and space

const nums = [18,43,36,13,7];
console.log(maximumSum(nums));