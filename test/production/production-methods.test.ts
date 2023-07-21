import { describe, expect, test } from '@jest/globals';
import { Production } from '../../src/models/production.model';

const position = 'QB';
const position2 = 'RB';
const position3 = 'WR';
const position4 = 'TE';

const receptions = 45;
const rushingYards = 1006;
const receivingYards = 353;
const rushingTouchdowns = 7;
const receivingTouchdowns = 3;
const passingTouchdowns = 15;
const passingYards = 3015;

const qbSample = new Production(
  position,
  passingYards,
  rushingYards,
  undefined,
  passingTouchdowns,
  rushingTouchdowns,
  undefined,
  undefined
);

const rbSample = new Production(
  position2,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  rushingTouchdowns,
  receivingTouchdowns,
  receptions
);

const wrSample = new Production(
  position3,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  rushingTouchdowns,
  receivingTouchdowns,
  receptions
);

const teSample = new Production(
  position4,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  rushingTouchdowns,
  receivingTouchdowns,
  receptions
);

const qbObject = qbSample.arrayConstructor('QB');
const qbArray = qbObject[6];

describe('production model tests', () => {
  // array constructor tests

  test('array constructor method returns array with passing_touchdowns RB', () => {
    console.log(qbObject);
    expect(qbArray).toBe(passingTouchdowns);
  });

  test('array constructor method returns array with receiving_touchdowns RB', () => {
    expect(rbSample.arrayConstructor('RB')[7]).toBe(receivingTouchdowns);
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
    expect(teSample.returnObject().propertyValues.receiving_touchdowns).toBe(
      receivingTouchdowns
    );
  });
});
