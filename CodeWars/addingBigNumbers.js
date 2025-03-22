function add(a, b) {
    const result = [];
    let aPointer = a.length - 1, bPointer = b.length - 1;
    let carry = 0;

    while (aPointer >= 0 || bPointer >= 0) {
        let sum = (Number(a[aPointer]) || 0) + (Number(b[bPointer]) || 0) + carry;
        carry = parseInt(sum / 10);
        result.push(sum % 10);
        aPointer--;
        bPointer--;
    }

    if (carry) result.push(carry);
    return result.reverse().join('');
}

const a = '63829983432984289347293874', b = '90938498237058927340892374089';
console.log(add(a, b));
console.log(parseInt(9/10))