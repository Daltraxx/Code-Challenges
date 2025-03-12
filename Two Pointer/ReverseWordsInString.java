
/*Given a string s, 
reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order.
- s does not contain any leading or trailing spaces.
- There is at least one word in s.
- All the words in s are separated by a single space.*/

public class ReverseWordsInString {
    public String reverseWords(String s) {
        char[] charArray = s.toCharArray();
        int n = s.length();

        int lastSpaceIndex = -1;

        for (int i = 0; i <= n; i++) {
            if (i == n || charArray[i] == ' ') {
                int startIndex = lastSpaceIndex + 1;
                int endIndex = i - 1;
                while (startIndex < endIndex) {
                    char temp = charArray[startIndex];
                    charArray[startIndex] = charArray[endIndex];
                    charArray[endIndex] = temp;
                    startIndex++;
                    endIndex--;
                }
                lastSpaceIndex = i;
            }
        }

        return new String(charArray);
    }
}
