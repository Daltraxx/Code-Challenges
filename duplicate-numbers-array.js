//How Do You Find Duplicate Numbers in an Array With Multiple Duplicates?
const findDuplicates = (array) => {
    const numbersDictionary = {};

    array.forEach((value) => {
        if (numbersDictionary[value]) {
            numbersDictionary[value]++;
        } else {
            numbersDictionary[value] = 1;
        }
    })

    const duplicates = [];

    for (let num in numbersDictionary) {
        
        if (numbersDictionary[num] > 1)
            duplicates.push(num);
    }

    return duplicates;
}

console.log(findDuplicates([5, 2, 1, 5, 8, 5, 1, 7, 7, 0]));

/*	O(n)
The code iterates through the input array once to create a dictionary of numbers and their frequencies, then iterates through the dictionary to find duplicates. 
Both iterations have a linear time complexity, resulting in an overall time complexity of O(n).*/