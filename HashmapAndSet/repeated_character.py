class RepeatedCharacter:
    def repeatedCharacter(self, s: str) -> str:
        char_set = set()
        for char in s:
            if char in char_set:
                return char
            char_set.add(char)
        return None

# Time complexity: O(n)
# Space complexity: O(n) in the worst case, 
# if all characters in the string are unique.