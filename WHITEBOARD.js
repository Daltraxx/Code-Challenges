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
    
    let count = 1;
    let writePointer = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums [i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[writePointer] = nums[i];
            writePointer++;
        }
    }

     return writePointer;
}

const nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums));
console.log(nums);