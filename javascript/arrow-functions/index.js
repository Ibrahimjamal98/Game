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


   const sortedItems = (value)=>{
    return value.sort((a,b)=> b.value - a.value)
   }


     const getItemNames =(items)=> items.map( item=> item.name); 

   let y={value:4}; 
   let x={value:3}; 


let items=[{name:"yousef"},{name:"mahmoud"}]; 
   console.log(getItemNames(items));




