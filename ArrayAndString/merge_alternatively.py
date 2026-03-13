class MergeAlternatively:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i = 0
        merged_str = []
        while i < len(word1) and i < len(word2):
            merged_str.append(word1[i])
            merged_str.append(word2[i])
            i += 1

        merged_str.append(word1[i:])
        merged_str.append(word2[i:])
        return "".join(merged_str)

# Time complexity: O(n + m) where n and m 
# are the lengths of word1 and word2 respectively.
# Space complexity: O(n + m) since we are creating a new string 
# that contains all characters from both input strings.
# Note: The space complexity could be considered O(1) 
# if we ignore the space used for the output string, 
# since we are only using a constant amount of additional space for the merged_str list.