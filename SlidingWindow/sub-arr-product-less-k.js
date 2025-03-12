/*Given an array of positive integers nums and an integer k, 
return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.*/

const numSubarrayProductLessThanK = (nums, k) => {
    //if k is 0 or 1, no subarrays possible
    if (k <= 1) return 0;

    let numSubArrays = 0;
    let currentProduct = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentProduct *= nums[right];
        while (currentProduct >= k) {
            currentProduct /= nums[left];
            left++;
        }

        //if no possible subarrays with right bound, left will be one more than right, so count will not increment
        numSubArrays += right - left + 1;
    }

    return numSubArrays;
}

/*Time complexity: O(n)
The algorithm iterates through the input array nums using a single for loop. 
Inside the loop, there are nested operations for shrinking the window, 
but since left is incremented a total number of n times during the whole array traversal, 
each element in the array is visited at most twice.
The nested loop terminates when the product becomes less than k, and this can only happen at most n times total (once for each element). 
Therefore, the overall time complexity is 2n, which we describe as O(n).

Space complexity: O(1)
The algorithm uses a constant amount of extra space for variables like totalCount, product, left, and right. 
These variables do not depend on the size of the input array. 
Therefore, the space complexity is considered constant, denoted as O(1).*/

const nums = [10,5,2,6], k = 100; //8
console.log(numSubarrayProductLessThanK(nums, k));