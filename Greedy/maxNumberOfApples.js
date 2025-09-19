const maxNumberOfApples = (weight) => {
  const WEIGHT_LIMIT = 5000;
  const sortedAppleWeights = weight.sort((a, b) => a - b);
  let appleCount = 0;
  let currentWeight = 0;
  for (let appleWeight of sortedAppleWeights) {
    if (currentWeight + appleWeight > WEIGHT_LIMIT) return appleCount;
    currentWeight += appleWeight;
    appleCount++;
  }

  return appleCount;
}