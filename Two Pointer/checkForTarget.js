/*Given a sorted array of unique integers and a target integer, 
return true if there exists a pair of numbers that sum to target, false otherwise. 

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.*/

const checkForTarget = (nums, target) => {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const currentSum = nums[left] + nums[right];

        if (currentSum === target) {
            return true;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}