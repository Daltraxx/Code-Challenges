//How to Retrieve Unique Elements With the Set Method

const removeDuplicates = (array) => {
    let noDuplicates = [...new Set(array)];
    return noDuplicates;
}


let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];

fruits = removeDuplicates(fruits);

console.log(fruits);

//O(n)
/*The code snippet uses the Set data structure to remove duplicates from the input array. 
The Set data structure has an average time complexity of O(1) for insertion and lookup operations. 
Therefore, iterating over the input array to create the Set and then creating a new array from the Set will have a time complexity of O(n), 
where n is the number of elements in the input array.*/