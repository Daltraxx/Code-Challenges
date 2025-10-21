const combinationSUm3 = (k, n) => {
  const combinations = [];
  const backtrack = (curr, currSum, i) => {
    if (curr.length === k) {
      if (currSum === n) {
        combinations.push([...curr]);
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
    }
  }

  backtrack([], 0, n);
  return combinations;
}