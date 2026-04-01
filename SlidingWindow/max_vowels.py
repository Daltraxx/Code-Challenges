class MaxVowels:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}
        left = 0
        curr_count = 0
        max_count = 0
        for right in range(len(s)):
            if s[right] in vowels:
                curr_count += 1
            if right - left + 1 > k:
                curr_count -= 1 if s[left] in vowels else 0
                left += 1
            if right - left + 1 == k:
                max_count = max(curr_count, max_count)

        return max_count

    # Time complexity: O(n) where n is the length of the string s, 
    # as we traverse the string once.
    # Space complexity: O(1)

    def maxVowelsPreFill(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}
        curr_count = sum(1 for i in range(k) if s[i] in vowels)
        max_count = curr_count
        for right in range(k, len(s)):
            curr_count += 1 if s[right] in vowels else 0
            curr_count -= 1 if s[right - k] in vowels else 0
            max_count = max(curr_count, max_count)
            # Early exit if we have already found the maximum possible count.
            if max_count == k:
                break

        return max_count

    # Time and space complexity are the same as the first method, 
    # O(n) and O(1) respectively.
