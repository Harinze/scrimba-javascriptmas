function validTime(str) {
    //  write code here.
    str = str.split("");
 return str[0] < 3 && str[1] < 5 && str[3] < 6 ? true : false
 
}
console.log(validTime("22:55"))
console.log(validTime("31:22"))
console.log(validTime("00:59"))
console.log(validTime("26:59"))

