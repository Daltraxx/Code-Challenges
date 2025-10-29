const climbStairs = (n) => {
  let ways = 0;
  const backtrack = (step) => {
    if (step === n) {
      ways++;
      return;
    } else if (step > n) {
      return;
    }

    backtrack(step + 1);
    backtrack(step + 2);
  }

  backtrack(0);
  return ways;
}

// Time O(2^n)
// Space O(n)

const n = 3;
console.log(climbStairs(n));