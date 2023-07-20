const  getPlayerName = player => player.name; 

const getPlayerHealth = health => {
    if(health >70)
     return "high";
    else if (health>40)
     return "medium" ;
     else return "low";
};
const getTotalInventoryValue = items => {
   let totalValue = 0;
   for (let i = 0; i < items.length; i++) {
   totalValue += items[i].value;
   }
   return 'Total inventory  is ' + totalValue;
}

let sortedItems =  (item1, item2)=> {
    return item1.value - item2.value;
   };

   const getItemNames=items => return items.map({
    items.name; 
   })




   let y={value:4}; 
   let x={value:3}; 



   console.log(sortedItems(y,x))








let player1={name:"mahmoud"}; 
