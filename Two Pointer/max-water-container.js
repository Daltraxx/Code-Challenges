/*You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.*/

const maxArea = (height) => {
    const getArea = (leftIndex, rightIndex, arr) => {
        return Math.min(arr[leftIndex], arr[rightIndex]) * (rightIndex - leftIndex);
    }

    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let max = 0;

    while (leftPointer < rightPointer) {
        max = Math.max(max, getArea(leftPointer, rightPointer, height));
        
        height[leftPointer] <= height[rightPointer] ? leftPointer++ : rightPointer--;
    }

    return max;
}

//O(n)
/*The code uses a two-pointer approach to iterate through the height array once, 
resulting in a linear time complexity of O(n), 
where n is the number of elements in the height array.*/

let heights = [1,2,1];

console.log(maxArea(heights));