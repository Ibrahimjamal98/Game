const players = [
    {
      name: "Hero",
      health: 100,
      level: 1,
      location: "forest",
      inventory: ["sword", "health potion"],
    },
    {
      name: "Warrior",
      health: 120,
      level: 2,
      location: "mountain",
      inventory: ["axe", "shield"],
    },
    {
      name: "Mage",
      health: 80,
      level: 3,
      location: "castle",
      inventory: ["staff", "spell book"],
    },
    {
      name: "Ranger",
      health: 90,
      level: 2,
      location: "forest",
      inventory: ["bow", "arrows"],
    },
    {
      name: "Thief",
      health: 70,
      level: 1,
      location: "cave",
      inventory: ["dagger", "lockpick"],
    },
  ];

const playerNames= players.map(player =>{
    return player.name; 
}); 

const requiredLevel= n => players.filter(player=> player.level >=n ); 


const totalHealth =players.reduce((acc,element)=> acc+=element.health, 0); 


const playerInfo= players.map(player => `${player.name} - Level ${player.level}`);


const updateHealth =(Name,newHealth)=> players.map( player =>
      Name === player.name ? {...player, health:newHealth} : player
); 


const locationFilter= location => players.filter(element => location === element .location); 


const averageLevel= players.reduce((acc,player)=> acc+=player.level/players.length  ,0)



const sortPlayersByHealth = [...players].sort((a, b) => b.health - a.health);



const retrievePlayerInventory = players.map(player => player.inventory); 


console.log(retrievePlayerInventory);

