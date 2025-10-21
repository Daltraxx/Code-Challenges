const combinationSum3 = (k, n) => {
  const combinations = [];
  const largestPossibleNum = n < 10 ? n : 9;

  const backtrack = (currCombo, currSum, i) => {
    if (currCombo.length === k) {
      if (currSum === n) combinations.push([...currCombo]);
      return;
    }

    for (i; i <= largestPossibleNum; i++) {
      const newSum = currSum + i;
      if (newSum <= n) {
        currCombo.push(i);
        backtrack(currCombo, newSum, i + 1);
        currCombo.pop();
      } else {
        return;
      }
    }
  };

  backtrack([], 0, 1);
  return combinations;
};

// Time O(K×C(9,K))
// Space O(K)

const k = 1,
  n = 100;

console.log(combinationSum3(k, n));
