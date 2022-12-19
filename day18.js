function candies(children, candy) {
    //  write code here.
       const numberOfCandy = Math.floor(candy/children);
       return numberOfCandy * children
 }

console.log(candies(2,0))

 

/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});