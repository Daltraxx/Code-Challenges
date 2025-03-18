function decodeHiddenData(encodedMessage) {
    let decodedMessage = '';
    for (let char of encodedMessage) {
        const charCodePoint = char.codePointAt(0);
        if (charCodePoint >= 91760) decodedMessage += String.fromCodePoint(charCodePoint - 917760);
    }

    return decodedMessage;
}

function encodeHiddenData(visibleText, hiddenData) {
    let hiddenChars = '';
    for (let char of hiddenData) {
        let newCharCodePoint = char.codePointAt(0) + 917760;
        let newChar = String.fromCodePoint(newCharCodePoint);
        hiddenChars += newChar;
    }
    let encodedMessage = visibleText + hiddenChars;
    return encodedMessage;
}

let secretMessage = encodeHiddenData('Hi there!', 'The krabby patty secret formula is...');
console.log(secretMessage);
console.log(decodeHiddenData(secretMessage));

// let MValue = 'M'.codePointAt(0);
// console.log((String.fromCodePoint(MValue + 917760)).codePointAt(0));