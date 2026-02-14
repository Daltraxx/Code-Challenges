/*You are given an array of integers nums, 
there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.

Return the max sliding window.*/

const maxSlidingWindow = (nums, k) => {
    const maxDeque = [];
    const ans = new Array(nums.length - k + 1);

    for (let i = 0; i < nums.length; i++) {
        //maintain monotonic decreasing deque and
        //remove all elements in deque smaller than current one (no chance of being maximum)
        while (maxDeque.length && nums[i] > nums[maxDeque.at(-1)]) {
            maxDeque.pop();
        }

        maxDeque.push(i);

        //queue[0] is index of maximum element
        //check if outside window, and remove if so
        if (maxDeque[0] < i - k + 1) {
            maxDeque.shift();
        }

        //add to answer once window is size k
        if (i >= k - 1) {
            ans[i - k + 1] = nums[maxDeque[0]];
        }
    }

    return ans;
}

const nums = [1], k = 1;
console.log(maxSlidingWindow(nums, k));