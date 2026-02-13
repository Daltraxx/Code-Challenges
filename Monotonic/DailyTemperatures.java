
import java.util.Stack;

/*Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
If there is no future day for which this is possible, 
keep answer[i] == 0 instead. */
public class DailyTemperatures {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stack = new Stack<>();
        int[] ans = new int[temperatures.length];

        for (int i = 0; i < temperatures.length; i++) {
            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
                int j = stack.pop();
                ans[j] = i - j;
            }
            stack.push(i);
        }

        return ans;
    }
}

// Time Complexity: O(n) where n is the length of the input array temperatures. Each element is pushed and popped from the stack at most once.
// Space Complexity: O(n) in the worst case, when the stack contains all the indices of the input array. The output array ans also takes O(n) space.
