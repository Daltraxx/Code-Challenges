//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums: number[]): number[] => {
    let positiveSide = 0;
    while (nums[positiveSide] < 0 && positiveSide < nums.length) {
        positiveSide++;
    }
    let negativeSide = positiveSide - 1;
    
    const squaredArr : number[] = [];
    
    while (negativeSide >= 0 && positiveSide < nums.length) {
        if (nums[negativeSide]**2 <= nums[positiveSide]**2) {
            squaredArr.push(nums[negativeSide]**2);
            negativeSide--;
        } else {
            squaredArr.push(nums[positiveSide]**2);
            positiveSide++;
        }
    }

    while (negativeSide >= 0) {
        squaredArr.push(nums[negativeSide]**2);
        negativeSide--;
    }

    while (positiveSide < nums.length) {
        squaredArr.push(nums[positiveSide]**2);
        positiveSide++;
    }

    return squaredArr;
};

//O(n)

const sortedSquaresLeet = (nums: number[]): number[] => {
    const squaredArr: number[] = [];
    let left = 0, right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            squaredArr[i] = nums[left]**2;
            left++;
        } else {
            squaredArr[i] = nums[right]**2;
            right--;
        }
    }

    return squaredArr;
}

/*Time Complexity: O(N), where N is the length of A.

Space Complexity: O(N) if you take output into account and O(1) otherwise.*/



const nums: number[] = [-4,-1,0,3,10];
console.log(sortedSquares(nums));