const powers = n => {
    const arr = [];
    let power = 0

    while (n > 0) {
        if (n % 2 != 0) {
            arr.push(2**power)
        }
        power++
        n = Math.floor(n / 2)
    }
    
    return arr;
}

const n = 688;
console.log(powers(n));