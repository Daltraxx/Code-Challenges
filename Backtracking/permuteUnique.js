const permuteUnique = (nums) => {
  const counts = new Map();
  nums.forEach((num) => counts.set(num, (counts.get(num) || 0) + 1));

  const backtrack = (current) => {
    if (current.length === nums.length) {
      permutations.push([...current]);
      return;
    }

    for (let [num, count] of counts) {
      if (count > 0) {
        counts.set(num, count - 1);
        current.push(num);
        backtrack(current);
        current.pop();
        counts.set(num, count);
      }
    }
  }

  const permutations = [];
  backtrack([]);
  return permutations;
};

const nums = [1, 1, 2];
console.log(permuteUnique(nums));