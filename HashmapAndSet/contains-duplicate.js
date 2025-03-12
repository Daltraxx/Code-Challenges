/*Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.*/

const containsDuplicate = (nums) => {
    const numSet = new Set();

    for (let num of nums) {
        if (numSet.has(num)) return true;

        numSet.add(num);
    }

    return false;
}

//linear time and space

const containsDuplicateOneLine = (nums) => new Set(nums).size !== nums.length;

const nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicateOneLine(nums));