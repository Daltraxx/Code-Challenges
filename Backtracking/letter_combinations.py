from typing import List


class LetterCombinations:
    letter_map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    def letterCombinations(self, digits: str) -> List[str]:
        def backtrack(curr: List[str], i: int):
            if len(curr) == n:
                combinations.append("".join(curr))
                return

            num = digits[i]
            for letter in self.letter_map[num]:
                curr.append(letter)
                backtrack(curr, i + 1)
                curr.pop()

        n = len(digits)
        combinations = []
        backtrack([], 0)
        return combinations
    
    # Time complexity: O(3^n * 4^m) 
    # where n is the number of digits that map to 3 letters (2, 3, 4, 5, 6, 8) 
    # and m is the number of digits that map to 4 letters (7, 9). 
    # This is because each digit can generate either 3 or 4 combinations.
    # Space complexity: O(n) for the recursion stack and the current combination list, 
    # not counting the output list which can grow exponentially in size.