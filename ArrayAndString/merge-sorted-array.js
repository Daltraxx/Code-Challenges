/*You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.*/

const mergeNaive = (nums1, m, nums2, n) => {
    // Write the elements of num2 into the end of nums1.
    for (let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }

    // Sort nums1 array in-place.
    nums1.sort((a, b) => a - b);
}

/*Time complexity: O((n+m)log(n+m)).

The cost of sorting a list of length x using a built-in sorting algorithm is O(xlogx). 
Because in this case, we're sorting a list of length m+n, we get a total time complexity of O((n+m)log(n+m)).*/

const mergePointersStartToEnd = (nums1, m, nums2, n) => {
    //Initialize nums1Copy to a new array containing the first m values of nums1.
    let nums1Copy = nums1.slice(0, m);

    //Initialize the read pointer p1 to the beginning of nums1Copy.
    let p1 = 0;
    //Initialize the read pointer p2 to the beginning of nums2.
    let p2 = 0;

    // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
    for (let p = 0; p < m + n; p++) {
        // Also  ensure that p1 and p2 aren't over the boundaries
        // of their respective arrays.
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[p] = nums1Copy[p1++];
        } else {
            nums1[p] = nums2[p2++];
        }
    }
}

/*Time complexity: O(n+m).

We are performing n+2⋅m reads and n+2⋅m writes. 
Because constants are ignored in Big O notation, 
this gives us a time complexity of O(n+m).*/

const mergePointersEndtoStart = (nums1, m, nums2, n) => {
    //Initialize the read pointer p1 to relevent end of nums1.
    let p1 = m - 1;
    //Initialize the read pointer p2 to end of nums2.
    let p2 = n - 1;
    //Initialize write pointer p to real end of nums1
    // And move p backward through the array, each time writing
    // the smallest value pointed at by p1 or p2.
    for (let p = m + n - 1; p >= 0; p--) {
        //if p2 has been decremented max possible times (n times), the remaining numbers are where they should be
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
    }
}

/*Time complexity: O(n+m).
-Same as Approach 2.
Space complexity: O(1).
-Unlike Approach 2, we're not using an extra array.*/

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

mergePointersStartToEnd(nums1, m, nums2, n);


console.log(nums1);