const letterCombinations = (digits) => {
  const n = digits.length;
  const numToLetterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const backtrack = (curr, i) => {
    if (i === n) {
      combinations.push(curr.join(""));
      return;
    }

    const num = digits[i];

    const letters = numToLetterMap[num];
    for (const letter of letters) {
      curr.push(letter);
      backtrack(curr, i + 1);
      curr.pop();
    }
  };

  if (n === 0) return [];
  const combinations = [];
  backtrack([], 0);
  return combinations;
};

// Time complexity: O(3^n * 4^m)
// where n is the number of digits that map to 3 letters (2, 3, 4, 5, 6, 8)
// and m is the number of digits that map to 4 letters (7, 9).
// This is because each digit can generate either 3 or 4 combinations.
// Space complexity: O(n) for the recursion stack and the current combination list,
// not counting the output list which can grow exponentially in size.
