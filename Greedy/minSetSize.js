const minSetSize = (arr) => {
  const frequencies = new Map();
  for (let num of arr) {
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  const sortedKeys = [...frequencies.keys()].sort(
    (a, b) => frequencies.get(b) - frequencies.get(a)
  );

  let arrSize = arr.length;
  const arrSizeHalved = arrSize / 2;
  let setSize = 0;

  for (let key of sortedKeys) {
    const frequency = frequencies.get(key);
    arrSize -= frequency;
    setSize++;
    if (arrSize <= arrSizeHalved) break;
  }

  return setSize;
};

const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
console.log(minSetSize(arr));