const permute = (nums) => {
  const backtrack = (current, used) => {
    if (current.length === nums.length) {
      permutations.push([...current]);
      return;
    }
    for (let num of nums) {
      if (!used.has(num)) {
        current.push(num);
        used.add(num);
        backtrack(current, used);
        current.pop();
        used.delete(num);
      }
    }
  };

  const permutations = [];
  backtrack([], new Set());
  return permutations;
};

// Time O(n⋅n!)
// Space O(n⋅n!)

const nums = [1, 2, 3];
console.log(permute(nums));
