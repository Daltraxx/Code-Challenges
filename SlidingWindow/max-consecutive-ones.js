/*Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array 
if you can flip at most k 0's.*/

const longestOnes = (nums, k) => {
    let count = 0;

    //first get largest subarray possible starting from first index
    for (let num of nums) {
        if (num === 0 && k > 0) {
            k--;
        } else if (num === 0 && k === 0) {
            break;
        }

        count++;
    }

    let maxZeroes = count;
    //using first largest possible subarray as starting point, update available ones (k) as window shifts right
    for (let i = count; i < nums.length; i++) {
        if (nums[i - count] === 0) {
            k++;
        }

        if (nums[i] === 0) {
            k--;
        }

        //is not valid subarray if available ones are negative. Continue if true
        if (k < 0) continue;

        //if available ones are not negative, and the next number is either not a zero or there are available ones, window can be expanded forward
        while (nums[i + 1] === 1 || k > 0) {
            if (nums[i + 1] === 0) {
                k--;
            }
            count++;
            i++;
        }

        maxZeroes = Math.max(maxZeroes, count);
    }

    return maxZeroes;
}

//O(n)

const longestOnesLeet = (nums, k) => {
    let left = 0;
    let right;

    for (right = 0; right < nums.length; right++) {
        //if 0 in window, decrement k
        if (nums[right] === 0) k--;

        //if k negative, contract window by incrementing left pointer.
        //if removed num is 0, increment k
        if (k < 0) {
            k += 1 - nums[left];
            left++;
        }
    }

    //difference between right and left pointers is max consecutive window
    return right - left;
}

/*Time Complexity: O(N), where N is the number of elements in the array. 
In worst case we might end up visiting every element of array twice, 
once by left pointer and once by right pointer.*/

let nums = [1,1,1,0,0,0,1,1,1,1,0];
let k = 2;

console.log(longestOnesLeet(nums, k));