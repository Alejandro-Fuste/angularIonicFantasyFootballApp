export default {
  QB: {
    passing_yards: (value: number): number => {
      if (value >= 5000) {
        return 167;
      } else if (value >= 4500 && value <= 4999) {
        return 157;
      } else if (value >= 4000 && value <= 4499) {
        return 147;
      } else if (value >= 3500 && value <= 3999) {
        return 137;
      } else if (value >= 3000 && value <= 3499) {
        return 127;
      } else if (value >= 1000 && value <= 2999) {
        return 110;
      } else {
        return 0;
      }
    },
    rushing_yards: (value) => {},
    passing_touchdowns: (value) => {},
    rushing_touchdowns: (value) => {},
  },
  RB: {
    rushing_yards: (value) => {},
    receiving_yards: (value) => {},
    touchdowns: (value) => {},
    receptions: (value) => {},
  },
  WR_TE: {
    receiving_yards: (value) => {},
    touchdowns: (value) => {},
    receptions: (value) => {},
  },
};
