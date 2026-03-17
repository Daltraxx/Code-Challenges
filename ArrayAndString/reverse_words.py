class ReverseWords:
    def reverseWordsManualReversal(self, s: str) -> str:
        word_list = s.split()
        left, right = 0, len(word_list) - 1
        while left < right:
            word_list[left], word_list[right] = word_list[right], word_list[left]
            left += 1
            right -= 1

        return " ".join(word_list)
    
    def reverseWordsBuiltIn(self, s: str) -> str:
        return " ".join(reversed(s.split()))

# Time complexity: O(n) where n is the length of the input string s.
# We split the string into words, which takes O(n) time, 
# and then we reverse the list of words in-place, 
# which also takes O(n) time in the worst case (when all characters are part of a single word). 
# Finally, we join the words back into a string, which takes O(n) time.
# Space complexity: O(n) for the list of words created by splitting the input string.