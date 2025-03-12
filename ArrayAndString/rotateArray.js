/*Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.*/

const rotates = (nums, k) => {
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            [nums[next], prev] = [prev, nums[next]];
            current = next;
            count++;
        } while (current !== start)
    }
}

//linear time constant space

const rotate = (nums, k) => {
    const n = nums.length;
    const rotatedArray = new Array(n);

    for (let i = 0; i < n; i++) {
        let next = (i + k) % n;
        rotatedArray[next] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotatedArray[i]
    }
}