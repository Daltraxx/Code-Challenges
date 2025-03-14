const solution = (list) => {
    let rangeString = '';
    let left = 0;

    for (right = 1; right <= list.length; right++) {
        let [leftNum, rightNum, prevNum] = [list[left], list[right], list[right - 1]];
        if (rightNum - prevNum !== 1) {
            if (right - left >= 3) {
                rangeString.length ?  rangeString += `,${leftNum}-${prevNum}` : rangeString += `${leftNum}-${prevNum}`;
                left = right;
            } else {
                while (left < right) {
                    rangeString.length ? rangeString += `,${list[left]}` : rangeString += `${list[left]}`;
                    left++;
                }
            }
        }
    }

    return rangeString;
}


const list = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
console.log(solution(list));

// Different take that breaks off some pieces into helper functions
// const solution = (list) => {
//     const isValidRange = () => {
//         return right - left >= 3;
//     }

//     const addRange = () => {
//         rangeString.length ?  rangeString += `,${leftNum}-${prevNum}` : rangeString += `${leftNum}-${prevNum}`;
//         left = right;
//     }

//     const addIncrementally = () => {
//         while (left < right) {
//             rangeString.length ? rangeString += `,${list[left]}` : rangeString += `${list[left]}`;
//             left++;
//         }
//     }
    
//     let rangeString = '';
//     let left = 0, right;
//     let leftNum, rightNum, prevNum;

//     for (right = 1; right <= list.length; right++) {
//         [leftNum, rightNum, prevNum] = [list[left], list[right], list[right - 1]];
//         if (rightNum - prevNum !== 1) {
//             isValidRange() ? addRange() : addIncrementally();
//         }
//     }

//     return rangeString;
// }