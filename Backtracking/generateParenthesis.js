const generateParenthesis = (n) => {
  const combinations = [];
  const comboLength = 2 * n;
  const backtrack = (curr, leftCount) => {
    if (curr.length === comboLength && leftCount === 0) {
      combinations.push(curr);
      return;
    }

    if (curr.length < comboLength) {
      backtrack(curr + '(', leftCount + 1);
      if (leftCount - 1 >= 0) backtrack(curr + ')', leftCount - 1);
    }
    
  }

  backtrack('(', 1);
  return combinations;
}

const n = 1;
console.log(generateParenthesis(n));