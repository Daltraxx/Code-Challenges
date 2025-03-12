/*Given an array of integers arr, find the sum of min(b), 
where b ranges over every (contiguous) subarray of arr. 
Since the answer may be large, 
return the answer modulo 10^9 + 7.*/

const sumSubarrayMins = (arr) => {
    const MOD = 1000000007;
    const stack = []; //monotonic increasing stack (storing indices)
    let sumOfMinimums = 0;

    //while less than OR EQUAL because using n to indicate end of array...
    //and once at end, everything left in stack can be popped and used
    for (let i = 0; i <= arr.length; i++) {
        while (stack.length && (i === arr.length || arr[i] <= arr[stack.at(-1)])) {
            //"<=" important because ensures no contribution is counted twice.
            //rightBound takes equal or smaller elements into account
            //while leftBound takes only strictly smaller elements into account
            const mid = stack.pop();
            const leftBound = !stack.length ? -1 : stack.at(-1);
            const rightBound = i;

            // count of subarrays where mid is the minimum element
            const count = (mid - leftBound) * (rightBound - mid) % MOD;

            sumOfMinimums += (count * arr[mid]) % MOD;
            sumOfMinimums %= MOD;
        }
        stack.push(i);
    }

    return sumOfMinimums;
}

const arr = [3,4,2,1];
console.log(sumSubarrayMins(arr));