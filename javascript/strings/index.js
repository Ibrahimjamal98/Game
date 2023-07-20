let name1 = "iron warrior";
function toTitleCase(name) {
  //array that stores the index of the characters that need to be capital and we initialize it with 0
  let indexes = [0];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") indexes.push(i + 1); //if we find a space, we store the next index in the array
  }
  let count = 0; //to keep track of array index
  let titleCase = ""; //store the result here
  for (let i = 0; i < name.length; i++) {
    if (indexes[count] === i) {
      titleCase += name[i].toUpperCase();
      count++;
    } else titleCase += name[i];
  }

  return titleCase;
}
function toTitleCase2(name){ 
    let array=name.split(" "); 
    let answer="";
    for (element of array){
        answer+=element[0].toUpperCase(); 
        answer+=element.slice(1);
        answer+=" "; 
    
    }
    return answer;

    // return array[0][0].toUpperCase() +slice(1,array[0].length)
}
console.log(toTitleCase2(name1)); 
// console.log(toTitleCase(name1));

let inventory = ["iron sword", "healing potion", "steel shield"];
function searchInventory(inventory, query) {
  const items = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].search(query) !== -1) {
      //search() method returns -1 if the query not found
      items.push(inventory[i]);
    }
  }
  return items;
}
// console.log(searchInventory(inventory,"iron"));

let npcname = "Goblin , Grunty";
function formatNPCName(name) {
  let firstName = "";
  let lastName = "";
  let index = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== " " && name[i] !== ",") {
      lastName += name[i];
      index++;
    } else break;
  }
  let newName = name.slice(index);
  for (let i = 0; i < newName.length; i++) {
    if (newName[i] !== " " && newName[i] !== ",") {
      firstName += newName[i];
    }
  }

  return firstName + " " + lastName;
}
// console.log(formatNPCName(npcname));
function parseDuration(duration){ 
    const [hours,minutes]=duration.split(" ");
    return {
      hours: parseInt(hours),
      minutes:parseInt(minutes)
    }
    
    // return `{hours: ${hours}, minutes: ${minutes}}`; 
}
console.log(parseDuration("3h 45min"));

function getGameAcronym(title){ 
    const arr=title.split(" "); 
    let acronym=""; 
    for(let i=0;i<arr.length;i++){
        acronym+=arr[i][0]; 
    }
    return acronym; 
}
// console.log(getGameAcronym("Epic Fantasy Battle")); 
let player={name:"iron warrior", class:"warrior", level:10}
function getCharacterDetails(character){
    return `${character.name}, class: ${character.class}, level:${character.level}`; 
}
// console.log(getCharacterDetails(player)); 
function createSlug(location){
    let slug= location.replace(" ","-"); 
    slug=slug.toLowerCase(); 
    return slug; 
}
let location="Dark Forest"; 
// console.log(createSlug(location)); 
let input="Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful."
function trimDescription(description, maxLength){
    let index=maxLength; 
    while(description[index]  !==" " && description[index] !== "."){
        index++; 
    }
    const output= description.slice(0,index)+ "...";  
    return output; 
}
// console.log(trimDescription(input,63));
let monsters="Goblin, Orc, Dragon"; 
function splitMonsters (monsters){ 
    let monsterList= monsters.split(","); 
    return monsterList; 
}
// console.log(splitMonsters(monsters)); 

secret= "Th3 s3cr3t l41r3 1s und3r th3 br1dg3!"; 
function decodeSecret(secret){
let answer=""; 
const mapping = { '1': 'i', '2': 'b', '3': 'e', '4': 'a', '5': 'e' };
    for(let i=0;i<secret.length;i++){ 
        if(mapping[secret[i]])
        answer+=mapping[secret[i]]; 
        else answer+=secret[i]; 
    }
    return answer; 
}
console.log(decodeSecret(secret));



