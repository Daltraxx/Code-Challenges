class NumJewelsInStones:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewel_set = set(jewels)
        jewel_count = 0
        for stone in stones:
            if stone in jewel_set:
                jewel_count += 1
        return jewel_count
    
    # Time complexity: O(j + s) where j is the length of the jewels string 
    # and s is the length of the stones string.
    # Space complexity: O(j) for the set of jewels.

    def numJewelsInStonesPythonic(self, jewels: str, stones: str) -> int:
        jewel_set = set(jewels)
        return sum(stone in jewel_set for stone in stones)
    
    # Same time and space complexity as the previous method.
