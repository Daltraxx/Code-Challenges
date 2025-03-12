/*Given an integer array nums, 
return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.*/

const increasingTriplet = (nums) => {
    let firstNum = Number.MAX_VALUE;
    let secondNum = Number.MAX_VALUE;

    for (let num of nums) {
        if (num <= firstNum) {
            firstNum = num;
        } else if (num <= secondNum) {
            secondNum = num;
        } else {
            return true;
        }
    }

    return false;
}

//O(n)
/*The code iterates through the 'nums' array once, 
so the time complexity is O(n) where n is the number of elements in the array.*/

const nums = [20,100,10,12,5,13];

console.log(increasingTriplet(nums));