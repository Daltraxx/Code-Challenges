const maximizeSweetness = (sweetness, k) => {
  const numberOfPeople = k + 1;

  const check = (minSweetness) => {
    let currentSweetness = 0;
    let slices = 0;
    for (let chunk of sweetness) {
      currentSweetness += chunk;
      if (currentSweetness >= minSweetness) {
        slices++;
        if (slices === numberOfPeople) return true;
        currentSweetness = 0;
      }
    }

    return false;
  }

  let left = Infinity, right = 0;
  for (let chunk of sweetness) {
    left = Math.min(chunk, left);
    right += chunk;
  }

  right = Math.floor(right / numberOfPeople);

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (check(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

const sweetness = [1, 2, 2, 1, 2, 2, 1, 2, 2],
  k = 2;

console.log(maximizeSweetness(sweetness, k));