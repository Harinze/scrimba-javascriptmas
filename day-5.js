import products from "./day5-data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    
    return data.filter(value1 => value1.type === "sweet").map((value2) => ({item: value2.item,
     price: value2.price}) 
        
 )};
 
 console.log(getSaleItems(products))
