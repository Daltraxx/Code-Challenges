class LengthOfLongestSubstring:
    def lengthOfLongestSubstring(self, s: str) -> int:
        curr_chars = set()
        longest_substring = 0
        left = 0
        for right, char in enumerate(s):
            while char in curr_chars:
                curr_chars.remove(s[left])
                left += 1
            curr_chars.add(char)
            longest_substring = max(right - left + 1, longest_substring)

        return longest_substring
    
    # Time complexity: O(n) where n is the length of the input string.
    # We iterate through the input string once, 
    # and each character is added and removed from the set at most once.
    # Space complexity: O(min(m, n)), or O(n) in the worst case 
    # where all characters are unique.
