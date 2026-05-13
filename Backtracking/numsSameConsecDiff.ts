const numsSameConsecDiff = (n: number, k: number): number[] => {
  const backtrack = (curr: number, lastDigit: number, digitCount: number) => {
    if (digitCount === n) {
      ans.push(curr);
      return;
    }

    // Using a set to avoid duplicates when k is 0, 
    // as lastDigit + k and lastDigit - k would be the same.
    const newDigits = new Set([lastDigit + k, lastDigit - k]);
    for (const newDigit of newDigits) {
      if (newDigit >= 0 && newDigit < 10) {
        backtrack(curr * 10 + newDigit, newDigit, digitCount + 1)
      }
    }
  };

  const ans: number[] = [];
  for (let firstDigit = 1; firstDigit < 10; firstDigit++) {
    backtrack(firstDigit, firstDigit, 1);
  }

  return ans;
};

// Time complexity: O(2^n) in the worst case, 
// as each digit can lead to two possible next digits (lastDigit + k and lastDigit - k).
// Space complexity: O(n) for the recursion stack, 
// as the maximum depth of the recursion is n.