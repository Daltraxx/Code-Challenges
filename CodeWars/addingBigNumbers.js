function add(a, b) {
    let carry = 0;
    const result = [];
    const maxLength = Math.max(a.length, b.length);
    let i = maxLength;

    while (i--) {
        let sum = (Number(a[i - maxLength + a.length]) || 0) + (Number(b[i - maxLength + b.length]) || 0) + carry;
        carry = parseInt(sum / 10);
        result.unshift(sum % 10);
    }

    if (carry) result.unshift(carry);
    return result.join('');
}

const a = '63829983432984289347293874', b = '90938498237058927340892374089';
console.log(add(a, b));