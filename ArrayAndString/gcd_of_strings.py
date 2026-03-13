class GcdOfStrings:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
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

        if len(str1) == len(str2):
            return str1 if str1 == str2 else ""

        longer = str1 if len(str1) >= len(str2) else str2
        shorter = str2 if longer == str1 else str1
        longer_length = len(longer)
        shorter_length = len(shorter)
        i = len(shorter)
        while i >= 1:
            candidate = shorter[:i]
            if is_valid(candidate):
                return candidate
            else:
                i -= 1
        return ""
