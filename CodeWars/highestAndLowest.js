function highAndLow(numbers) {
    let high = -Infinity;
    let low = Infinity;
    for (let num of numbers.split(' ')) {
        num = Number(num);
        high = Math.max(num, high);
        low = Math.min(num, low);
    }

    return `${high} ${low}`;
}