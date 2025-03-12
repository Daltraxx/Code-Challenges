//Durstenfield shuffle algorithm to randomly sort and array

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
}

//O(n)
/*The function iterates through the array once, 
performing constant time operations for each element. 
The loop runs n-1 times, where n is the length of the array, 
resulting in a time complexity of O(n).*/

const testArr = [1, 2, 3, 4, 5];
shuffle(testArr);
console.log(testArr);