// const findUnique = (numbers) => {
//     let result = 0;
//     for (let num of numbers) {
//         result ^= num; // XOR operation
//     }
//     return result;
// }

const findUnique = (numbers) => {
    let foundNums = new Set();
    for (let num of numbers) {
        foundNums.has(num) ? foundNums.delete(num) : foundNums.add(num);
    }
    return foundNums.values().next().value;
}

const numbers = [ 3, 5, 5, 4, 4, 3, 2, 2, 9 ];
console.log(findUnique(numbers));
