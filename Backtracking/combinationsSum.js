const combinationSum = (candidates, target) => {
  let combinations = [];
  const backtrack = (currCombo, currSum, i) => {
    if (currSum === target) {
      combinations.push([...currCombo]);
      return;
    }

    for (i; i < candidates.length; i++) {
      const num = candidates[i];
      if (currSum + num <= target) {
        currCombo.push(num);
        backtrack(currCombo, currSum + num, i);
        currCombo.pop();
      }
    }
  }

  backtrack([], 0, 0);
  return combinations;
}

const candidates = [2, 3, 6, 7],
  target = 7;

console.log(combinationSum(candidates, target));