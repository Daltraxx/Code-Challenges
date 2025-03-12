//https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-javascript-syntax-part-ii/modules/wdcp-22-mysterious-organism-97f6a643-6d5f-4b70-af5b-468388481cca/projects/mysterious-organism

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

//factory function to produce pAequour
const pAequorFactory = (num, dnaStrand) => {
    return {
        specimenNum: num,
        dna: dnaStrand,
        mutate() {
            
            let randomBaseIndex = Math.floor(Math.random() * this.dna.length);
            let randomBase = this.dna[randomBaseIndex];
            let randomNewBase = returnRandBase();
            
            while (randomBase === randomNewBase) {
                randomNewBase = returnRandBase();
            }

            this.dna[randomBaseIndex] = randomNewBase;
            return this.dna;
        },

        compareDNA(pAequor) {
            let sharedBases = 0;
            for (let i = 0; i < pAequor.dna.length; i++) {
                if (pAequor.dna[i] === this.dna[i]) {
                    sharedBases++;
                }
            }

            let sharedPercentage = ((sharedBases / 15)*100).toFixed(2);

            console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${sharedPercentage}% DNA in common`);
        },

        willLikelySurvive() {
            let impBases = this.dna.filter(base => base === 'C' || base === 'G');

            return (impBases.length / 15) * 100 >= 60;
        }
        

    }
};

//create array of pAequor likely to survive
let survivableSpecimens = [];
for (let i = 1; i < 31; i++) {
    let newSpecimen = pAequorFactory(i, mockUpStrand());
    while (!newSpecimen.willLikelySurvive()) {
        newSpecimen.dna = mockUpStrand();
    }
    survivableSpecimens.push(newSpecimen);

}

console.log(survivableSpecimens[0], survivableSpecimens[0].willLikelySurvive());




/*willLikelySurvive() testing
let specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1.willLikelySurvive());
*/

/*compareDNA() testing
let specimen1 = pAequorFactory(1, mockUpStrand());
let specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1, specimen2);
specimen1.compareDNA(specimen2);
*/

/*mutate() testing
let dnaTestStrandBase = mockUpStrand();
const dnaTestStrand = pAequorFactory(1, dnaTestStrandBase);
console.log(dnaTestStrand);
dnaTestStrand.mutate();
console.log(dnaTestStrand);
*/