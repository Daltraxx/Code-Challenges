/*Given a binary array nums, 
you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1's in the resulting array. 
Return 0 if there is no such subarray.*/

const longestSubarray = (nums) => {
    let availableDeletion = 1;
    let left = 0;
    let right;

    for (right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            availableDeletion--;
        }

        if (availableDeletion < 0) {
            if (nums[left] === 0) {
                availableDeletion++
            }
            left++;
        }
    }

    
    //subtract additional unit for deletion
    return right - left - 1;
}

//O(n)
/*The code snippet uses a sliding window approach to find the longest subarray with at most one zero. 
It iterates through the 'nums' array only once, incrementing the 'right' pointer and adjusting the 'left' pointer accordingly. 
Therefore, the time complexity is O(n) where n is the number of elements in the 'nums' array.*/

const longestSubarrayLeet = (nums) => {
    let zeroCount = 0;
    let longestWindow = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroCount++;
        
        //if more than one zero, contract left side until there is only one zero
        while (zeroCount > 1) {
            if (nums[start] === 0) zeroCount--;
            start++;
        }

        //Update the variable longestWindow with the current window length if greater than previous largest window. 
        //Note that this subtraction (i - start) will give the number of elements in the window minus 1, as we need to delete one element too.
        longestWindow = Math.max(longestWindow, i - start);
    }

    return longestWindow;
}

/*Time complexity: O(N)
Each element in the array will be iterated over twice at max. 
Each element will be iterated over for the first time in the for loop; 
then, it might be possible to re-iterate while shrinking the window in the while loop. 
No element can be iterated more than twice. 
Therefore, the total time complexity would equal O(N).*/

let nums = [0,1,1,1,0,1,1,0,1];

console.log(longestSubarrayLeet(nums))