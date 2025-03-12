/*Given an integer array arr, 
count how many elements x there are, such that x + 1 is also in arr. 
If there are duplicates in arr, count them separately.*/

//hashmap approach
const countElements = (arr) => {
    const dict = new Map();
    for (let num of arr) {
        if (dict.has(num)) {
            dict.set(num, dict.get(num) + 1);
        } else {
            dict.set(num, 1)
        }
    }

    let count = 0;

    for (let entry of dict) {
        if (dict.has(entry[0] + 1)) {
            count += dict.get(entry[0]);
        }
    }

    return count;
}

//Linear time and space complexity

const countElementsHashSet = (arr) => {
    const set = new Set(arr);
    let count = 0;

    for (let num of arr) {
        if (set.has(num + 1)) count++;
    }

    return count;
}

const arr = [1,1,3,3,5,5,7,7];
console.log(countElementsHashSet(arr));