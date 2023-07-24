import { describe, expect, test } from '@jest/globals';
import { Production } from '../../src/models/production.model';

const position = 'QB';
const position2 = 'RB';
const position3 = 'WR';
const position4 = 'TE';

const receptions = 55;
const receptions2 = 136;
const rushingYards = 95;
const rushingYards2 = 55;
const receivingYards = 55;
const receivingYards2 = 147;
const touchdowns = 3;
const touchdowns2 = 11;
const passingTouchdowns = 15;
const passingYards = 3015;

const qbSample = new Production(
  position,
  passingYards,
  rushingYards,
  undefined,
  passingTouchdowns,
  touchdowns,
  undefined
);

const rbSample = new Production(
  position2,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  touchdowns2,
  receptions
);

const wrSample = new Production(
  position3,
  undefined,
  rushingYards2,
  receivingYards2,
  undefined,
  touchdowns2,
  receptions2
);

const teSample = new Production(
  position4,
  undefined,
  rushingYards2,
  receivingYards2,
  undefined,
  touchdowns2,
  receptions2
);

const qbObject = qbSample.arrayConstructor('QB');
const qbArray = qbObject[6];

describe('production model tests', () => {
  // array constructor tests

  test('array constructor method returns array with passing_touchdowns RB', () => {
    console.log(qbObject);
    expect(qbArray).toBe(passingTouchdowns);
  });

  test('array constructor method returns array with RB touchdowns', () => {
    expect(rbSample.arrayConstructor('RB')[7]).toBe(touchdowns2);
  });

  // property value constructor tests

  test('property value constructor method returns object with passing_yards for QB', () => {
    console.log(qbSample.returnObject());
    expect(qbSample.returnObject().propertyValues.passing_yards).toBe(
      passingYards
    );
  });

  test('property value constructor method returns object with passing_touchdowns for QB', () => {
    expect(qbSample.returnObject().propertyValues.passing_touchdowns).toBe(
      passingTouchdowns
    );
  });

  test('property value constructor method returns object with rushing_yards for RB', () => {
    expect(rbSample.returnObject().propertyValues.rushing_yards).toBe(
      rushingYards
    );
  });

  test('property value constructor method returns object with receiving_yards for WR', () => {
    expect(wrSample.returnObject().propertyValues.receiving_yards).toBe(
      receivingYards
    );
  });

  test('property value constructor method returns object with touchdowns for TE', () => {
    console.log(teSample.returnObject());
    expect(teSample.returnObject().propertyValues.touchdowns).toBe(touchdowns2);
  });
});
