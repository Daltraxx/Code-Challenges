class MakeGood1:
    def make_good(self, s: str) -> str:
        stack = []
        for char in s:
            if stack and abs(ord(char) - ord(stack[-1])) == 32:
                stack.pop()
            else:
                stack.append(char)
        return "".join(stack)


class MakeGood2:
    def make_good(self, s: str) -> str:
        stack = []
        for char in s:
            if stack and self.is_bad_pair(stack[-1], char):
                stack.pop()
            else:
                stack.append(char)
        return "".join(stack)

    @staticmethod
    def is_bad_pair(char1: str, char2: str) -> bool:
        return char1 != char2 and char1.lower() == char2.lower()


# Time complexity: O(n) where n is the length of the input string s
# Space complexity: O(n) in the worst case if no characters are removed
