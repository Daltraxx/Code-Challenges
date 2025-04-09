// function zipWith(fn,a0,a1) {
//     const n = Math.min(a0.length, a1.length);
//     let zipped = new Array(n);
//     for (let i = 0; i < n; i++) {
//         zipped[i] = (fn(a0[i], a1[i]));
//     }

//     return zipped;
// }

function zipWith(fn,a0,a1) {
    return Array.from({ length: Math.min(a0.length, a1.length) }, (_, i) => fn(a0[i], a1[i]));
}

const fn = Math.pow, a0 = [10,10,10,10], a1 = [0,1,2,3];
console.log(zipWith(fn, a0, a1));