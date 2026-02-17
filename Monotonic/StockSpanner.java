
import java.util.ArrayDeque;
import java.util.Deque;

public class StockSpanner {
    Deque<int[]> priceStack;

    public StockSpanner() {
        // Monotonic decreasing stack to store price and span days
        this.priceStack = new ArrayDeque<>();
    }

    public int next(int price) {
        int span = 1;
        while (!priceStack.isEmpty() && priceStack.getLast()[0] <= price) {
            span += priceStack.removeLast()[1];
        }

        priceStack.addLast(new int[] { price, span });

        return span;
    }

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

// Constant time complexity for each next call, linear space complexity for the stack in the worst case (strictly decreasing prices)