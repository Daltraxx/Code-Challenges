const partitionArray = (nums, k) => {
    const numsSorted = nums.toSorted((a, b) => a - b);
    let minSubsequences = 1;
    let min = numsSorted[0];
    for (let i = 1; i < numsSorted.length; i++) {
        let max = numsSorted[i];
        if (max - min > k) {
            min = numsSorted[i];
            minSubsequences++;
        }
    }

    return minSubsequences;
}