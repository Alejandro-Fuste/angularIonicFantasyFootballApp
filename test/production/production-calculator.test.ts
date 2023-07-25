import { describe, expect, test } from '@jest/globals';
import ProductionCalculator from '../../src/utils/productionCalculator';

const testInputs = {
  qb: {
    passing: [
      5013, 5000, 4500, 4788, 4999, 4000, 4327, 4499, 3500, 3617, 3999, 3000,
      3288, 3499, 1000, 1345, 2999, 891,
    ],
    rushing: [
      1123, 1000, 900, 951, 999, 800, 817, 899, 700, 742, 799, 600, 617, 699,
      400, 500, 599, 312,
    ],
    passing_touchdowns: [
      50, 48, 40, 45, 47, 30, 33, 39, 20, 25, 29, 10, 13, 19, 8,
    ],
    rushing_towndowns: [14, 12, 10, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  rb: {
    rushing: [
      1850, 1800, 1500, 1644, 1799, 1200, 1359, 1499, 900, 1045, 1199, 600, 756,
      899, 300, 455, 599,
    ],
    receiving: [
      1001, 900, 800, 856, 899, 700, 756, 799, 600, 656, 799, 500, 545, 599,
      400, 444, 499, 300,
    ],
    touchdowns: [
      27, 25, 20, 23, 24, 15, 16, 19, 10, 13, 14, 5, 7, 9, 2, 3, 4, 1,
    ],
    receptions: [
      111, 100, 90, 91, 99, 80, 84, 89, 70, 74, 79, 60, 64, 69, 50, 54, 59, 44,
    ],
  },
  wr_te: {
    receiving: [
      1990, 1850, 1549, 160, 1849, 1248, 1400, 1548, 1000, 1101, 1247, 800, 913,
      999, 500, 554, 799, 456,
    ],
    touchdowns: [22, 20, 15, 17, 19, 10, 12, 14, 5, 7, 9, 2, 3, 4, 1, 0],
    receptions: [
      141, 135, 114, 124, 134, 93, 107, 113, 72, 84, 92, 51, 60, 71, 30, 44, 50,
      25,
    ],
  },
};

const grades = {
  tier167: 167,
  tier157: 157,
  tier147: 147,
  tier137: 137,
  tier127: 127,
  tier117: 117,
  tier110: 110,
  tier99: 99,
  tier98: 98,
  tier166: 166,
  tier156: 156,
  tier146: 146,
  tier136: 136,
  tier126: 126,
  tier116: 116,
  tier125: 125,
  tier115: 115,
  tier105: 105,
  tier95: 95,
  tier85: 85,
  tier75: 75,
  tier55: 55,
};

describe('production calculator tests for qb passing_yards', () => {
  /********** QB Passing Yards **********/

  test('QB production calculator for 5013 passing yards returns 167', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[0])
    ).toBe(grades.tier167);
  });

  test('QB production calculator for 5000 passing yards returns 167', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[1])
    ).toBe(grades.tier167);
  });

  test('QB production calculator for 4500 passing yards returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[2])
    ).toBe(grades.tier157);
  });

  test('QB production calculator for 4788 passing yards returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[3])
    ).toBe(grades.tier157);
  });

  test('QB production calculator for 4999 passing yards returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[4])
    ).toBe(grades.tier157);
  });

  test('QB production calculator for 4000 passing yards returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[5])
    ).toBe(grades.tier147);
  });

  test('QB production calculator for 4327 passing yards returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[6])
    ).toBe(grades.tier147);
  });

  test('QB production calculator for 4499 passing yards returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[7])
    ).toBe(grades.tier147);
  });

  test('QB production calculator for 3500 passing yards returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[8])
    ).toBe(grades.tier137);
  });

  test('QB production calculator for 3617 passing yards returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[9])
    ).toBe(grades.tier137);
  });

  test('QB production calculator for 3999 passing yards returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[10])
    ).toBe(grades.tier137);
  });

  test('QB production calculator for 3000 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[11])
    ).toBe(grades.tier127);
  });

  test('QB production calculator for 3288 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[12])
    ).toBe(grades.tier127);
  });

  test('QB production calculator for 3499 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[13])
    ).toBe(grades.tier127);
  });

  test('QB production calculator for 1000 passing yards returns 110', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[14])
    ).toBe(grades.tier110);
  });

  test('QB production calculator for 1345 passing yards returns 110', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[15])
    ).toBe(grades.tier110);
  });

  test('QB production calculator for 2999 passing yards returns 110', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[16])
    ).toBe(grades.tier110);
  });

  test('QB production calculator for 891 passing yards returns 99', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[17])
    ).toBe(grades.tier99);
  });
});

