class EqualSubstring:
    def equal_substring(self, s: str, t: str, maxCost: int) -> int:
        currentCost = 0
        maxLength = 0
        left = 0
        for right in range(len(s)):
            currentCost += self.get_cost(s[right], t[right])
            while currentCost > maxCost:
                currentCost -= self.get_cost(s[left], t[left])
                left += 1
            maxLength = max(right - left + 1, maxLength)
        return maxLength

    @staticmethod
    def get_cost(a: str, b: str) -> int:
        return abs(ord(a) - ord(b))


# Time Complexity: O(n)
# Space Complexity: O(1)

s = "abcd"
t = "bcdf"
maxCost = 3

print(EqualSubstring().equal_substring(s, t, maxCost))
