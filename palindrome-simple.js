const isPalindrome = (input) => {
    let comparisonString = "";
    if (typeof input === 'number') {
        input = input.toString();
    };
    input = input.toLowerCase();

    comparisonString = input.split('').reverse().join('');

    return comparisonString === input;
}

console.log(isPalindrome('Racecar'));

// runtime of O(n)