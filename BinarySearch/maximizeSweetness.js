const maximizeSweetness = (sweetness, k) => {
  const check = (minSweetness) => {
    let currentSweetness = 0;
    let slices = 0;
    for (const chunk of sweetness) {
      currentSweetness += chunk;
      if (currentSweetness >= minSweetness) {
        slices++;
        currentSweetness = 0;
        if (slices === targetPieces) return true;
      }
    }

    return false;
  }

  const targetPieces = k + 1;
  let left = 1;
  let right = sweetness.reduce((acc, curr) => acc + curr, 0);

  right = Math.floor(right / targetPieces);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

// Time complexity: O(n log k) where n is the length of the sweetness array and
// k is the number of cuts
// and k is the sum of the sweetness values divided by the number of pieces.
// Space complexity: O(1).