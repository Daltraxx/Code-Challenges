const climbStairsBacktracking = (n) => {
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
console.log(climbStairsBacktracking(n));

// TOP-DOWN
const climbStairs = (n) => {
  const getWaysToReachStep = (step) => {
    if (step === 2) {
      return 2;
    } else if (step == 1) {
      return 1;
    }

    return 2 + getWaysToReachStep(n - 2);
  }

  return getWaysToReachStep(n);
}

console.log(climbStairs(n));