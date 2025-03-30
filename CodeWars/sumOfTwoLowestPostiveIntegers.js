function sumTwoSmallestNumbers(numbers) {  
    const twoSmallest = [Infinity, Infinity];
    numbers.forEach((num) => {
        if (num < twoSmallest[0]) {
            twoSmallest[1] = twoSmallest[0];
            twoSmallest[0] = num;
        } else if (num < twoSmallest[1]) {
            twoSmallest[1] = num;
        }
    })

    return twoSmallest[0] + twoSmallest[1];
}