const canThreePartsEqualSum = (arr) => {
  const totalSum = arr.reduce((acc, curr) => acc + curr);
  if (totalSum % 3 !== 0) return false;
  const target = totalSum / 3;
  let currSum = 0;
  let partitions = 0;
  for (let num of arr) {
    currSum += num;
    if (currSum === target) {
      partitions++;
      currSum = 0;
      if (partitions === 3) return true;
    }
  }
  // If get to three the remaining elements must be zeros
  return partitions > 2;
};

// Linear time complexity, constant space

const arr = [1, -1, 1, -1];
console.log(canThreePartsEqualSum(arr));
