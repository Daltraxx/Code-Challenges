function kangaroo(kanga1, rate1, kanga2, rate2) {
    if (kanga1 === kanga2) return true;

    const kanga1Data = { spot: kanga1, rate : rate1 };
    const kanga2Data = { spot: kanga2, rate: rate2 };

    const ahead = kanga1 > kanga2 ? kanga1Data : kanga2Data;
    const behind = kanga1 > kanga2 ? kanga2Data : kanga1Data;

    if (behind.rate <= ahead.rate) return false;

    while (behind.spot < ahead.spot) {
        ahead.spot += ahead.rate;
        behind.spot += behind.rate;
        if (ahead.spot === behind.spot) return true;
    }

    return false;
}

const kanga1 = 0, rate1 = 3, kanga2 = 4, rate2 = 2;
console.log(kangaroo(kanga1, rate1, kanga2, rate2));