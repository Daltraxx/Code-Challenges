const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let unitsLoaded = 0;
  for (let [boxes, unitsPerBox] of boxTypes) {
    const loadableBoxes = Math.min(truckSize, boxes);
    unitsLoaded += loadableBoxes * unitsPerBox;
    truckSize -= loadableBoxes;
    if (truckSize === 0) break;
  }

  return unitsLoaded;
}

// Time complexity: O(n log n) due to sorting
// Space complexity: O(1) if we ignore the input array, 
// otherwise O(n) due to sorting