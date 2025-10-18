const generateParenthesis = (n) => {
  const combinations = [];
  const comboLength = 2 * n;
  const backtrack = (curr, leftCount, rightCount) => {
    if (curr.length === comboLength && leftCount === 0) {
      combinations.push(curr);
      return;
    }

    if (curr.length < comboLength) {
      if (leftCount < n) backtrack(curr + "(", leftCount + 1);
      if (leftCount > rightCount) backtrack(curr + ')', leftCount - 1);
    }
    
  }

  backtrack('(', 1, 0);
  return combinations;
}

const n = 1;
console.log(generateParenthesis(n));