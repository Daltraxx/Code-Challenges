const combinationSum3 = (k, n) => {
  const combinations = [];
  const largestPossibleNum = n < 10 ? n : 9;

  const backtrack = (curr, currSum, i) => {
    if (curr.length === k) {
      if (currSum === n) combinations.push([...curr]);
      return;
    }

    for (i; i <= largestPossibleNum; i++) {
      const newSum = currSum + i;
      if (newSum <= n) {
        curr.push(i);
        backtrack(curr, newSum, i + 1);
        curr.pop();
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

const k = 3,
  n = 9;

console.log(combinationSum3(k, n));
