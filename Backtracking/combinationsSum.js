const combinationSum = (candidates, target) => {
  const backtrack = (currCombo, currSum, start) => {
    if (currSum === target) {
      combinations.push([...currCombo]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (currSum + num > target) {
        break;
      }
      currCombo.push(num);
      backtrack(currCombo, currSum + num, i);
      currCombo.pop();
    }
  }

  const combinations = [];
  candidates = candidates.toSorted((a, b) => a - b);
  backtrack([], 0, 0);
  return combinations;
}

// TIme Complexity: O(N^T/M) where N is the number of candidates,
// T is the target
// and M is the average length of a valid combination.
// Sorting the candidates takes O(N log N) time but is dominated.
// Space Complexity: O(T/M) where T is the target 
// and M is the average length of a valid combination