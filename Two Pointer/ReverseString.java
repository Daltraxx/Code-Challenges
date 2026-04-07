public class ReverseString {
    public void reverseString(char[] s) {
        int left = 0;
        int right = s.length - 1;

        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }
}

// Time complexity: O(n), where n is the length of the input array.
// We need to traverse half of the array to reverse it.
// Space complexity: O(1)
