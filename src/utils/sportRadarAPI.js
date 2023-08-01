const fetchFunction = require("./fetchFunction");
const writeToFile = require("./writeToFile");
const TEAMS_URI =
  "http://api.sportradar.us/nfl/official/trial/v7/en/league/hierarchy.json?api_key=m4ba6ntt4qdy2c3rpjbafkm8";

const getTeams = async () => {
  try {
    const response = await fetch(TEAMS_URI);
    const teams = await response.json();

    if (response.ok) {
      console.log(teams);
      addTeams(teams);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

getTeams();
