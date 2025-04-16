// function kangaroo(kanga1, rate1, kanga2, rate2) {
//     if (kanga1 === kanga2) return true;

//     const kanga1Data = { spot: kanga1, rate : rate1 };
//     const kanga2Data = { spot: kanga2, rate: rate2 };

//     const ahead = kanga1 > kanga2 ? kanga1Data : kanga2Data;
//     const behind = kanga1 > kanga2 ? kanga2Data : kanga1Data;

//     if (behind.rate <= ahead.rate) return false;

//     while (behind.spot < ahead.spot) {
//         if (behind.spot + behind.rate * 5000 < ahead.spot) {
//             //cheat to make faster
//             behind.spot += behind.rate * 5000;
//             ahead.spot += ahead.rate * 5000;
//         } else {
//             ahead.spot += ahead.rate;
//             behind.spot += behind.rate;
//         }
//         if (ahead.spot === behind.spot) return true;
//     }

//     return false;
// }

// Constant solution using math

function kangaroo(kanga1, rate1, kanga2, rate2) {
    const slope = (kanga1 - kanga2) / (rate2 - rate1);
    return Number.isInteger(slope) && slope > 0;
}

const kanga1 = 851358, rate1 = 5, kanga2 = 301781243, rate2 = 4;
console.log(kangaroo(kanga1, rate1, kanga2, rate2));