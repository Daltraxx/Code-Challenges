const maximumUnits = (boxTypes, truckSize) => {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let unitsLoaded = 0;
  for (let [boxes, unitsPerBox] of boxTypes) {
    const loadableBoxes = Math.min(truckSize, boxes);
    unitsLoaded += loadableBoxes * unitsPerBox;
    truckSize -= loadableBoxes;
    if (truckSize === 0) break;
  }

  return unitsLoaded;
}

// Time complexity O(nlogn)
// Space O(1) since sorted in place

const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;

console.log(maximumUnits(boxTypes, truckSize));