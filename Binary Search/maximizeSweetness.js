const maximizeSweetness = (sweetness, k) => {
  const check = (minSweetness) => {
    let currentSweetness = 0;
    let slices = 0;
    for (let chunk of sweetness) {
      currentSweetness += chunk;
      if (currentSweetness >= minSweetness) {
        slices++;
        currentSweetness = 0;
      }
    }

    return slices >= k + 1;
  }

  let left = Infinity, right = 0;
  for (let chunk of sweetness) {
    left = Math.min(chunk, left);
    right += chunk;
  }

  right = Math.ceil(right / k);

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

const sweetness = [1, 2, 2, 1, 2, 2, 1, 2, 2],
  k = 2;

console.log(maximizeSweetness(sweetness, k));