describe('production calculator tests for qb rushing_yards', () => {
  /********** QB passing_touchdowns **********/

  test('QB production calculator for 1123 rushing yards returns 166', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[0])
    ).toBe(grades.tier166);
  });

  test('QB production calculator for 1000 rushing yards returns 166', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[1])
    ).toBe(grades.tier166);
  });

  test('QB production calculator for 900 rushing yards returns 156', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[2])
    ).toBe(grades.tier156);
  });

  test('QB production calculator for 951 rushing yards returns 156', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[3])
    ).toBe(grades.tier156);
  });

  test('QB production calculator for 999 rushing yards returns 156', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[4])
    ).toBe(grades.tier156);
  });

  test('QB production calculator for 800 rushing yards returns 146', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[5])
    ).toBe(grades.tier146);
  });

  test('QB production calculator for 817 rushing yards returns 146', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[6])
    ).toBe(grades.tier146);
  });

  test('QB production calculator for 899 rushing yards returns 146', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[7])
    ).toBe(grades.tier146);
  });

  test('QB production calculator for 700 rushing yards returns 136', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[8])
    ).toBe(grades.tier136);
  });

  test('QB production calculator for 742 rushing yards returns 136', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[9])
    ).toBe(grades.tier136);
  });

  test('QB production calculator for 799 rushing yards returns 136', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[10])
    ).toBe(grades.tier136);
  });

  test('QB production calculator for 600 rushing yards returns 126', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[11])
    ).toBe(grades.tier126);
  });

  test('QB production calculator for 617 rushing yards returns 126', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[12])
    ).toBe(grades.tier126);
  });

  test('QB production calculator for 699 rushing yards returns 126', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[13])
    ).toBe(grades.tier126);
  });

  test('QB production calculator for 400 rushing yards returns 116', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[14])
    ).toBe(grades.tier116);
  });

  test('QB production calculator for 500 rushing yards returns 116', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[15])
    ).toBe(grades.tier116);
  });

  test('QB production calculator for 599 rushing yards returns 116', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[16])
    ).toBe(grades.tier116);
  });

  test('QB production calculator for 312 rushing yards returns 99', () => {
    expect(
      ProductionCalculator.QB.rushing_yards(testInputs.qb.rushing[17])
    ).toBe(grades.tier99);
  });
});

describe('production calculator tests for qb passing_touchdowns', () => {
  /********** QB Passing Touchdowns **********/

  test('QB production calculator for 50 passing_touchdowns returns 167', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[0]
      )
    ).toBe(grades.tier167);
  });

  test('QB production calculator for 48 passing_touchdowns returns 167', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[1]
      )
    ).toBe(grades.tier167);
  });

  test('QB production calculator for 40 passing_touchdowns returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[2]
      )
    ).toBe(grades.tier157);
  });

  test('QB production calculator for 45 passing_touchdowns returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[3]
      )
    ).toBe(grades.tier157);
  });

  test('QB production calculator for 47 passing_touchdowns returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[4]
      )
    ).toBe(grades.tier157);
  });

  test('QB production calculator for 30 passing_touchdowns returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[5]
      )
    ).toBe(grades.tier147);
  });

  test('QB production calculator for 33 passing_touchdowns returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[6]
      )
    ).toBe(grades.tier147);
  });

  test('QB production calculator for 39 passing_touchdowns returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[7]
      )
    ).toBe(grades.tier147);
  });

  test('QB production calculator for 20 passing_touchdowns returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[8]
      )
    ).toBe(grades.tier137);
  });

  test('QB production calculator for 25 passing_touchdowns returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[9]
      )
    ).toBe(grades.tier137);
  });

  test('QB production calculator for 29 passing_touchdowns returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[10]
      )
    ).toBe(grades.tier137);
  });

  test('QB production calculator for 10 passing_touchdowns returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[11]
      )
    ).toBe(grades.tier127);
  });

  test('QB production calculator for 13 passing_touchdowns returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[12]
      )
    ).toBe(grades.tier127);
  });

  test('QB production calculator for 19 passing_touchdowns returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[13]
      )
    ).toBe(grades.tier127);
  });

  test('QB production calculator for 8 passing_touchdowns returns 99', () => {
    expect(
      ProductionCalculator.QB.passing_touchdowns(
        testInputs.qb.passing_touchdowns[14]
      )
    ).toBe(grades.tier99);
  });
});
