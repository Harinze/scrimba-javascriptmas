function insertDashes(arr) {
    // write code here
    const dashStr = arr.split("").join("-");
         return dashStr.split("- -").join(" ");
}
console.log(insertDashes("abe vvd"))