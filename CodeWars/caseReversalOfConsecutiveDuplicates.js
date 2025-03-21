function reverseCase(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char === string[i - 1] || char === string[i + 1]) {
            char === char.toUpperCase() ? newStr += char.toLowerCase() : newStr += char.toUpperCase();
        } else {
            newStr += char;
        }
    }

    return newStr;
}

const string = "shhh";
console.log(reverseCase(string));