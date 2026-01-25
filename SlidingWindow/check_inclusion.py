from collections import Counter


class CheckInclusion:
    def check_inclusion(self, s1: str, s2: str) -> bool:
        total = len(s1)
        chars = Counter(s1)
        left = 0
        for right in range(len(s2)):
            rightChar = s2[right]
            if rightChar in chars and chars.get(rightChar) > 0:
                chars[rightChar] -= 1
                total -= 1
                if total == 0:
                    return True
            elif rightChar in chars and chars.get(rightChar) == 0:
                while chars.get(rightChar) == 0:
                    leftChar = s2[left]
                    if leftChar in chars:
                        chars[leftChar] += 1
                        total += 1
                    left += 1
            else:
                total = len(s1)
                while left <= right:
                    leftChar = s2[left]
                    if leftChar in chars:
                      chars[leftChar] += 1
                    left += 1
        return False


s1 = "aba"
s2 = "abbaoaaboo"
print(CheckInclusion().check_inclusion(s1, s2))
