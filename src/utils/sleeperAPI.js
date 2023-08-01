const writeToFile = require("./writeToFile");

const BASE_URI = "https://api.sleeper.app/v1/players/nfl";

const getPlayers = async () => {
  const response = await fetch(BASE_URI);
  const players = await response.json();
  console.log(players);

  writeToFile("../data/players/players.json", JSON.stringify(players));
};

getPlayers();
