//How Do You Print the First Non-Repeated Character in a String?
//misunderstood the question on this one

const printFirstNonRepeatedCharacter = (inputString) => {
    let character = '';
    let repeatedCharacterArray = [];

    //make code more efficient by not running nested for loop if character has been identified as repeating earlier
    for (let i = 0; i < inputString.length; i++) {
        if (repeatedCharacterArray.includes(inputString[i])) {
            continue;
        }

        for (let j = i + 1; j < inputString.length; j++) {
            if (inputString[i] === inputString[j]) {
                repeatedCharacterArray.push(inputString[i]);
                break;
            } else if (j === inputString.length - 1 && repeatedCharacterArray.includes(inputString[i])) {
                break;
            } else if  (j === inputString.length - 1) {
                character = inputString[i];
                return character;
            }
        }
    }
    return 'All characters are repeated.';
}


console.log(printFirstNonRepeatedCharacter('bhfuadibngfoajhgioa'));

// O(n^2)
/*	The code contains nested loops where the outer loop iterates through each character in the input string 
and the inner loop iterates through the remaining characters to check for repetitions. 
This results in a worst-case scenario where each character is compared with all other characters, 
leading to a quadratic time complexity of O(n^2).*/