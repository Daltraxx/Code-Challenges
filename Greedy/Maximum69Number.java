public class Maximum69Number {
  public int maximum69Number(int num) {
    char[] digits = String.valueOf(num).toCharArray();
    for (int i = 0; i < digits.length; i++) {
      if (digits[i] == '6') {
        digits[i] = '9';
        break;
      }
    }

    return Integer.parseInt(String.valueOf(digits));
  }
}

// Time Complexity: O(n) where n is the number of digits in the input number
// Space Complexity: O(n) where n is the number of digits in the input number