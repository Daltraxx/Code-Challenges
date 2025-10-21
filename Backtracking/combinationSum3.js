const combinationSum3 = (k, n) => {
  const combinations = [];
  const backtrack = (curr, currSum, i) => {
    if (curr.length === k) {
      if (currSum === n) combinations.push([...curr]);
      return;
    }

    for (i; i > 0; i--) {
      const newSum = currSum + i;
      if (newSum <= n) {
        curr.push(i);
        backtrack(curr, newSum, i - 1);
        curr.pop();
      }
    }
  };

  const largestPossibleNum = n < 10 ? n : 9;

  backtrack([], 0, largestPossibleNum);
  return combinations;
};

const k = 4,
  n = 1;

console.log(combinationSum3(k, n));
