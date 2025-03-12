//Given an integer array nums, rotate the array (in place) to the right by k steps, where k is non-negative.

const rotateBruteForce = (nums, k) => {
    // speed up the rotation
    k %= nums.length;

    for (let i = 0; i < k; i++) {
        let previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            [nums[j], previous] = [previous, nums[j]];
        }
    }
}

/*Time complexity: O(n×k).
All the numbers are shifted by one step(O(n))
k times.*/

const rotateHashmap = (nums, k) => {
    k %= nums.length;
    const newPositions = new Map();

    for (let i = 0; i < nums.length; i++) {
        let newPosition = (i + k) % nums.length;
        newPositions.set(nums[i], newPosition);
    }

    for (let position of newPositions) {
        nums[position[1]] = position[0];
    }
    
}

//O(n)
/*The code snippet has a linear time complexity of O(n) 
because it iterates through the 'nums' array once to calculate the new positions 
and then updates the array with the new values based on the new positions.*/

const rotateExtraArray = (nums, k) => {
    const rotatedArray = [];

    for (let i = 0; i < nums.length; i++) {
        rotatedArray[(i + k) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotatedArray[i];
    }
}

/*Time complexity: O(n).
One pass is used to put the numbers in the new array.
And another pass to copy the new array to the original one.

Space complexity: O(n). Another array of the same size is used.*/

const rotateCyclicReplacements = (nums, k) => {
    k = k % nums.length;

    let count = 0;

    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];

        do {
            let next = (current + k) % nums.length;
            [nums[next], prev] = [prev, nums[next]];
            current = next;
            count++;
            console.log(nums);

        } while (start !== current);

    }
}

/*Time complexity: O(n). Only one pass is used.
Space complexity: O(1). Constant extra space is used.*/

const rotateReverse = (nums, k) => {
    const reverse = (nums, start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    k %= nums.length;
    //reverse all numbers
    reverse(nums, 0, nums.length - 1);
    //reverse first k numbers
    reverse(nums, 0, k - 1);
    //reverse last n - k numbers
    reverse(nums, k, nums.length - 1);
}

/*Time complexity: O(n). n elements are reversed a total of three times.
Space complexity: O(1). No extra space is used.*/

const nums = [-1,-100,3,99], k = 1;


rotateReverse(nums, k);

console.log(nums);