const player = require("./data/gameData");

const getPlayerName = (player) => {
  return player.name;
};
console.log(getPlayerName(player));

const getPlayerHealth = (health) => {
  return health > 70 ? "High" : health > 40 ? "Medium" : "Low";
};
console.log(getPlayerHealth(player.health));

const getTotalInventoryValue = (items) => {
  return (
    "Total inventory value is " +
    items.reduce((accumulator, item) => {
      return accumulator + item.value;
    }, 0)
  );
};
// console.log(getTotalInventoryValue(player.items));

console.log(player.items);
let sortedItems = player.items.sort((a, b) => b.value - a.value);
console.log(sortedItems);

const getItemNames = (items) => {
  return items.map((item) => item.name);
};
console.log(getItemNames(player.items));