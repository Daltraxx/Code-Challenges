/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.*/

const moveZeroes = (nums) => {
    let zeroCount = 0;
    let newOrderArr = [];
    //get number of zeroes and add all non-zeroes to newOrderArr
    for (let num of nums) {
        num === 0 ? zeroCount++ : newOrderArr.push(num);
    }
    //add correct number of zeros to the end of newOrderArr
    for (let i = 0; i < zeroCount; i++) {
        newOrderArr.push(0);
    }
    //modify nums to be same as newOrderArr
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newOrderArr[i];
    }
}

//O(n)
/*The code snippet consists of three loops, 
each iterating through the 'nums' array once. 
Therefore, the overall time complexity is O(n), 
where n is the number of elements in the 'nums' array.*/

const moveZeroesPointers = (nums) => {
    let slowPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        //when non-zero element found, swap with slowPointer index and advance (increment) slowPointer
        if (nums[i] !== 0) {
            [nums[slowPointer], nums[i]] = [nums[i], nums[slowPointer]];
            slowPointer++;
        }
    }
}

//O(n)
/*The code snippet iterates through the 'nums' array once using a single loop. 
The slowPointer is only incremented when a non-zero element is found, 
so each element is visited at most once. 
Therefore, the time complexity is O(n) 
where n is the number of elements in the 'nums' array.*/

const nums = [0,1,0,3,12];

moveZeroesPointers(nums);
console.log(nums);