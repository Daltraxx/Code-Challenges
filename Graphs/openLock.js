const openLock = (deadends, target) => {
  const seen = new Set(deadends);

  if (seen.has("0000")) {
    return -1;
  }

  seen.add("0000");

  let queue = ["0000"];
  let turns = 0;

  while (queue.length) {
    const nextQueue = [];
    for (let combination of queue) {
      if (combination === target) return turns;

      for (let i = 0; i < 4; i++) {
        const digit = parseInt(combination[i], 10);
        const moves = [1, -1];
        for (let change of moves) {
          // JavaScript modulo can yield negative results, so we add 10 to ensure it stays positive
          const newDigit = (digit + change + 10) % 10;
          const newCombination =
            combination.slice(0, i) + newDigit + combination.slice(i + 1);
          if (!seen.has(newCombination)) {
            seen.add(newCombination);
            nextQueue.push(newCombination);
          }
        }
      }
    }

    queue = nextQueue;
    turns++;
  }

  return -1;
};

// Time Complexity: O(10^4) - In the worst case, we may need to explore all
// possible combinations of the lock (from "0000" to "9999").
// Space Complexity: O(10^4) - We may need to store all possible combinations in
// the seen set and the queue in the worst case.
