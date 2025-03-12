/*Complete the solution so that the function will break up camel casing, using a space between words.*/

function solution(string) {
    const regexCapitalizedWords = /(?=[A-Z])/;
    return string.split(regexCapitalizedWords).join(' ');
}

const string = 'camelCasing';
console.log(solution(string));