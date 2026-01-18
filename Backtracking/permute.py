from typing import List

class Permute:
  def permute(self, nums: List[int]) -> List[List[int]]:
  
    def backtrack(current: List[int], used: set[int]):
      if len(current) == len(nums):
        permutations.append([*current])
        return
      for num in nums:
        if num not in used:
          current.append(num)
          used.add(num)
          backtrack(current, used)
          current.pop()
          used.remove(num)

    permutations = []
    backtrack([], set())
    return permutations
  
# Time: O(n * n!) where n is the length of nums
# Space: O(n!) for the output list and O(n) for the recursion stack, total O(n + n!)