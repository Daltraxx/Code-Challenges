// function zero(operation = null) {
//     if (operation === null) return '0';

//     const equation = '0' + operation;
//     return solveEquation(equation);
// }

// function one(operation = null) {
//     if (operation === null) return '1';

//     const equation = '1' + operation;
//     return solveEquation(equation);
// }

// function two(operation = null) {
//     if (operation === null) return '2';

//     const equation = '2' + operation;
//     return solveEquation(equation);
// }

// function three(operation = null) {
//     if (operation === null) return '3';

//     const equation = '3' + operation;
//     return solveEquation(equation);
// }

// function four(operation = null) {
//     if (operation === null) return '4';

//     const equation = '4' + operation;
//     return solveEquation(equation);
// }

// function five(operation = null) {
//     if (operation === null) return '5';

//     const equation = '5' + operation;
//     return solveEquation(equation);
// }

// function six(operation = null) {
//     if (operation === null) return '6';

//     const equation = '6' + operation;
//     return solveEquation(equation);
// }

// function seven(operation = null) {
//     if (operation === null) return '7';
    
//     const equation = '7' + operation;
//     return solveEquation(equation);
// }

// function eight(operation = null) {
//     if (operation === null) return '8';

//     const equation = '8' + operation;
//     return solveEquation(equation);
// }

// function nine(operation = null) {
//     if (operation === null) return '9';

//     const equation = '9' + operation;
//     return solveEquation(equation);
// }


// function plus(numFunction) {
//     return '+' + numFunction;
// }

// function minus(numFunction) {
//     return '-' + numFunction;
// }

// function times(numFunction) {
//     return '*' + numFunction;
// }

// function dividedBy(numFunction) {
//     return '/' + numFunction;
// }

// function getEquation(num, operation) {
//     return num + operation;
// }

// function solveEquation(equation) {
//     let i = 0;
//     while (!isNaN(Number(equation[i]))) i++;
    
//     let num1 = +equation.slice(0, i);
//     let operator = equation[i];
//     let num2 = +equation.slice(i + 1);
    
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return Math.floor(num1 / num2);
//     }
// }

// const zero = (operation) => operation ? operation(0) : 0;
// const one = (operation) => operation ? operation(1) : 1;
// const two = (operation) => operation ? operation(2) : 2;
// const three = (operation) => operation ? operation(3) : 3;
// const four = (operation) => operation ? operation(4) : 4;
// const five = (operation) => operation ? operation(5) : 5;
// const six = (operation) => operation ? operation(6) : 6;
// const seven = (operation) => operation ? operation(7) : 7;
// const eight = (operation) => operation ? operation(8) : 8;
// const nine = (operation) => operation ? operation(9) : 9;

// const plus = (num2) => {
//     return (num1 => num1 + num2);
// }

// const minus = (num2) => {
//     return (num1 => num1 - num2);
// }

// const dividedBy = (num2) => {
//     return (num1 => Math.floor(num1 / num2));
// }

// const times = (num2) => {
//     return (num1 => num1 * num2);
// }

const number = (number) => {
    return (operation => operation ? operation(number) : number);
}

const zero = number(0);
const one = number(1);
const two = number(2);
const three = number(3);
const four = number(4);
const five = number(5);
const six = number(6);
const seven = number(7);
const eight = number(8);
const nine = number(9);

const plus = (num2) => {
    return (num1 => num1 + num2);
}

const minus = (num2) => {
    return (num1 => num1 - num2);
}

const dividedBy = (num2) => {
    return (num1 => Math.floor(num1 / num2));
}

const times = (num2) => {
    return (num1 => num1 * num2);
}

console.log(seven(times(five()))); // returns 35

