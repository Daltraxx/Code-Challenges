const numsSameConsecDiff = (n, k) => {
  const validIntegers = [];
  const backtrack = (curr, i) => {
    if (curr.length === n) {
      validIntegers.push(Number(curr));
      return;
    }

    const lastDigit = Number(curr.at(-1));
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

const n = 2,
  k = 1;

console.log(numsSameConsecDiff(n, k));