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

    def lengthOfLongestSubstringOptimized(self, s: str) -> int:
        char_to_index = {}
        longest_substring = 0
        left = 0
        for right, char in enumerate(s):
            prev_index = char_to_index.get(char)
            if prev_index is not None:
                # Max necessary to ensure left pointer only moves forward, 
                # in case of repeated characters that have already been skipped over.
                left = max(char_to_index[char] + 1, left)
            char_to_index[char] = right
            longest_substring = max(right - left + 1, longest_substring)

        return longest_substring
    
    # Same time and space complexity as the previous method, but faster in practice.
