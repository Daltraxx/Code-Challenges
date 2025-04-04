function arrayDiff(a, b) {
    const bNums = new Set(b);
    return a.filter(num => !bNums.has(num));
}

const a = [1, 2, 2, 2, 3], b = [2];
console.log(arrayDiff(a, b));