const players = require("./data/mockDataRPG");

// console.log(players);

const playerNames = (playersObj) => {
  let playerNames = [];
  for (player of playersObj) {
    playerNames.push(player.name);
  }
  return playerNames;
};
// console.log(playerNames(players));

const playerNames2 = (players) => {
  return players.map((player) => player.name);
};
console.log(playerNames2(players));

const filterByLevel = (players, minLevel) => {
  return players.filter((player) => player.level >= minLevel);
};
console.log(
  filterByLevel([{ level: 1 }, { level: 2 }, { level: 3 }], (minLevel = 2))
);
// console.log(
//   filterByLevel(players, (minLevel = 2))
// );

const calculateTotalHealth = (players) => {
  return players.reduce((accumulator, player) => {
    return accumulator + player.health;
  }, 0);
};
console.log(
  calculateTotalHealth([{ health: 100 }, { health: 120 }, { health: 80 }])
);
// console.log(
//   calculateTotalHealth(players)
// );
