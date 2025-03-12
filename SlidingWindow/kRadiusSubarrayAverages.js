/*You are given a 0-indexed array nums of n integers, and an integer k.
The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.*/

const getAverages = (nums, k) => {
    //if k = 0, averages will be same as nums
    if (k === 0) {
        return nums;
    }

    const n = nums.length;
    const windowSize = 2 * k + 1;
    const averages = new Array(n).fill(-1);

    //if windowSize is greater than nums length,
    //averages will only contain -1s
    if (windowSize > n) {
        return averages;
    }

    //get initial window
    let windowSum = 0;
    let left = 0, right = 0;
    while (right < windowSize) {
        windowSum += nums[right];
        right++;
    }

    //get first non -1 average now so..
    //we don't go out of bounds in for loops trying to subtract nums[left - 1]
    averages[k] = Math.floor(windowSum / windowSize);
    left++;

    for (right; right < n; right++) {
        windowSum += nums[right] - nums[left - 1];
        averages[right - k] = Math.floor(windowSum / windowSize);
        left++;
    }

    return averages;
}