/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.*/

//Follow-up: Could you solve the problem in linear time and in O(1) space?

const majorityElementHashmap = (nums) => {
    let frequencyMap = new Map();

    for (let num of nums) {
        frequencyMap.has(num) ? frequencyMap.set(num, frequencyMap.get(num) + 1) : frequencyMap.set(num, 1);
        //if frequency is majority element (frequency > array length divided by 2), return element
        if (frequencyMap.get(num) > nums.length / 2) {
            return num;
        }
    }


    return -1;
}

//O(n)
/*The code iterates through the input array 'nums' once to create a frequency map, 
which takes O(n) time. 
Then, it iterates through the frequency map to find the majority element, 
which also takes O(n) time. 
Therefore, the overall time complexity is O(n).*/

const majorityElementSorting = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

//O(n log n) - sorting the array
//Space complexity : O(1)

const majorityBoyerMooreVotingAlgorithm = (nums) => {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += num === candidate ? 1 : -1;
    }

    return candidate;
}

/*Time complexity : O(n)
- Boyer-Moore performs constant work exactly n times, so the algorithm
runs in linear time.
Space complexity : O(1)
- Boyer-Moore allocates only constant additional memory.*/

const nums = [3,2,3];

console.log(majorityBoyerMooreVotingAlgorithm(nums));