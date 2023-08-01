const TEAMS_URI = `http://api.sportradar.us/nfl/official/trial/v7/en/league/hierarchy.json?api_key=m4ba6ntt4qdy2c3rpjbafkm8`;

const endpointMethods = {
  getTeams: async () => {
    try {
      const response = await fetch(TEAMS_URI);
      const teams = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  },
  getPlayerStats: async (playerId) => {
    const PLAYER_STATS_URI =
      "http://api.sportradar.us/nfl/official/trial/v7/en/players/" +
      playerId +
      "/profile.json?api_key=m4ba6ntt4qdy2c3rpjbafkm8";

    try {
      const response = await fetch(PLAYER_STATS_URI);
      const player = await response.json();

      if (response.ok) {
        console.log(player);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
};

module.exports = endpointMethods;
