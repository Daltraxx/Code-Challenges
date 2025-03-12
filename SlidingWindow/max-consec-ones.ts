/*Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array 
if you can flip at most k 0's.*/

const longestOnes = (nums: number[], k: number): number => {
    let zeros = 0;
    let maxOnes = 0;
    let left = 0, right = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeros++;
        }
        
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }

            left++;
        }

        maxOnes = Math.max(right - left + 1, maxOnes);
        right++;
    }

    return maxOnes;
}

const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
console.log(longestOnes(nums, k)); //6


export {};