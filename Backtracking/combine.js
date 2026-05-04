const combine = (n, k) => {
  const backtrack = (curr, startingNum) => {
    if (curr.length === k) {
      combinations.push([...curr]);
      return;
    }

    const numsNeeded = k - curr.length;
    const maxNum = n - numsNeeded + 1;
    for (let num = startingNum; num <= maxNum; num++) {
      curr.push(num);
      backtrack(curr, num + 1);
      curr.pop();
    }
  };

  const combinations = [];
  backtrack([], 1);
  return combinations;
};

// Time complexity: O(k * C(n, k)) where k is the size of each combination 
// and C(n, k) is the binomial coefficient representing the number of combinations. 
// We take O(k) time to create a copy of each valid combination, 
// and there are C(n, k) such combinations in the worst case.
// Space complexity: O(k) for curr and the recursion stack, 
// not counting the space used for the output list combinations, 
// which can grow to O(k * C(n, k)) in the worst case.