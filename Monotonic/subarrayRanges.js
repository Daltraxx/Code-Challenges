/*You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array.*/

const subArrayRanges = (nums) => {
    const stack = [];
    let sumOfRanges = 0;
    
    //account for sum of all minimums
    for (let i = 0; i <= nums.length; i++) {
        while (stack.length && (i === nums.length || nums[i] <= nums[stack.at(-1)])) {
            const mid = stack.pop();
            const leftBound = !stack.length ? -1 : stack.at(-1);
            const rightBound = i;
            
            const subArrCount = (mid - leftBound) * (rightBound - mid);
            sumOfRanges -= subArrCount * nums[mid];
        }

        if (i !== nums.length) stack.push(i);
    }

    //account for sum of all maximums
    for (let i = 0; i <= nums.length; i++) {
        while (stack.length && (i === nums.length || nums[i] >= nums[stack.at(-1)])) {
            const mid = stack.pop();
            const leftBound = !stack.length ? -1 : stack.at(-1);
            const rightBound = i;
            
            const subArrCount = (mid - leftBound) * (rightBound - mid);
            sumOfRanges += subArrCount * nums[mid];
        }

        stack.push(i);
    }

    return sumOfRanges;
}