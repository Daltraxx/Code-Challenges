const combinationSum3 = (k, n) => {
  const backtrack = (currCombo, currSum, startNum) => {
    if (currCombo.length === k) {
      if (currSum === n) combinations.push([...currCombo]);
      return;
    }

    for (let num = startNum; num <= largestPossibleNum; num++) {
      const newSum = currSum + num;
      if (newSum <= n) {
        currCombo.push(num);
        backtrack(currCombo, newSum, num + 1);
        currCombo.pop();
      } else {
        return;
      }
    }
  };

  const largestPossibleNum = Math.min(9, n - k + 1);
  const combinations = [];
  backtrack([], 0, 1);
  return combinations;
};

// Time complexity: O(k * C(9, k)) where C(9, k)
// is the number of combinations of 9 numbers taken k at a time.
// Space complexity: O(k) for the recursion stack
// and O(C(9, k)) for storing the combinations.
