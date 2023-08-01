const playerList = require("./players.json");
const writeToFile = require("../../utils/writeToFile");
const endpointMethods = require("../../utils/sportRadarAPI");

// for (const property in playerList) {
//   console.log(`${property}: ${playerList[property]}`);
// }

const playerList2 = {
  1: {
    injury_start_date: null,
    status: "Inactive",
    practice_participation: null,
    hashtag: "#gjkinne-NFL-FA-2",
    weight: "234",
    number: 2,
    gsis_id: null,
    birth_date: "1988-12-01",
    age: 28,
    espn_id: 15299,
    depth_chart_position: null,
    position: "QB",
    birth_city: null,
    player_id: "1",
    depth_chart_order: null,
    birth_country: null,
    search_last_name: "kinne",
    news_updated: null,
    high_school: null,
    swish_id: null,
    injury_notes: null,
    years_exp: 1,
    injury_body_part: null,
    first_name: "GJ",
    birth_state: null,
    pandascore_id: null,
    search_full_name: "gjkinne",
    search_rank: 9999999,
    yahoo_id: 26154,
    rotoworld_id: null,
    injury_status: null,
    sport: "nfl",
    last_name: "Kinne",
    college: "Tulsa",
    metadata: null,
    stats_id: 399453,
    full_name: "GJ Kinne",
    rotowire_id: 8833,
    sportradar_id: "a668bd7d-56e5-45ff-a2c8-d618cd1fef95",
    search_first_name: "gj",
    team: null,
    height: "6'2\"",
    practice_description: null,
    active: false,
    fantasy_positions: ["QB"],
    fantasy_data_id: 18,
  },
  2: {
    injury_start_date: null,
    status: "Inactive",
    practice_participation: null,
    hashtag: "#jeremyzuttah-NFL-FA-64",
    weight: "300",
    number: 64,
    gsis_id: null,
    birth_date: "1986-06-01",
    age: 34,
    espn_id: 11317,
    depth_chart_position: null,
    position: "C",
    birth_city: null,
    player_id: "2",
    depth_chart_order: null,
    birth_country: null,
    search_last_name: "zuttah",
    news_updated: null,
    high_school: "Stevens (NJ)",
    swish_id: null,
    injury_notes: null,
    years_exp: 12,
    injury_body_part: null,
    first_name: "Jeremy",
    birth_state: null,
    pandascore_id: null,
    search_full_name: "jeremyzuttah",
    search_rank: 9999999,
    yahoo_id: 8860,
    rotoworld_id: 4836,
    injury_status: null,
    sport: "nfl",
    last_name: "Zuttah",
    college: "Rutgers",
    metadata: null,
    stats_id: null,
    full_name: "Jeremy Zuttah",
    rotowire_id: 5809,
    sportradar_id: "fcaa51ea-0923-4afc-a7cf-22e47a14acf4",
    search_first_name: "jeremy",
    team: null,
    height: "6'4\"",
    practice_description: null,
    active: false,
    fantasy_positions: ["OL"],
    fantasy_data_id: 127,
  },
  3: {
    injury_start_date: null,
    status: "Inactive",
    practice_participation: null,
    hashtag: "#davidharris-NFL-FA-45",
    weight: "250",
    number: 45,
    gsis_id: null,
    birth_date: "1984-01-21",
    age: 36,
    espn_id: 10491,
    depth_chart_position: null,
    position: "LB",
    birth_city: null,
    player_id: "3",
    depth_chart_order: null,
    birth_country: null,
    search_last_name: "harris",
    news_updated: 1519421401244,
    high_school: "Ottawa Hills (MI)",
    swish_id: null,
    injury_notes: null,
    years_exp: 13,
    injury_body_part: null,
    first_name: "David",
    birth_state: null,
    pandascore_id: null,
    search_full_name: "davidharris",
    search_rank: 9999999,
    yahoo_id: 8301,
    rotoworld_id: 4197,
    injury_status: null,
    sport: "nfl",
    last_name: "Harris",
    college: "Michigan",
    metadata: null,
    stats_id: 215498,
    full_name: "David Harris",
    rotowire_id: 5342,
    sportradar_id: "c348bf8a-bc99-45fb-b1c8-04f487418d3c",
    search_first_name: "david",
    team: null,
    height: "6'2\"",
    practice_description: null,
    active: false,
    fantasy_positions: ["LB"],
    fantasy_data_id: 184,
  },
};

for (const property in playerList2) {
  console.log(`${property}: ${playerList2[property]["full_name"]}`);
  console.log(`${property}: ${playerList2[property]["position"]}`);
  console.log(`${property}: ${playerList2[property]["sportradar_id"]}`);
  console.log(`${property}: ${playerList2[property]["first_name"]}`);
  console.log(`${property}: ${playerList2[property]["last_name"]}`);
  console.log(`${property}: ${playerList2[property]["team"]}`);
  console.log(`${property}: ${playerList2[property]["age"]}`);
  console.log(`${property}: ${playerList2[property]["birth_date"]}`);
  console.log(`${property}: ${playerList2[property]["height"]}`);
  console.log(`${property}: ${playerList2[property]["weight"]}`);
  console.log(`${property}: ${playerList2[property]["years_exp"]}`);
}

// endpointMethods.getPlayerStats("4131d4ee-0318-4bb5-832a-4dec80668a4f");

/*

    "sportradar_id": "1111"
    “first_name”:  “John”,
		“last_name”:  “Doe”,
		“position”: “QB”,
		“team”: “NE”,
		“age”: 21,
		“height”: “6’4\””,
		“weight”: “220”
		“years_exp”: 14,
		“depth_chart_order”: 1
    "grades": {}

*/
