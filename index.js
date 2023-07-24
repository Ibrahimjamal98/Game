// // 1. Character Name Capitalization: Write a function, toTitleCase(name) , that takes a
// character's name string in all lowercase and returns it in title case.
// Input: "iron warrior"
// Output: "Iron Warrior"
let answer="iron warrior";
function toTitleCase1(answer){
  return answer.split(' ').map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(toTitleCase1(answer));

//2. Item Search: Write a function, searchInventory(inventory, query) , that takes in an array of inventory item names and a string search query. The function should return a new array with only the items that contain the query string.
let inventory=["Iron Sword", "Healing Potion", "Steel Shield"];
  let query="Iron";
function searchInventory(inventory,query) {
  
  let answer=[];
  for(let i=0;i<inventory.length;i++){
    if (inventory[i].search(query)!==-1){
    answer.push(inventory[i]);
    }
  }
  return answer;
}
console.log(searchInventory(inventory,query));

//NPC Name Format: Write a function, formatNPCName(name) , which takes an NPC's name in the format "last, first" and swaps it to "first last".
function formatNPCName(name){
const [last,first] =name.split('-') ;
return `${first} ${last}`;
}
console.log(formatNPCName("Goblin-Grunty"));
//Quest Duration: Write a function, parseDuration(duration) , that takes a string like "2h 30min" and returns an object with the number of hours and minutes as integers.
function parseDuration(duration){
  const [hours,minutes]=duration.split(" ");
  return {
   hours:parseInt(hours),
    minutes:parseInt (minutes)
  }
}
console.log(parseDuration("3h 45min"));
// 6. Concatenate Character Details: Write a function, getCharacterDetails(character) , that takes an object with character details like name, class, and level and returns a single string that combines all this information.

function getCharacterDetails(character){
  return `"${character.name}, class:${character.class}, level:${character.level}"`
}
console.log(getCharacterDetails({name: "Iron Warrior", class: "Warrior", level: 10}));
// console.log(getCharacterDetails([ "Iron Warrior", "Warrior", 10]));
// 7.Write a function, createSlug(location) , that takes a location name and returns a URL-friendly slug.
function createSlug(location){
  return location.split(" ").map((word)=>word.charAt(0).toLowerCase() + word.slice(1)).join('-')
}
console.log(createSlug("Dark Forest"))

// // 8. Quest Description Trimming: Write a function,
// trimDescription(description, maxLength) , that trims the quest's description to a
// specified length without cutting off words.
let description=" Retrieve the sacred artifact from the dragon's lair. But beware,the dragon is cunning and powerful.";
let maxLength=50;
const lastspace=description.lastIndexOf(' ',maxLength);

function trimDescription(description, maxLength){
    if(description.length<maxLength){
      return description;}
      else {
        return description.slice(1,lastspace);
      }
 }
  
console.log(trimDescription(description,maxLength)); 

//9. Monster List: Write a function, splitMonsters(monsters) , that takes a string of monster names separated by commas and converts it into an array of individual monster names.
function splitMonsters(monsters){
  return monsters.split(",");
}
console.log(splitMonsters("Goblin, Orc, Dragon"))