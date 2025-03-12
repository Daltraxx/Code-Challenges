function slayAchilles(army) {
    const maxPrime = Math.floor(Math.sqrt(Math.max(...army)));
    const primes = getPrimes(maxPrime);

    for (let i = 0; i < army.length; i++) {
        const num = army[i];

        if (isPerfectPower(num)) {
            continue;
        } else if (isAchillesNumber(num, primes)) {
            return army.slice(0, i).concat(army.slice(i + 1));
        }
    }

    //did not find achilles
    return army;
}

function getPrimes(maxPrime) {
    const primesArr = new Array(maxPrime + 1).fill(true);
    primesArr[0] = primesArr[1] = false;
    const primes = [];

    for (let i = 2; i < primesArr.length; i++) {
        if (primesArr[i]) {
            primes.push(i);
            for (let j = i**2; j < primesArr.length; j += i) {
                primesArr[j] = false;
            }
        }
    }

    return primes;
}

function isPerfectPower(num) {
    return Number.isInteger(Math.sqrt(num));
}

function isAchillesNumber(num, primes) {
    for (let i = 0; i < primes.length; i++) {
        for (let j = i + 1; j < primes.length; j++) {
            let m = primes[i];
            let n = primes[j];

            let mPower = 2;

            while (m * mPower < Math.sqrt(num)) {
                const mCurrent = m**mPower;

                let nPower = 2;
                let product = -Infinity;
                while (product < num) {
                    if (mPower === nPower) {
                        nPower++;
                        continue;
                    }

                    const nCurrent = n**nPower;
                    product = mCurrent * nCurrent;

                    if (product === num) {
                        return true;
                    }

                    nPower++;
                }

                mPower++;
            }
        }
    }

    return false;
}

const army = [5, 8, 9, 10, 16, 27, 72, 99,107, 121];
//console.log(slayAchilles(army));

console.log(isAchillesNumber(72, getPrimes(Math.floor(Math.sqrt(72)))));
