

/*Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.*/

class ReverseOnlyLetters {
    public String reverseOnlyLetters(String s) {
        StringBuilder reversedString = new StringBuilder();
        
        int right = s.length() - 1;
        for (int left = 0; left < s.length(); left++) {
            if (Character.isLetter(s.charAt(left))) {
                while (!Character.isLetter(s.charAt(right))) {
                    right--;
                }
                reversedString.append(s.charAt(right));
                right--;
            } else {
                reversedString.append(s.charAt(left));
            }
        }

        return reversedString.toString();
    }
}