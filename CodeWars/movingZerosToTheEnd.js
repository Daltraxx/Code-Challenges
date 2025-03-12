/*Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.*/

function moveZeros(arr) {
    //two pointer approach
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
    }

    return arr;
}

const arr = [1,2,0,1,0,1,0,3,0,1];


function alphanumeric(string){
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(string);
}

console.log(alphanumeric('s'));