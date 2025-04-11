function solve(arr) {
    const stack = [];
    arr.forEach(num => {
        while (num >= stack[stack.length - 1]) stack.pop();
        stack.push(num);
    });

    return stack;
}

const arr = [21,7,5];
console.log(solve(arr));