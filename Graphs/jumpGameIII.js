/*Given an array of non-negative integers arr, 
you are initially positioned at start index of the array. 
When you are at index i, you can jump to i + arr[i] or i - arr[i], 
check if you can reach any index with value 0.

Notice that you can not jump outside of the array at any time.*/

const canReach = (arr, start) => {
    const canFindZero = (index) => {
        const val = arr[index];

        if (val === 0) {
            return true;
        }

        let leftSearch = false, rightSearch = false;
        const leftJumpIndex = index - val, rightJumpIndex = index + val;

        if (leftJumpIndex >= 0 && !seen[leftJumpIndex]) {
            seen[leftJumpIndex] = true;
            leftSearch = canFindZero(leftJumpIndex);
        }

        if (rightJumpIndex < arr.length && !seen[rightJumpIndex]) {
            seen[rightJumpIndex] = true;
            rightSearch = canFindZero(index + val);
        }

        return leftSearch || rightSearch;
    }

    const seen = new Array(arr.length).fill(false);
    return canFindZero(start);
}