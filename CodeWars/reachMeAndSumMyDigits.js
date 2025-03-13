function getSumOfDigits(number) {
    const numStr = number.toString();
    let sum = 0;
    for (let char of numStr) sum += Number(char);
    return sum;
}


function sumDigNthTerm(initVal, patternL, nthTerm) {
    const patternSum = patternL.reduce((acc, curVal) => acc + curVal, 0);
    const patternLength = patternL.length;
    const patternCycles = Math.floor((nthTerm - 1) / patternLength);
    const leftOver = nthTerm - (patternCycles * patternLength + 1);

    let nthSum = initVal + (patternCycles * patternSum);

    for (let i = 0; i < leftOver; i++) {
        nthSum += patternL[i];
    }

    //console.log(nthSum);
    return getSumOfDigits(nthSum);
}

const initVal = 10, patternL = [2, 1, 3, 2], nthTerm = 4;
console.log(sumDigNthTerm(initVal, patternL, nthTerm));

//console.log(getSumOfDigits(306));