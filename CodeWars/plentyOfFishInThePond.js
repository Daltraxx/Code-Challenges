function fish(shoal) {
    const foodPerLevel = new Map();
    let maxFishLevel = -Infinity;
    for (let fish of shoal) {
        const fishLevel = Number(fish);
        foodPerLevel.set(fishLevel, foodPerLevel.get(fishLevel) + fishLevel || fishLevel);
        maxFishLevel = Math.max(fishLevel, maxFishLevel);
    }

    let myFishLevel = 1;
    let foodRequired = 4;

    for (let fishLevel = 1; fishLevel <= maxFishLevel; fishLevel++) {
        if (myFishLevel < fishLevel) return myFishLevel;

        while (foodPerLevel.get(fishLevel) > 0) {
            let foodAvailable = foodPerLevel.get(fishLevel);
            
            if (foodAvailable >= foodRequired) {
                foodPerLevel.set(fishLevel, foodAvailable - foodRequired);
                myFishLevel++;
                foodRequired = myFishLevel * 4;
            } else {
                foodRequired -= foodAvailable;
                foodPerLevel.set(fishLevel, 0);
            }

        }
    }

    return myFishLevel;
}

const shoal = "2160048593509304605970888551134391344111366160998873452751873849493108305380511918943247090852341333618162525203136534748828391304206105002";
console.log(fish(shoal));