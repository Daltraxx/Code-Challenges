/*Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
- answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
- answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.*/

const findDifferenceBruteForce = (nums1, nums2) => {
    let answer = [[], []];
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            answer[0].push(nums1[i]);
        }
        if(!nums1.includes(nums2[i])) {
            answer[1].push(nums2[i]);
        }
    }

    return answer;
}

//O(n^2)

const findDifferenceHashSet = (nums1, nums2) => {
    let hashSet1 = new Set(nums1);
    let hashSet2 = new Set(nums2);

    const distinctNumsSet1 = (set1, set2) => {
        return [...set1].filter((num) => !set2.has(num));
        
    }

    return [distinctNumsSet1(hashSet1, hashSet2), distinctNumsSet1(hashSet2, hashSet1)];
}

const findDifferenceCheating = (nums1, nums2) => {
    let hashSet1 = new Set(nums1);
    let hashSet2 = new Set(nums2);

    return [[...hashSet1.difference(hashSet2)], [...hashSet2.difference(hashSet1)]];
}

//O(n) 
/*The time complexity of the code is O(n) where n is the size of the larger input set. 
The code iterates through each element in one of the sets 
and checks if it exists in the other set using the 'has' method, 
which has a time complexity of O(1) for sets. 
Therefore, the overall time complexity is O(n) 
where n is the size of the larger input set.*/

const nums1 = [1,2,3,3], nums2 = [1,1,2,2];

console.log(findDifferenceHashSet(nums1, nums2));