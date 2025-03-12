// The Sum of a Range===================
const range = (start, end) => {
    const nums = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) nums.push(i);
    } else {
        for (let i = end; i <= start; i++) nums.push(i);
    }
    return nums;
}

const sum = (nums) => {
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
}

const nums = range(10, 1);
const sumOfNums = sum(nums);

//console.log(sumOfNums);

//Reversing an Array==================
const reverseArray = (arr) => {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

let myArray = ["A", "B", "C"];
//console.log(reverseArray(myArray));
// → ["C", "B", "A"];
//console.log(myArray);
// → ["A", "B", "C"];

const reverseArrayInPlace = (arr) => {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
//console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//A List============================

const arrayToList = (arr) => {
    const n = arr.length;
    const list = {};
    let current = list;
    for (let i = 0; i < n; i++) {
        current.value = arr[i];
        current.rest = i !== n - 1 ? {} : null;
        current = current.rest;
    }

    return list;
}

const listToArray = (list) => {
    const arr = [];
    let current = list;
    while (current) {
        arr.push(current.value);
        current = current.rest;
    }

    return arr;
}

const prepend = (value, list) => {
    const newList = {};
    newList.value = value;
    newList.rest = list;

    return newList;
}

const nth = (list, index) => {
    if (!list) {
        return undefined;
    } else if (index === 0) {
        return list.value;
    }

    return nth(list.rest, --index)
}

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Deep Comparison------------------

const arrayEquality = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const n = arr1.length;

    for (let i = 0; i < n; i++) {
        if (!deepEqual(arr1[i], arr2[i])) return false;
    }

    return true;
}

const deepEqual = (val1, val2) => {
    if (Array.isArray(val1) && Array.isArray(val2)) {
        return arrayEquality(val1, val2);
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
        return objectEquality(val1, val2);
    } else {
        return val1 === val2;
    }
}

const objectEquality = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key in obj1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        if (Array.isArray(val1) && Array.isArray(val2)) {
        //if both arrays
            if (!arrayEquality(val1, val2)) {
                return false;
            }
        } else if (typeof val1 === 'object' && typeof val2 === 'object') {
        //if both objects
            if (!objectEquality(val1, val2)) {
                return false;
            }
        } else {
            if (val1 !== val2) {
                return false;
            }
        }
    }

    return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true