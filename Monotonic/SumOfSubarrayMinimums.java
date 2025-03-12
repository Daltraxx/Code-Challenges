import java.util.Stack;
/*Given an array of integers arr, find the sum of min(b), 
where b ranges over every (contiguous) subarray of arr. 
Since the answer may be large, return the answer modulo 109 + 7. */
class SumOfSubarrayMinimums {
    public static int SumSubarrayMins(int[] arr) {
        int MOD = (int) Math.pow(10.0, 9.0) + 7;
        Stack<Integer> stack = new Stack<>();
        long sumOfMins = 0;
        
        for (int i = 0; i <= arr.length; i++) {
            while (!stack.isEmpty() && (i == arr.length || arr[i] <= arr[stack.peek()])) {
                int mid = stack.pop();
                int leftBound = stack.isEmpty() ? -1 : stack.peek();
                int rightBound = i;

                long count = (mid - leftBound) * (rightBound - mid) % MOD;

                sumOfMins += (count * arr[mid]) % MOD;
                sumOfMins %= MOD;
            }

            stack.push(i);
        }

        return (int) sumOfMins;
    }

    public static void main(String[] args) {
        int[] arr = {3,1,2,4};
        System.out.println(SumSubarrayMins(arr));
    }
}