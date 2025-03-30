const positiveSum = (arr) => {
    return arr.reduce((sumOfPositives, currentNum) => currentNum > 0 ? sumOfPositives + currentNum : sumOfPositives, 0);
}