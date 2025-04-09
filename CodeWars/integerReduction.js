function solve(n, k) {
    const nString = n.toString();
    const stack = [];
    for (let digit of nString) {
        while (k > 0 && stack.length && digit < stack.at(-1)) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    return stack.slice(0, stack.length - k).join('');
}

const n = 123056, k = 1;
console.log(solve(n, k));