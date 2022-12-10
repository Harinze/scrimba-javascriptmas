
// write a function that returns the sorted array by length


function sortByLength(strs) {
    //  write code here.
    return strs.sort((a,b)=>a.length-b.length)
}
console.log(sortByLength(["ccc", "", "bbb", "a", "bb", "zz", "zzz"]))