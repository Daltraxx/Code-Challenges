const asteroidsDestroyed = (mass, asteroids) => {
    const asteroidsSorted = asteroids.toSorted((a, b) => a - b);
    for (let asteroid of asteroidsSorted) {
        if (asteroid > mass) return false;
        mass += asteroid;
    }

    return true;
}