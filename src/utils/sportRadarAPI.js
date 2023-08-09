const TEAMS_URI = `http://api.sportradar.us/nfl/official/trial/v7/en/league/hierarchy.json?api_key=m4ba6ntt4qdy2c3rpjbafkm8`;

const endpointMethods = {
  getTeams: async () => {
    try {
      const response = await fetch(TEAMS_URI);
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getPlayerStats: async (playerId) => {
    // const PLAYER_STATS_URI = "https://random-data-api.com/api/v2/beers?size=10";
    const PLAYER_STATS_URI =
      "http://api.sportradar.us/nfl/official/trial/v7/en/players/" +
      playerId +
      "/profile.json?api_key=m4ba6ntt4qdy2c3rpjbafkm8";

    try {
      const response = await fetch(PLAYER_STATS_URI);
      return await response.json();
    } catch (error) {
      console.error("Error from sportRadarAPI file:", error);
    }
  },
};

module.exports = endpointMethods;
