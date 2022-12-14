// function countVowelConsonant(str) {
//     // write code here
//     const vowels = 'aeiou'
//     let sumOfLetters = 0;
//     str = str.toLowerCase().split("");
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){sumOfLetters ++}
//         else{sumOfLetters += 2}
//     }
//     return sumOfLetters
//   }
  console.log(countVowelConsonant("sumOfLetters"))
  
  function countVowelConsonant(str) {
    return str.toLowerCase().split('').reduce((count,letter)=>letter.match(/[aeiouy]/)?count+=1:count+=2,0)
  }
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });