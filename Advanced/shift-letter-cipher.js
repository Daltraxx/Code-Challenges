/*A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. 
For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.*/

//encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
//decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
/*CODE BELOW*/

//create dedicated function to shifting letters
const shiftLetter = (letter, shiftValue, shiftDirection) => {
    let charCode = letter.charCodeAt(0);

    //for capital letters
    if (charCode >= 65 && charCode <= 90) {
        if (shiftDirection === 'up') {
            if (charCode + shiftValue > 90) {
                //if shift takes character higher than Z, loop back to A
                let diff = (90 - charCode - shiftValue) * -1;
                return String.fromCharCode(64 + diff);
            } else {
                return String.fromCharCode(charCode + shiftValue);
            }
        } else {
            //for shifting down
            if (charCode - shiftValue < 65) {
                //if shift takes character lower than A, loop back to Z
                let diff = 65 - charCode + shiftValue;
                return String.fromCharCode(91 - diff);
            } else {
                return String.fromCharCode(charCode - shiftValue);
            }
        }
    //for lowercase letters
    } else if (charCode >= 97 && charCode <= 122) {
        if (shiftDirection === 'up') {
            if (charCode + shiftValue > 122) {
                let diff = (122 - charCode - shiftValue) * -1;
                return String.fromCharCode(96 + diff);
            } else {
                return String.fromCharCode(charCode + shiftValue);
            }
        } else {
            //for shifting down
            if (charCode - shiftValue < 97) {
                let diff = 97 - charCode + shiftValue;
                return String.fromCharCode(123 - diff);
            } else {
                return String.fromCharCode(charCode - shiftValue)
            }
        }
    //in cases where character is not english letter, do not manipulate
    } else {
        return String.fromCharCode(charCode);
    }
}

const encrypt = (str, shiftValue) => {
    let upperCaseStr = str.toUpperCase();
    let encryptedStr = '';

    for (let i = 0; i < str.length; i++) {
        encryptedStr += shiftLetter(upperCaseStr[i], shiftValue, 'up');
    }

    return encryptedStr;
}

const decrypt = (str, shiftValue) => {
    let lowerCaseStr = str.toLowerCase();
    let decryptedStr= '';

    for (let i = 0; i < str.length; i++) {
       decryptedStr += shiftLetter(lowerCaseStr[i], shiftValue, 'down');
    }

    return decryptedStr;
}

console.log(encrypt('abcdefghijklmnopqrstuvwxyz', 5));
console.log(decrypt('FGHIJKLMNOPQRSTUVWXYZABCDE', 5));

