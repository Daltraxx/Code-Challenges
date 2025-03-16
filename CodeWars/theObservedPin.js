const adjacentDigits = new Map();
    adjacentDigits.set('0', ['0', '8']);
    adjacentDigits.set('1', ['1', '2', '4']);
    adjacentDigits.set('2', ['2', '1', '5', '3']);
    adjacentDigits.set('3', ['3', '2', '6']);
    adjacentDigits.set('4', ['4', '1', '5', '7']);
    adjacentDigits.set('5', ['5', '2', '4', '6', '8']);
    adjacentDigits.set('6', ['6', '3', '5', '9']);
    adjacentDigits.set('7', ['7', '4', '8']);
    adjacentDigits.set('8', ['8', '5', '7', '9', '0']);
    adjacentDigits.set('9', ['9', '6', '8']);


function getPINs(observed) {
    if (!observed) return [];

    const combos = [];
    const digit = observed[0];
    const remainingDigits = observed.slice(1);
    const combosToAdd = getPINs(remainingDigits);

    if (!combosToAdd.length) return adjacentDigits.get(digit);

    for (let adjacentDigit of adjacentDigits.get(digit)) {
        for (let combo of combosToAdd) {
            combos.push(adjacentDigit + combo);
        }
    }

    return combos;
}

console.log(getPINs('12')); 