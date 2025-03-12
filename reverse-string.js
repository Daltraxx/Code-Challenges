const reverseStringMethod1 = (stringValue) => {
    if (typeof stringValue !== 'string') {
        return 'Please enter a string value!';
    }

    let reversedString = '';
    for (let i = stringValue.length - 1; i >= 0; i--) {
        reversedString += stringValue[i];
    };
    
    return reversedString;
}

const reverseStringMethod2 = (stringValue) => {

    const reverseString = stringValue.split('').reverse().join('');

    return reverseString;
}

console.log(reverseStringMethod1('pancakes'));

console.log(reverseStringMethod2('Mississippi'));

//both have O(n) linear time complexity