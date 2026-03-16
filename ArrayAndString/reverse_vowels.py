class ReverseVowels:    
    def reverseVowels(self, s: str) -> str:
        vowels = set("aeiouAEIOU")
        s_list = list(s)
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and s_list[left] not in vowels:
                left += 1
            while left < right and s_list[right] not in vowels:
                right -= 1
            if left < right:
                s_list[left], s_list[right] = s_list[right], s_list[left]
                left += 1
                right -= 1

        return "".join(s_list)

# Time Complexity: O(n) where n is the length of the input string,
#  since we have to scan through the entire string once.
# Space Complexity: O(n) for the list conversion of the input string.