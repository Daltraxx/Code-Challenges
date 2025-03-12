
function pickPeaks(arr) {
    const pos = [], peaks = [];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            let right = i + 1;
            while (arr[right] === arr[i] & right < arr.length - 1) {
                right++;
            }

            if (arr[i] > arr[right]) {
                pos.push(i);
                peaks.push(arr[i]);
                i = right;
            } else {
                i = right - 1;
            }
        }
    }

    return { pos: pos, peaks: peaks };
}

const arr = [1,2,5,4,5,6,1];
console.log(pickPeaks(arr));