function binaryArrayToNumber(arr) {
    const binaryStr = arr.join('');
    return parseInt(binaryStr, 2);
}

const arr = [0, 1, 0, 1];
console.log(binaryArrayToNumber(arr));