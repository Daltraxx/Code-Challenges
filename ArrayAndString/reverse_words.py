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

    def reverseWordsFollowUp(self, s: str) -> str:
        def reverse(left, right):
            while left < right:
                s[left], s[right] = s[right], s[left]
                left += 1
                right -= 1

        # Convert string to list for in-place modifications
        s = list(s)
        n = len(s)

        # 1. Reverse entire string
        reverse(0, n - 1)

        # 2. Reverse each word
        left = 0
        while left < n:
            if s[left] == " ":
                left += 1
                continue

            right = left
            while right < n and s[right] != " ":
                right += 1

            reverse(left, right - 1)
            left = right

        # 3. Clean spaces in-place
        write = 0
        read = 0

        while read < n:
            # skip spaces
            while read < n and s[read] == " ":
                read += 1

            # copy word
            while read < n and s[read] != " ":
                s[write] = s[read]
                write += 1
                read += 1

            # skip spaces between words
            while read < n and s[read] == " ":
                read += 1

            # add single space if more words remain
            if read < n:
                s[write] = " "
                write += 1

        # trim extra characters
        return "".join(s[:write])
