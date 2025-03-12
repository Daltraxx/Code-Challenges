function findOdd(A) {
    let numCounts = new Map();
    for (let num of A) {
        numCounts.set(num, numCounts.get(num) + 1 || 1);
    }

    for (let [num, count] of numCounts) {
        if (count % 2 !== 0) return num;
    }

    return null;
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));