from typing import List
import hashlib


class PermuteUnique:
  def permute_unique(self, nums: List[int]) -> List[List[int]]:
    permutations = []
    counts = dict()
    for num in nums:
      counts[num] = counts.get(num, 0) + 1


    def backtrack(curr: List[int], curr_counts: dict[int, int]):
      if len(curr) == len(nums):
        permutations.append(curr[:])
        return
      for num in counts:
        if curr_counts.get(num, 0) < counts[num]:
          curr_counts[num] = curr_counts.get(num, 0) + 1
          curr.append(num)
          backtrack(curr, curr_counts)
          curr_counts[num] -= 1
          curr.pop()
    
    backtrack([], dict())
    
    return permutations
      


nums = [1,1,2]

print(PermuteUnique().permute_unique(nums))