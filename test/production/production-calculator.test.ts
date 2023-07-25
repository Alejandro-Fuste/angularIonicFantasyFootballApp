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
      400, 500, 599,
    ],
    passing_touchdowns: [
      50, 48, 40, 45, 47, 30, 33, 39, 20, 25, 29, 10, 13, 19,
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

describe('production calculator tests', () => {
  // QB tests

  test('QB production calculator for 5013 passing yards returns 167', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[0])
    ).toBe(167);
  });

  test('QB production calculator for 5000 passing yards returns 167', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[1])
    ).toBe(167);
  });

  test('QB production calculator for 4500 passing yards returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[2])
    ).toBe(157);
  });

  test('QB production calculator for 4788 passing yards returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[3])
    ).toBe(157);
  });

  test('QB production calculator for 4999 passing yards returns 157', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[4])
    ).toBe(157);
  });

  test('QB production calculator for 4000 passing yards returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[5])
    ).toBe(147);
  });

  test('QB production calculator for 4327 passing yards returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[6])
    ).toBe(147);
  });

  test('QB production calculator for 4499 passing yards returns 147', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[7])
    ).toBe(147);
  });

  test('QB production calculator for 3500 passing yards returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[9])
    ).toBe(137);
  });

  test('QB production calculator for 3617 passing yards returns 137', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[10])
    ).toBe(137);
  });

  test('QB production calculator for 3999 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[11])
    ).toBe(127);
  });

  test('QB production calculator for 3000 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[12])
    ).toBe(127);
  });

  test('QB production calculator for 3288 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[13])
    ).toBe(127);
  });

  test('QB production calculator for 3499 passing yards returns 127', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[14])
    ).toBe(127);
  });

  test('QB production calculator for 1000 passing yards returns 110', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[15])
    ).toBe(110);
  });

  test('QB production calculator for 1345 passing yards returns 110', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[16])
    ).toBe(110);
  });

  test('QB production calculator for 2999 passing yards returns 110', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[17])
    ).toBe(110);
  });

  test('QB production calculator for 891 passing yards returns 99', () => {
    expect(
      ProductionCalculator.QB.passing_yards(testInputs.qb.passing[17])
    ).toBe(99);
  });
});
