/*Given an array of integers arr, 
return true if the number of occurrences of each value in the array is unique 
or false otherwise.
Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000*/

const uniqueOccurences = (arr) => {
    //build hashmap of nums in arr and their frequencies
    let occurrencesMap = new Map();
    for (let num of arr) {
        if (occurrencesMap.has(num)) {
            occurrencesMap.set(num, occurrencesMap.get(num) + 1);
        } else {
            occurrencesMap.set(num, 1);
        }
    }

    //loop through values of hashmap and add to set. If already exists in set, return false
    let occurrenceValues = new Set();
    let valueIterator = occurrencesMap.values();
    let currentValue = valueIterator.next().value;
    while (currentValue !== undefined) {
        if (occurrenceValues.has(currentValue)) return false;
        occurrenceValues.add(currentValue);
        currentValue = valueIterator.next().value;
        
    }

    return true;
}

//O(n)
/*The code snippet has a linear time complexity of O(n) where n is the number of elements in the input array 'arr'. 
The code iterates through each element in the array to build a hashmap of frequencies, 
and then iterates through the values of the hashmap to check for unique occurrences. 
Both iterations contribute to the overall linear time complexity.*/

const uniqueOccurencesCountingSort = (arr) => {
    //constant to make elements non-negative
    const k = 1000;

    //store frequency of elements in array hashmap. Size derived from problem constraint: -1000 <= arr[i] <= 1000
    const frequencies = new Array(2 * k + 1).fill(0);
    for (let num of arr) {
        frequencies[num + k]++;
    }

    //sort frequencies, then check adjacent numbers to see if any match, and return false if so
    frequencies.sort((a, b) => b - a);
    for (let i = 0; i < frequencies.length; i++) {
        //if i is 0, no need to loop anymore
        if (frequencies[i] === 0) return true;
        if (frequencies[i] === frequencies[i + 1]) return false;
    }

    return true;
}

/*Time complexity: O(N+KlogK).
We first iterate over the array arr to store the frequency in the array freq. 
This takes O(N) time. 
Then we sort the array freq that has a size of 2K = 2000. 
Hence it takes O(2Klog2K) time that can be simplified to O(KlogK). 
In the end, we iterate over the array freq to check duplicate values, 
and this takes O(2K) time. 
Therefore the total time complexity is equal to O(N+KlogK).*/

const uniqueOccurencesLeet = (arr) => {
    //build hashmap of nums in arr and their frequencies
    let occurrencesMap = new Map();
    for (let num of arr) {
        if (occurrencesMap.has(num)) {
            occurrencesMap.set(num, occurrencesMap.get(num) + 1);
        } else {
            occurrencesMap.set(num, 1);
        }
    }

    //add frequencies to set
    const frequencies = new Set(occurrencesMap.values());

    //if number of frequency values equals number of unique elements, all frequencies are unique
    return frequencies.size === occurrencesMap.size;
}

const arr = [1,2];

console.log(uniqueOccurencesLeet(arr));