class CheckIfPangram:
    def checkIfPangram(self, sentence: str) -> bool:
        alphabet = set("abcdefghijklmnopqrstuvwxyz")
        for char in sentence:
            if char in alphabet:
                alphabet.remove(char)
                if len(alphabet) == 0:
                    return True

        return False

    # Time complexity: O(n) where n is the length of the input string.
    # We need to iterate through each character in the string once.
    # Space complexity: O(1) since the size of the alphabet set is constant (26 letters).

    def checkIfPangramSimple(self, sentence: str) -> bool:
        # This approach only works if the input string is guaranteed
        # to be in lowercase and contains only letters (including no spaces or punctuation).
        return len(set(sentence)) == 26

    # Time complexity: O(n) where n is the length of the input string.
    # Space complexity: O(1) since the size of the set is at most 26.
