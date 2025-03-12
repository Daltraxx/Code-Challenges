/*Given an integer array nums sorted in non-decreasing order, 
remove some duplicates in-place such that each unique element appears at most twice. 
The relative order of the elements should be kept the same.

If there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.*/

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let i = 1; // Pointer for current index in the array
    let count = 1; // Count of the current element occurrences

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === nums[j - 1]) {
            // Increment count for the current element if repeated
            count++;
        } else {
            count = 1; // Reset count for new element
        }

        if (count <= 2) {
            // Update the array in place
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
}

//O(n)
/*The code snippet iterates through the input array 'nums' only once using two pointers i and j. 
The time complexity is linear O(n) where n is the number of elements in the input array.*/

const nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums));
console.log(nums);