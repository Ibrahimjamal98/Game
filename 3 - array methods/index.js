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

// ["Hero - Level 1", "Warrior - Level 2"]

const playerNamesAndLevels = (players) => {
  return players.map((player) => {
    return player.name + " - Level " + player.level;
  });
};
console.log(
  playerNamesAndLevels([
    { name: "Hero", level: 1 },
    { name: "Warrior", level: 2 },
  ])
);
console.log(playerNamesAndLevels(players));

const updatePlayerHealth = (players, newHealth, playerName) => {
  players.map((player) => {
    if (player.name === playerName) {
      player.health = newHealth;
    }
  });
  return players;
};

console.log(
  updatePlayerHealth(
    [
      { name: "Hero", health: 100 },
      { name: "Warrior", health: 120 },
    ],
    (newHealth = 150),
    (playerName = "Hero")
  )
);
// console.log(updatePlayerHealth(players, (newHealth = 150), (playerName = "Hero")));
// console.log(players)

const filterPlayersByLocation = (players, location) => {
  return players.filter((player) => {
    return player.location === location;
  });
};
console.log(
  filterPlayersByLocation(
    [{ location: "forest" }, { location: "mountain" }, { location: "castle" }],
    (location = "forest")
  )
);
// console.log(filterPlayersByLocation(players, (location = "forest")));

const getAveragePlayerLevel = (players) => {
  return parseInt(
    players.reduce((accumulator, player) => {
      return accumulator + player.level;
    }, 0) / players.length
  );
};
// console.log(getAveragePlayerLevel(players));
console.log(getAveragePlayerLevel([{ level: 1 }, { level: 2 }, { level: 3 }]));

const sortPlayersbyHealth = (players) => {
  return players.sort((a, b) => b.health - a.health);
};
console.log(
  sortPlayersbyHealth([{ health: 100 }, { health: 120 }, { health: 80 }])
);

const retrievePlayerInventories = (players) => {
  return players.map((player) => {
    return player.inventory;
  });
};

console.log(retrievePlayerInventories(players));
