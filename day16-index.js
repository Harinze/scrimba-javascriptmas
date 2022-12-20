// function insertDashes(arr) {
//     // write code here
//     const dashStr = arr.split("").join("-");
//          return dashStr.split("- -").join(" ");
// }


function insertDashes(arr) {
    // write code here
         arr = arr.split(" ");
         const arrOfDash = [];
         for(let i = 0; i < arr.length; i++){
              arrOfDash.push(arr[i].split("").join("-"))
         }
            const dashedStr = arrOfDash.join(" ")
            return dashedStr
        }
    
console.log(insertDashes("abe vvd"))