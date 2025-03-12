// const convertToHex = (value) => {
//     if (value < 0) return '00';
//     if (value > 255) return 'FF';

//     const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//     let quotient = Math.floor(value / 16);
//     let remainder = value % 16;
//     let hexvalue = [[hexValues[remainder]]];

//     while (quotient !== 0) {
//         remainder = quotient % 16;
//         quotient = Math.floor(quotient / 16);
//         hexvalue.unshift(hexValues[remainder]);
//     }

//     if (hexvalue.length === 1) hexvalue.unshift('0');

//     return hexvalue.join('')
// }

// function rgb(r, g, b) {
//     return convertToHex(r) + convertToHex(g) + convertToHex(b);
// }

const convertToHex = (value) => {
    if (value < 0) return '00';
    if (value > 255) return 'FF';

    let hexString = value.toString(16);

    return hexString.toUpperCase().padStart(2, '0');
}

const rgb = (r, g, b) => {
    return convertToHex(r) + convertToHex(g) + convertToHex(b);
}