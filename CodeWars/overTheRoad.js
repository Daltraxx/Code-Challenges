// ## first attempt
// function overTheRoad(address, n) {
//     let numberFromBeginning;
//     let oppositeHouseNumber;

//     if (address % 2 === 0) { 
//         //get number of houses address is from first house and
//         //use to get opposite house
//         numberFromBeginning = (address / 2) - 1;

//         oppositeHouseNumber = (n * 2 - 1) - (2 * numberFromBeginning);
//     } else {
//         numberFromBeginning = Math.floor(address / 2);

//         oppositeHouseNumber = (n * 2) - (2 * numberFromBeginning);
//     }

//     return oppositeHouseNumber;
// }


function overTheRoad(address, n) {
    const numberOfHouses = n * 2;
    return numberOfHouses - address + 1; 
}



const address = 6, n = 4;
console.log(overTheRoad(address, n));