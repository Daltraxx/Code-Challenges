class Maximum69Number:
    def maximum69Number(self, num: int) -> int:
        digits = list(str(num))
        for i, digit in enumerate(digits):
            if digit == "6":
                digits[i] = "9"
                break
        return int("".join(digits))

    # Time complexity: O(d) where d is the number of digits in the input number.
    # In the worst case, we may need to check each digit.
    # Space complexity: O(d) since we are creating a list of digits from the input number.
