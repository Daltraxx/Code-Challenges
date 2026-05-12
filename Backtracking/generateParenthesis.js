const generateParenthesis = (n) => {
  const backtrack = (curr, leftCount, rightCount) => {
    if (leftCount === n && rightCount === n) {
      combinations.push(curr.join(""));
      return;
    }

    if (leftCount < n) {
      curr.push("(");
      backtrack(curr, leftCount + 1, rightCount);
      curr.pop();
    }
    if (rightCount < leftCount) {
      curr.push(")");
      backtrack(curr, leftCount, rightCount + 1);
      curr.pop();
    }
  };

  const combinations = [];
  backtrack(["("], 1, 0);
  return combinations;
};

// Time complexity: Can be approximated as O(2^n) 
// because we are generating all valid combinations of parentheses,
// and all possible combinations of parentheses 
// can be represented as a binary tree with 2^n nodes.
// Space complexity: O(n) because at most 
// we will have n opening parentheses in the current combination,
// which takes O(n) space.
