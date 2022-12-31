function anagram(s) {
    // Write your code here
   if(s.length>0 && s.length%2 !== 0){
       return -1
     }
  const mystr = s.substring(0,s.length/2)
  let secondstr = s.substring(s.length/2)
  let count = 0
    mystr.split("").forEach((item)=>{
       if(secondstr.includes(item)){
         secondstr = secondstr.replace(item,0);
         console.log(secondstr)
         return;
       }
       count++
    })
   return count;
}
 console.log(anagram("xaxbbbxx"))