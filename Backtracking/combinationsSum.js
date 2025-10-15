const combinationSum = (candidates, target) => {
  let combinations = [];
  const backtrack = (currCombo, currSum, i) => {
    if (currSum === target) {
      combinations.push(...currCombo);
      return;
    }

    if (currSum > target) return;

    for (i; i < candidates.length; i++) {
      const num = candidates[i];
      currCombo.push(num);
      currSum += num;
      backtrack(currCombo, currSum, i);
      currCombo.pop();
      currSum -= num;

    }
  }

  backtrack([], 0, 0);
  return combinations;
}

const candidates = [2, 3, 6, 7],
  target = 7;

console.log(combinationSum(candidates, target));