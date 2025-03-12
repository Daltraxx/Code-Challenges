/*You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.*/

const maxOperations = (nums, k) => {
    const hashMap = new Map();
    for (let num of nums) {
        if (hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num) + 1);
        } else {
            hashMap.set(num, 1)
        }
    }

    let count = 0;

    for (let num of nums) {
        let complement = k - num;
        //see if current num and its complement exist in hashmap
        if (hashMap.get(num) > 0 && hashMap.get(complement) > 0) {
            //if current num is the same as its complement and there is less than 2 occurrences of num in hashmap,
            //do not increment count or change hashmap values
            if (num === complement && hashMap.get(num) < 2) continue;

            //decrement current num and its complement in hashmap so they cannot be used again
            hashMap.set(num, hashMap.get(num) - 1);
            hashMap.set(complement, hashMap.get(complement) - 1);
            count++;
        }
    }

    return count;
}

//O(n)
/*The code iterates through the 'nums' array twice, 
once to build the hashmap and once to check for complements. 
The time complexity is therefore linear, O(n), 
where n is the number of elements in the 'nums' array.*/

const maxOperationsHashMapSinglePass = (nums, k) => {
    const hashMap = new Map();
    let count = 0;

    for (let num of nums) {
        let complement = k - num;
        //if hashmap has complement of current num, simply decrement complement and increment count
        if (hashMap.has(complement) && hashMap.get(complement) > 0) {
            hashMap.set(complement, hashMap.get(complement) - 1)
            count++;
        //else add current num to hashmap, or increment if num already in hashmap
        } else {
            hashMap.has(num) ? hashMap.set(num, hashMap.get(num) + 1) : hashMap.set(num, 1);
        }
    }

    return count;
}

//O(n)

const maxOperationsTwoPointer = (nums, k) => {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let count = 0;

    //with sorted array, if current sum === k, increment count. Increment left pointer and decrement right pointer now that those values have been used
    //if current sum is less than k, increment left pointer (for potentially greater sum)
    //if current sum is greater than k, decrement right pointer (for potentially smaller sum)
    while (left < right) {
        if (nums[left] + nums[right] === k) {
            left++;
            right--;
            count++;
        } else {
            nums[left] + nums[right] < k ? left++ : right--;
        } 
    }

    return count;
}

/*Time Complexity : O(nlogn), where n is the length of array nums.
The sort operation on the array takes O(nlogn) time.
Each element is traversed only once, either by the left pointer or by the right pointer, depending on the fact that which pointer reaches that element first. 
Thus, traversing array takes O(n) time.
This gives us total time complexity as O(nlogn) + O(n) = O(nlogn).*/

let nums = [67,8,24,24,18,26,27,68,78,64,57,55,68,28,9,11,38,45,61,37,81,89,38,43,45,26,84,62,22,37,51,15,30,67,75,24,66,40,81,74,48,43,78,14,33,19,73,5,1,2,53,29,49,73,23,5];
let k = 59;

console.log(maxOperationsTwoPointer(nums, k));