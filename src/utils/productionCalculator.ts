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
    rushing_yards: (value: number): number => {
      if (value >= 1000) {
        return 166;
      } else if (value >= 900 && value <= 999) {
        return 156;
      } else if (value >= 800 && value <= 899) {
        return 146;
      } else if (value >= 700 && value <= 799) {
        return 136;
      } else if (value >= 600 && value <= 699) {
        return 126;
      } else if (value >= 400 && value <= 599) {
        return 116;
      } else {
        return 0;
      }
    },
    passing_touchdowns: (value: number): number => {
      if (value >= 48) {
        return 167;
      } else if (value >= 40 && value <= 47) {
        return 157;
      } else if (value >= 30 && value <= 39) {
        return 147;
      } else if (value >= 20 && value <= 29) {
        return 137;
      } else if (value >= 10 && value <= 19) {
        return 110;
      } else {
        return 0;
      }
    },
    rushing_touchdowns: (value: number): number => {
      if (value >= 12) {
        return 167;
      } else if (value >= 10 && value <= 11) {
        return 157;
      } else if (value >= 8 && value <= 9) {
        return 147;
      } else if (value >= 6 && value <= 7) {
        return 137;
      } else if (value >= 2 && value <= 4) {
        return 110;
      } else {
        return 0;
      }
    },
  },
  RB: {
    rushing_yards: (value: number): number => {},,
    receiving_yards: (value: number): number => {},,
    touchdowns: (value: number): number => {},,
    receptions: (value: number): number => {},,
  },
  WR_TE: {
    receiving_yards: (value: number): number => {},,
    touchdowns: (value: number): number => {},,
    receptions: (value: number): number => {},,
  },
};
