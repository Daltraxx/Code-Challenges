const adjacentDigits = new Map();
    adjacentDigits.set('0', ['8']);
    adjacentDigits.set('1', ['2', '4']);
    adjacentDigits.set('2', ['1', '5', '3']);
    adjacentDigits.set('3', ['2', '6']);
    adjacentDigits.set('4', ['1', '5', '7']);
    adjacentDigits.set('5', ['2', '4', '6', '8']);
    adjacentDigits.set('6', ['3', '5', '9']);
    adjacentDigits.set('7', ['4', '8']);
    adjacentDigits.set('8', ['5', '7', '9', '0']);
    adjacentDigits.set('9', ['6', '8']);


function getPins(observed) {
    
}

console.log(getPins('1357')); 