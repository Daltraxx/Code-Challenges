

import java.util.Stack;

public class StockSpanner {
    Stack<int[]> priceStack;

    public StockSpanner() {
        this.priceStack = new Stack<>();
    }

    public int next(int price) {
        int days = 1;
        while (!priceStack.isEmpty() && priceStack.peek()[0] <= price) {
            days += priceStack.pop()[1];
        }

        priceStack.push(new int[] {price, days});

        return days;
    }

    //constant time complexity for each next call, linear space

    public static void main(String[] args) {
        StockSpanner obj = new StockSpanner();
        System.out.println(obj.next(100));
        System.out.println(obj.next(80));
        System.out.println(obj.next(60));
        System.out.println(obj.next(70));
        System.out.println(obj.next(60));
        System.out.println(obj.next(75));
        System.out.println(obj.next(85));
        System.out.println(obj.priceStack);
    }
}