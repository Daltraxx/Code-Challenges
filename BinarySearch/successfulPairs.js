const successfulPairs = (spells, potions, success) => {
  potions.sort((a, b) => a - b);
  const pairs = [];
  for (let spell of spells) {
    let left = 0
    let right = potions.length;
    const target = success / spell;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // After the binary search, left will be the index of the first potion
    // that is greater than or equal to the target.
    pairs.push(potions.length - left);
  }

  return pairs;
}

// Time complexity: O((m + n) log m) 
// where m is the number of elements in the potions array
// and n is the number of elements in the spells array.
// This is because we first sort the potions array,
// which takes O(m log m) time,
// and then for each spell, we perform a binary search on the sorted potions
// array, which takes O(log m) time.
// Since we do this for n spells,
// the total time complexity is O((m + n) log m).
// Space complexity: O(1) if we don't count the space used for the output array,
// or O(n) if we do count the output array.