/*Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.*/

const findMaxLength = (nums) => {
    const map = new Map();
    map.set(0, -1);

    let maxLength = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] === 1 ? 1 : -1);

        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return maxLength;
}

//Linear time and space

const nums = [0,1,0];
console.log(findMaxLength(nums));