/*You are given a 0-indexed array nums of n integers, and an integer k.
The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.*/

const getAverages = (nums, k) => {
    const prefixSum = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[i - 1]);
    }

    const averagesArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i - k < 0 || i + k >= nums.length) {
            averagesArr[i] = -1;
        } else if (i - k === 0) {
            averagesArr[i] = Math.floor((prefixSum[i + k]) / (k*2 + 1));
        } else {
            averagesArr[i] = Math.floor((prefixSum[i + k] - prefixSum[i - k - 1]) / (k*2 + 1));
        }

        
    }

    return averagesArr;
}

//Time: O(n)
//Space: O(n)

const nums = [7,4,3,9,1,8,5,2,6], k = 3; //[-1,-1,-1,5,4,4,-1,-1,-1]
console.log(getAverages(nums, k))