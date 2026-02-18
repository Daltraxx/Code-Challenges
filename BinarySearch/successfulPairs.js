const successfulPairs = (spells, potions, success) => {
  potions.sort((a, b) => a - b);
  const pairs = [];
  for (let spell of spells) {
    let left = 0, right = potions.length;
    const target = success / spell;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    pairs.push(potions.length - left);
  }

  return pairs;
}

// Time complexity O(mlogm+nlogm) or O((m+n)⋅logm)
// O(n) space complexity for pairs array

const spells = [5, 1, 3],
  potions = [1, 2, 3, 4, 5],
  success = 7;

console.log(successfulPairs(spells, potions, success));