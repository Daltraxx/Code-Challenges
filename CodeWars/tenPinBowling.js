function bowlingScore(frames) {
    frames = frames.split(' ');
    const STRIKE = 'X';
    const SPARE = '/';
    let score = 0;
    let bonuses = {};

    for (let frame = 0; frame < 10; frame++) {
        let currentFrame = frames[frame];
        let frameScore = 0;
        for (let roll of currentFrame) {
            let rollScore = 0;
            let bonusesActive = 0;
            for (let frame in bonuses) {
                bonusesActive++;
                bonuses[frame]--;
                if (bonuses[frame] === 0) delete bonuses[frame];
            }

            if (roll === STRIKE) {
                if (frame !== 9) bonuses[`${frame}-STRIKE`] = 2;
                rollScore += 10;
            } else if (roll === SPARE) {
                if (frame !== 9) bonuses[`${frame}-SPARE`] = 1;
                rollScore = 10 - frameScore;
            } else {
                rollScore = Number(roll);
            }
            for (let i = 0; i < bonusesActive; i++) score += rollScore;
            frameScore += rollScore;
        }
        score += frameScore;
    }

    return score;
}

const frames = '18 X 9/ 27 33 16 40 09 8/ 34';
console.log(bowlingScore(frames));