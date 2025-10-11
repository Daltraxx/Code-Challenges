const subsets = (nums) => {
  const subsetsArr = [];
  const backtrack = (curr, i) => {
    subsetsArr.push([...curr]);
    for (i; i < nums.length; i++) {
      const num = nums[i];
      if (!curr.includes(num)) {
        curr.push(num);
        backtrack(curr, i + 1);
        curr.pop();
      }
    }
  }
  backtrack([], 0);
  return subsetsArr;
}

const nums = [1, 2, 3];
console.log(subsets(nums));