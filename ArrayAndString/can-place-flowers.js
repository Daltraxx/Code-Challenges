/*You have a long flowerbed in which some of the plots are planted, and some are not. 
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.*/

const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        //check if current or two adjacent spots contain a 1. If not, "plant" a flower there and decrement n
        if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            
            flowerbed[i] = 1;
            n--;
        }
    }

    //after placing all possible flowers, if n is still greater than 0, return false
    return n === 0;
}

//O(n)
/*The code snippet iterates through the flowerbed array once, 
checking each spot and potentially planting a flower. 
The time complexity is therefore O(n), 
where n is the length of the flowerbed array.*/

const testArr = [1,0,0,0,1];

console.log(canPlaceFlowers(testArr, 1));