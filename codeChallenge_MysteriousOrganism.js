/* Task 1: Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').

mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor. */


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };

  /* Task 3:Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

You’ll also add more methods to this returned object in the later steps.
 */
  
  // Factory function to create P. aequor objects
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  
      // Task 4: Method to mutate a random base in the dna
      mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length); // Pick a random base index
        let newBase = returnRandBase(); // Generate a random base
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase(); // Ensure the new base is different
        }
        this.dna[randIndex] = newBase; // Replace the old base with the new base
        return this.dna;
      },
  
      //Task 5:  Method to compare DNA sequences of two P. aequor objects
      compareDNA(otherPAequor) {
        let identicalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherPAequor.dna[i]) {
            identicalBases++;
          }
        }
        const similarityPercentage = (identicalBases / this.dna.length) * 100;
        console.log(
          `specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${similarityPercentage.toFixed(2)}% DNA in common.`
        );
      }
    };
  };
  
  // Example Usage:
  
  // Create two P. aequor organisms
  const pAequor1 = pAequorFactory(1, mockUpStrand());
  const pAequor2 = pAequorFactory(2, mockUpStrand());
  
  console.log("Original DNA of pAequor1:", pAequor1.dna);
  console.log("Mutated DNA of pAequor1:", pAequor1.mutate());
  console.log("DNA of pAequor2:", pAequor2.dna);
  
  // Compare their DNA sequences
  pAequor1.compareDNA(pAequor2);
  
  
  
  
  
  
  
  
  