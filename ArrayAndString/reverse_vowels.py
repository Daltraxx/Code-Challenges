class ReverseVowels:
    def reverseVowels(self, s: str) -> str:
        vowels = set(["a", "e", "i", "o", "u"])
        vowels_in_s = []
        vowel_indices = []
        for i in range(len(s)):
            if s[i].lower() in vowels:
                vowels_in_s.append(s[i])
                vowel_indices.append(i)
        s_list = list(s)
        j = len(vowels_in_s) - 1
        for index in vowel_indices:
            s_list[index] = vowels_in_s[j]
            j -= 1

        return "".join(s_list)
            
    def reverseVowelsTwoPointers(self, s: str) -> str:
        vowels = set(["a", "e", "i", "o", "u"])
        s_list = list(s)
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and s[left].lower() not in vowels:
                left += 1
            while right > left and s[right].lower() not in vowels:
                right -= 1
            if left < right:
                s_list[right], s_list[left] = s_list[left], s_list[right]
                left += 1
                right -= 1

        return "".join(s_list)
