// const filteredPlayers = require("../players/filteredPlayers.json");
const productionAPI = require("../../utils/sportRadarAPI");
const writeToFile = require("../../utils/writeToFile");

// get previous year
const date = new Date();
const previousYear = date.getFullYear() - 1;

// create new map to add objects
const playersProductionMap = new Map();

const filteredPlayers = {
  "Justin Jefferson": {
    full_name: "Justin Jefferson",
    first_name: "Justin",
    last_name: "Jefferson",
    sportradar_id: "4131d4ee-0318-4bb5-832a-4dec80668a4f",
    position: "WR",
    team: "MIN",
    age: 24,
    birth_date: "1999-06-16",
    height: "73",
    weight: "195",
    years_exp: 3,
    status: "Active",
  },
  "Justin Herbert": {
    full_name: "Justin Herbert",
    first_name: "Justin",
    last_name: "Herbert",
    sportradar_id: "f0a8f8e3-b9e9-46ed-85e4-eec6452a8a44",
    position: "QB",
    team: "LAC",
    age: 25,
    birth_date: "1998-03-10",
    height: "78",
    weight: "236",
    years_exp: 3,
    status: "Active",
  },
};

// make api call and write to json file
async function getAndWriteData(id) {
  let data = await productionAPI.getPlayerStats(id);
  writeToFile("./playersProduction.json", JSON.stringify(data, null, " "));
}

// loop through filtered players
for (const property in filteredPlayers) {
  // only get previous year production

  // make api call
  getAndWriteData(filteredPlayers[property]["sportradar_id"]);
}

// add production info to existing info
// playersProductionMap.set(filteredPlayers[property]["full_name"], data);

// convert map to json
// let obj = Object.fromEntries(playersProductionMap);
// let jsonString = JSON.stringify(obj, null, " ");

// write json to new file
// writeToFile("./playersProduction.json", jsonString);
