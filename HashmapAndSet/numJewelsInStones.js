const numJewelsInStones = (jewels, stones) => {
  const jewelsSet = new Set(jewels);
  let jewelCount = 0;
  for (const stone of stones) {
    if (jewelsSet.has(stone)) jewelCount++;
  }

  return jewelCount;
};

// Time complexity: O(j + s) where j is the length of the jewels string
// and s is the length of the stones string.
// Space complexity: O(j) for the set of jewels.
