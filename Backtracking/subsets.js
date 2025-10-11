const subsets = (nums) => {
  const subsetsArr = [];

  const backtrack = (curr, i) => {
    subsetsArr.push([...curr]);
    for (i; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(curr, i + 1);
      curr.pop();
    }
  };

  backtrack([], 0);
  return subsetsArr;
};

// Time O(n⋅2^n)
// Space O(n⋅2^n)

const nums = [1, 2, 3];
console.log(subsets(nums));