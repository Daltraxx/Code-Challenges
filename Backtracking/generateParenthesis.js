const generateParenthesis = (n) => {
  const combinations = [];
  const comboLength = 2 * n;

  const backtrack = (curr, leftCount, rightCount) => {
    if (curr.length === comboLength) {
      combinations.push(curr);
      return;
    }

    if (leftCount < n)
      backtrack(curr + "(", leftCount + 1, rightCount);
    if (leftCount > rightCount)
      backtrack(curr + ")", leftCount, rightCount + 1);
  };

  backtrack("(", 1, 0);
  return combinations;
};

const n = 1;
console.log(generateParenthesis(n));
