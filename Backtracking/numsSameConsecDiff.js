const numsSameConsecDiff = (n, k) => {
  const validIntegers = [];
  const backtrack = (curr, i) => {
    if (curr.length === n) {
      validIntegers.push(Number(curr));
      return;
    }

    const lastDigit = Number(curr.at(-1));

    if (k === 0) {
      backtrack(curr + String(lastDigit), i + 1);
      return;
    }

    if (lastDigit - k >= 0) {
      const newDigit = String(lastDigit - k);
      backtrack(curr + newDigit, i + 1);
    }

    if (lastDigit + k < 10) {
      const newDigit = String(lastDigit + k);
      backtrack(curr + newDigit, i + 1);
    }
  };

  for (let int = 1; int < 10; int++) {
    backtrack(String(int), 1);
  }

  return validIntegers;
};

// Time O(2^n)
// Space O(2^n)

const n = 2,
  k = 0;

console.log(numsSameConsecDiff(n, k));