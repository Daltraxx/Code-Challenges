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
    let combos = [];
    for (let i = observed.length - 1; i >= 0; i--) {
        let prependedCombos = [];
        const digit = observed[i];
        if (!combos.length) {
            prependedCombos = adjacentDigits.get(digit);
        }
        
        for (let combo of combos) {
            for (let possibleDigit of adjacentDigits.get(digit)) {
                prependedCombos.push(possibleDigit + combo);
            }
        }
        
        combos = prependedCombos;
    }

    return combos;
} 


// function getPINs(observed) {
//     if (!observed) return [];

//     const combosToPrepend = getPINs(observed.slice(1));

//     if (!combosToPrepend.length) return adjacentDigits.get(observed);

//     const prependedCombos = [];

//     for (let comboSegment of combosToPrepend) {
//         for (let possibleDigit of adjacentDigits.get(observed[0])) {
//             prependedCombos.push(possibleDigit + comboSegment);
//         }
//     }

//     return prependedCombos;
// }

console.log(getPINs('1357')); 