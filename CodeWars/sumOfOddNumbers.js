// function rowSumOddNumbers(n) {
//     let endNum = 1;
//     let toNext = 4;
//     for (let row = 1; row < n; row++) {
//         endNum += toNext;
//         toNext += 2;
//     }

//     let sum = 0;
//     while (n > 0) {
//         sum += endNum;
//         endNum -= 2;
//         n--;
//     }

//     return sum;
// }

// OR! 

function rowSumOddNumbers(n) {
	return n**3;
}

const n = 42;
console.log(rowSumOddNumbers(n));