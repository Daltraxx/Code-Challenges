const maximumUnits = (boxTypes, truckSize) => {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let unitsLoaded = 0;
  for (let [boxes, unitsPerBox] of boxTypes) {
    if (truckSize === 0) return unitsLoaded;
    while (truckSize > 0 && boxes > 0) {
      unitsLoaded += unitsPerBox;
      boxes--;
      truckSize--;
    }
  }

  return unitsLoaded;
}

const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;

console.log(maximumUnits(boxTypes, truckSize));