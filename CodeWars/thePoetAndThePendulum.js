function pendulum(values) {
    const sortedValues = values.toSorted((a, b) => a - b);
    const n = values.length;
    const result = new Array(n);
    let middle = n % 2 === 0 ? Math.floor((n - 1) / 2) : Math.floor(n / 2);
    

    return sortedValues;
}

const values = [10, 6, 5, 6, 8, 1, 5, 4];
console.log(pendulum(values));