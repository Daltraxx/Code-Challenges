const numsSameConsecDiff = (n, k) => {
  const validIntegers = [];
  const backtrack = (curr) => {
    if (curr.length === n) {
      validIntegers.push(Number(curr));
      return;
    }

    const lastDigit = Number(curr.at(-1));

    if (k === 0) {
      backtrack(curr + String(lastDigit));
      return;
    }

    if (lastDigit - k >= 0) {
      const newDigit = String(lastDigit - k);
      backtrack(curr + newDigit);
    }

    if (lastDigit + k < 10) {
      const newDigit = String(lastDigit + k);
      backtrack(curr + newDigit);
    }
  };

  for (let int = 1; int < 10; int++) {
    backtrack(String(int));
  }

  return validIntegers;
};

// Time O(2^n)
// Space O(2^n)

const n = 2,
  k = 0;

console.log(numsSameConsecDiff(n, k));