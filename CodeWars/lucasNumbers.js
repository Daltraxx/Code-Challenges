function lucasnum(n) {
    const lucasNums = new Map();
    lucasNums.set(0, 2);
    lucasNums.set(1, 1);

    const getLucasNum = (n) => {
        if (lucasNums.has(n)) return lucasNums.get(n);

        let lucasNum;
        if (n > 0) {
            lucasNum = getLucasNum(n - 1) + getLucasNum(n - 2);
            lucasNums.set(n, lucasNum);
            return lucasNum;
        } else {
            lucasNum = getLucasNum(n + 2) - getLucasNum(n + 1);
            lucasNums.set(n, lucasNum);
            return lucasNum;
        }
    }

    return getLucasNum(n);
}

// function lucasnum(n) {
//     if (n === 0) return 2;
//     if (n === 1) return 1;

//     const positiveLucasNums = () => {
//         const lucasNums = [2, 1];
//         while (lucasNums.length <= n) {
//             const currentN = lucasNums.length;
//             lucasNums.push(lucasNums[currentN - 1] + lucasNums[currentN - 2]);
//         }

//         return lucasNums.pop();
//     }

//     const negativeLucasNums = () => {
//         const lucasNums = [2, -1];
//         while (lucasNums.length <= 0 - n) {
//             const currentN = lucasNums.length;
//             lucasNums.push(lucasNums[currentN - 2] - lucasNums[currentN - 1]);
//         }

//         return lucasNums.pop();
//     }


//     return n > 0 ? positiveLucasNums() : negativeLucasNums();
// }
// O(n)
const n = -50;
console.log(lucasnum(n));