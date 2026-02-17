class StockSpanner {
  constructor() {
    // Monotonic decreasing stack to store [price, span] pairs
    this.priceStack = [];
  }

  next(price) {
    // Stock span is always at least 1
    let stockSpanDays = 1;
    while (this.priceStack.length && this.priceStack.at(-1)[0] <= price) {
      let prevSpan = this.priceStack.pop()[1];
      stockSpanDays += prevSpan;
    }

    this.priceStack.push([price, stockSpanDays]);

    return stockSpanDays;
  }
}

// Constant time complexity for each next call, linear space

const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(85));
console.log(stockSpanner.priceStack);
