class StockSpanner {
    constructor() {
        this.priceStack = [];
        
    }

    next(price) {
        //stock span is always at least 1
        let stockSpanDays = 1;

        //use monotonically decreasing stack to store price and days that price was less than or equal to that price
        //adding days to answer when greater price than last day was found
        //to save iterations
        while (this.priceStack.length > 0 && this.priceStack[this.priceStack.length - 1][0] <= price) {
            stockSpanDays += this.priceStack.pop()[1];
        }

        this.priceStack.push([price, stockSpanDays]);

        return stockSpanDays;
    }
    
}

//constant time complexity for each next call, linear space

const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(85));
console.log(stockSpanner.priceStack);