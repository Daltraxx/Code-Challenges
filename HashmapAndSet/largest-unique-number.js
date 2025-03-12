/*Given an integer array nums, return the largest integer that only occurs once. 
If no integer occurs once, return -1.*/

const largestUniqueNumber = (nums) => {
    const occurences = new Map();

    for (let num of nums) {
        occurences.set(num, (occurences.get(num) || 0) + 1);
    }

    let maxValue = -1;
    for (let [num, frequency] of occurences) {
        if (frequency === 1) {
            maxValue = Math.max(maxValue, num);
        }
    }

    return maxValue;
}

const nums = [5,7,3,9,4,9,8,3,1];
console.log(largestUniqueNumber(nums));