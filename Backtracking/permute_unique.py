from typing import List
import hashlib


class PermuteUnique:
    
  
  def permute_unique(self, nums: List[int]) -> List[List[int]]:
    permutations = []
    used_permutations = set()
    counts = dict()
    for num in nums:
      counts[num] = counts.get(num, 0) + 1


    def backtrack(curr: List[int], curr_counts: dict[int, int]):
      if len(curr) == len(nums):
        permutation = tuple(curr)
        if permutation not in used_permutations:
          permutations.append([*curr])
          used_permutations.add(permutation)
        return
      for num in nums:
        if num not in curr_counts or curr_counts[num] < counts[num]:
          curr_counts[num] = curr_counts.get(num, 0) + 1
          curr.append(num)
          backtrack(curr, curr_counts)
          curr_counts[num] -= 1
          curr.pop()
    
    backtrack([], dict())
    
    return permutations
      


nums = [1,1,2]

print(PermuteUnique().permute_unique(nums))