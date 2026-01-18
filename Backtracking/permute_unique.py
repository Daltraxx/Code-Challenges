from typing import List
from collections import Counter


class PermuteUnique:
  def permute_unique(self, nums: List[int]) -> List[List[int]]:
    permutations = []


    def backtrack(curr: List[int], counter: Counter):
      if len(curr) == len(nums):
        permutations.append(curr[:])
        return
      for num in counter:
        if counter[num] > 0:
          counter[num] -=1
          curr.append(num)
          backtrack(curr, counter)
          counter[num] += 1
          curr.pop()
    
    backtrack([], Counter(nums))
    
    return permutations
      


nums = [1,1,2]

print(PermuteUnique().permute_unique(nums))