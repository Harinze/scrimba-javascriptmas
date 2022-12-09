/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1,word.length).toLowerCase()
 }
 
 /* 
 Now write a function that capitalizes every word in a sentence. 
 How can you reuse the function you just wrote? 
 */ 
 
 function toTitleCase(str){
   return str.split(" ").map(word => capitalizeWord(word)).join(" ")
 }
 
 // Test your functions
 console.log(capitalizeWord("scrimba"));
 console.log(toTitleCase("pumpkin PRANCED purposefully acRoss the ponD"));
 console.log(toTitleCase("everything, everywhere, all at once"))