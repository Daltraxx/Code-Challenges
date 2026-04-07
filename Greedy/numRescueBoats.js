const numRescueBoats = (people, limit) => {
  const peopleSorted = people.toSorted((a, b) => a - b);
  let boatsNeeded = 0;
  let left = 0;
  let right = peopleSorted.length - 1;
  while (left <= right) {
    if (peopleSorted[left] + peopleSorted[right] <= limit) left++;
    // We always take the heaviest person,
    // so we move the right pointer regardless of whether we can fit the lightest person with them or not.
    right--;
    boatsNeeded++;
  }
  return boatsNeeded;
};

// Time complexity: O(n log n) due to the sorting step,
// where n is the number of people.
// Space complexity: O(n) for the space used by the sorted array,
// could be O(1) if we sorted in place.
