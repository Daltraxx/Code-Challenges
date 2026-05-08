const combinationSum = (candidates, target) => {
  const backtrack = (currCombo, currSum, start) => {
    if (currSum === target) {
      combinations.push([...currCombo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (currSum + num > target) {
        break;
      }
      currCombo.push(num);
      backtrack(currCombo, currSum + num, i);
      currCombo.pop();
    }
  };

  const combinations = [];
  candidates = candidates.toSorted((a, b) => a - b);
  backtrack([], 0, 0);
  return combinations;
};

// Time complexity: O(N^(T/M + 1)) where N is the number of candidates,
// T is the target,
// and M is the minimum value in candidates.
// This is because in the worst case, we can use the smallest candidate T/M times,
// and for each of those times we have N choices.
// For interview purposes, saying “exponential backtracking with pruning” is usually sufficient.
// Space complexity: O(T/M ) for the recursion stack and the current combination list,
// not counting the output list which can grow exponentially in size.
// The sorted array takes O(N) space, but it is not the dominant factor in space complexity.
