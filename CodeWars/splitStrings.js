function solution(str) {
    const strArr = [];
    for (let i = 0; i < str.length; i += 2) {
        str[i + 1] ? strArr.push(str[i] + str[i + 1]) : strArr.push(str[i] + '_');
    }

    return strArr;
}

const str = 'abc';
console.log(solution(str));