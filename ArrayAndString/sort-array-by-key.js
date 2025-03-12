//Write a function that takes an array of objects and a key with a date value, and returns a new array sorted based on the values of that key in ascending order.

const sortByKey = (arr, key) => {
    if (typeof arr[0][key] === 'string') {
        return arr.sort((a, b) => a[key].localeCompare(b.name));
    };
    
    return arr.sort((a, b) => a[key] - b[key]); 
}

const arr = [
    { name: 'Geeks', date: new Date('2022-03-15'), number: 5 },
    { name: 'Abc', date: new Date('2022-03-12'), number: 3 },
    { name: 'GFG', date: new Date('2022-03-20'), number: 7 },
    { name: 'G4G', date: new Date('2021-03-20'), number: 1 }
];

sortByKey(arr, 'number');
console.log(arr);

//O(n*log(n))
/*
The code uses the sort() method which has an average time complexity of O(n log n) for arrays of length n. 
Therefore, the overall time complexity of the sortByKey function is O(n log n).
*/