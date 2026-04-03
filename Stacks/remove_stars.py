class RemoveStars:
    def removeStars(self, s: str) -> str:
        stack = []
        for char in s:
            if char == "*":
                # Guaranteed by the problem constrains that 
                # there will always be a non-star character before the star character, 
                # so we can safely pop from the stack without checking if it's empty.
                stack.pop()
            else:
                stack.append(char)

        return "".join(stack)

    # Time complexity: O(n) where n is the length of the input string s,
    # as we need to traverse the string once to process all characters.
    # Space complexity: O(n) in the worst case 
    # where there are no '*' characters in the string.