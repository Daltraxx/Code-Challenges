const vowelConsonantCounter = (stringValue) => {
    const regex = /[^a-zA-Z]/g;
    stringValue = stringValue.toLowerCase().replace(regex, '');
    console.log(stringValue);
    

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    let vowelCounter = 0;
    let consonantCounter = 0;

    for (let i = 0; i < stringValue.length; i++) {
        if (vowels.includes(stringValue[i])) {
            vowelCounter ++;
        } else {
            consonantCounter ++;
        }
    }

    return `Vowels: ${vowelCounter}\nConsonants: ${consonantCounter}`;
}

console.log(vowelConsonantCounter('Missis555sip/&*pi'));

//runtime of O(n)