function pendulum(values) {
    const sortedValues = values.toSorted((a, b) => a - b);
    const n = values.length;
    const pendulumArr = new Array(n);
    const middle = n % 2 === 0 ? Math.floor((n - 1) / 2) : Math.floor(n / 2);

    pendulumArr[middle] = sortedValues[0];

    let middleRight = middle + 1;
    let middleLeft = middle - 1;
    let directionRight = true;

    for (let i = 1; i < n; i++) {
        if (directionRight) {
            pendulumArr[middleRight] = sortedValues[i];
            middleRight++;
        } else {
            pendulumArr[middleLeft] = sortedValues[i]; 
            middleLeft--;
        }
        directionRight = !directionRight;
    }

    return pendulumArr;
}

const values = [11, -16, -18, 13, -11, -12, 3, 18];
console.log(pendulum(values));