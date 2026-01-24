class NumArray {
  constructor(nums) {
    this.prefixSumArr = new Array(nums.length);
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
      this.prefixSumArr[i] = currentSum;
    }
  }

  sumRange(left, right) {
    const leftSum = left > 0 ? this.prefixSumArr[left - 1] : 0;
    return this.prefixSumArr[right] - leftSum;
  }
}

// Time Complexity: O(1) for sumRange, O(n) for constructor
// Space Complexity: O(n) for storing prefix sums

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return 1
console.log(numArray.sumRange(2, 5)); // return -1
console.log(numArray.sumRange(0, 5)); // return -3