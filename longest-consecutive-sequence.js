//Can you write a one-liner in JavaScript to find the longest consecutive sequence of a specific element in an array?

const longestConsecutiveSequence = (arr) => {
    let longestSequence = '';
    let currentSequence = '';
    for (let i = 0; i  < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1 || i === 0) {
            currentSequence += arr[i].toString();
            currentSequence.length > longestSequence.length ? longestSequence = currentSequence : null;
        } else {
            currentSequence = arr[i].toString();
        }
    }

    return longestSequence;
}

//O(n)
/*The code iterates through the input array 'arr' once, 
so the time complexity is linear, 
O(n), where n is the number of elements in the array.*/


const testArr = [1, 2, 3, 7, 8, 9, 4, 5, 6];
console.log(longestConsecutiveSequence(testArr, 3));