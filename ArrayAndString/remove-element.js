/*Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.*/

const removeElement = (nums, val) => {
    let slowP = 0;

    for (let fastP = 0; fastP < nums.length; fastP++) {
        if (nums[fastP] !== val) {
            nums[slowP] = nums[fastP];
            slowP++;
        }
    }

    return slowP;
}

//O(n)

const removeElementSwapFromEnd = (nums, val) => {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }

    return n;
}

/*Time complexity : O(n).
Both i and n traverse at most n steps. 
In this approach, the number of assignment operations is equal to the number of elements to remove. 
So it is more efficient if elements to remove are rare.*/
const nums = [3,2,2,3], val = 3;

console.log(removeElement(nums, val));

console.log(nums);