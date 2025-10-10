const permute = (nums) => {
  const backtrack = (current) => {
    if (current.length === nums.length) {
      permutations.push(current);
      return;
    }
    for (let num of nums) {
      if (!current.includes(num)) {
        current.push(num);
        backtrack(current);
        current.pop();
      }
    }
  };

  const permutations = [];
  backtrack([]);
  return permutations;
};

const nums = [1, 2, 3];
console.log(permute(nums));
