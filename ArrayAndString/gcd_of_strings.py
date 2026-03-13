class GcdOfStrings:
    def gcdOfStringsBruteForce(self, str1: str, str2: str) -> str:
        def is_valid(candidate: str) -> bool:
            candidate_length = len(candidate)
            if (
                longer_length % candidate_length != 0
                or shorter_length % candidate_length != 0
            ):
                return False
            left, right = 0, candidate_length
            while left < longer_length:
                if left < shorter_length and candidate != shorter[left:right]:
                    return False
                if candidate != longer[left:right]:
                    return False
                left += candidate_length
                right += candidate_length

            return True

        longer = str1 if len(str1) >= len(str2) else str2
        shorter = str2 if longer == str1 else str1
        longer_length = len(longer)
        shorter_length = len(shorter)
        for i in range(shorter_length, 0, -1):
            candidate = shorter[:i]
            if is_valid(candidate):
                return candidate
        return ""
    
    # Time complexity: O(n * m) where n and m are the lengths of str1 and str2 respectively.
    # Space complexity: O(n + m) since we are creating new strings in the is_valid function.
