from typing import List


class NextGreaterElement:

    def next_greater_element(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nextGreaterElementsMap = {}
        monoDecreasingStack = []
        for i in range(len(nums2)):
            num = nums2[i]
            nextGreaterElementsMap[num] = -1
            while monoDecreasingStack and num > monoDecreasingStack[-1]:
                nextGreaterElementsMap[monoDecreasingStack[-1]] = num
                monoDecreasingStack.pop()
            monoDecreasingStack.append(num)
        
        nextGreaterElements = []
        for num in nums1:
            nextGreaterElements.append(nextGreaterElementsMap[num])
        
        return nextGreaterElements

nums1 = [4,1,2]
nums2 = [1,3,4,2]
print(NextGreaterElement().next_greater_element(nums1, nums2))