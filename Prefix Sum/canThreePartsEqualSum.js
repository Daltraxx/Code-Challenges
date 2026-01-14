const canThreePartsEqualSum = (arr) => {
  const totalSum = arr.reduce((acc, curr) => acc + curr);
  if (totalSum % 3 !== 0) return false;
  const target = totalSum / 3;
  let currSum = 0;
  let partitions = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum === target) {
      partitions++;
      currSum = 0;
    }
  }
  // Edge cases like an array full of zeros can create more than 3 partitions even after verifying divisible by 3
  return partitions > 2;
}

const arr = [1, -1, 1, -1];
console.log(canThreePartsEqualSum(arr));