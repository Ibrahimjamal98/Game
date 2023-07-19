console.log("karin branch");

const toTitleCase = (name) => {
  let array = name.split(" ");
  let newArr = [];
  for (element of array) {
    newArr.push(element[0].toUpperCase() + element.slice(1));
  }
  return newArr.join(" ");
};
console.log(toTitleCase("iron warrior"));

// const searchInventory = (inventory, query) => {
//   let newArr = [];
//   for (element of inventory) {
//     if (element.includes(query)) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// };
function searchInventory(inventory, query) {
  return inventory.filter((element) =>
    element.toLowerCase().includes(query.toLowerCase())
  );
}
console.log(
  searchInventory(["Iron Sword", "Healing Potion", "Steel Shield"], "irOn")
);

const formatNPCName = (name) => {
  //destructuring
  let [first, last] = name.split(", ");
  return `${last} ${first}`;
  //swap
  // let arrName = name.split(", ");
  // let temp = arrName[0];
  // arrName[0] = arrName[1];
  // arrName[1] = temp;
  // return arrName.join(" ");
};
console.log(formatNPCName("Goblin, Grunty"));

const parseDuration = (duration) => {
  let dur = duration.replace("h ", " ").replace("min", " ").trim("").split(" ");
  const durationObject = {
    hours: parseInt(dur[0]),
    minutes: parseInt(dur[1]),
  };
  return durationObject;
};
console.log(parseDuration("3h 45min"));

const getGameAcronym = (title) => {
  ///sol 1
  //let newArr = title.split(" ");
  // let acronym = "";
  // for (element of newArr) {
  //  acronym+=element[0];
  // }
  //return acronym

  ///sol 2
  return title
    .split(" ")
    .map((element) => element.charAt(0).toUpperCase())
    .join("");
};
console.log(getGameAcronym("Epic fantasy Battle"));

const getCharacterDetails = (character) => {
  console.log(character);
  let str = "";
  // str = character.reduce((str ,key) =>{
  //   let value =character[key]
  //   str+ key+": "+ value +", ";
  // },"");

  for (key in character) {
    let value = character[key];
    str += key + ": " + value + ", ";
  }
  str = str.replace("name: ", "").trim();
  return str.slice(0, str.length - 1);
};

console.log(
  getCharacterDetails({ name: "Iron Warrior", class: "Warrior", level: 10 })
);

const createSlug = (location) => {
  return location.toLowerCase().split(" ").join("-");
};
console.log(createSlug("Dark Forest"));

const trimDescription = (description, maxLength) => {
  let idx = description.lastIndexOf(" ", maxLength);
  return description.slice(0, idx);
};
console.log(
  trimDescription(
    "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.",
    50
  )
);

const splitMonsters = (monsters) => {
  return monsters.split(", ");
};

console.log(splitMonsters("Goblin, Orc, Dragon"));

const decodeSecret = (secret) => {
  const mapping = { 1: "i", 2: "b", 3: "e", 4: "a", 5: "e" };
  return secret.split("").map((char) => mapping[char] || char).join("");
};
console.log(decodeSecret("Th3 s3cr3t l1r3 1s und3r th3 br1dg3"));
