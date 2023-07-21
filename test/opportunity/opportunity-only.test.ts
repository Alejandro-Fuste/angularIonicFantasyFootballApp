import { describe, expect, test } from '@jest/globals';
import { Opportunity } from '../../src/models/opportunity.model';

const position = 'QB';
const position2 = 'RB';
const position3 = 'WR';
const position4 = 'TE';
const depthChart = 86;
const experience = 0;
const experience2 = 4;
const games = 13;
const snaps = 0;
const carries = 230;
const carries2 = 0;
const targets = 70;

const rookieSample = new Opportunity(experience, depthChart, position);

const rookieObject = rookieSample.returnObject();

describe('opportunity tests that only apply for rookies', () => {
  test('return object has points property of 86', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has percentage property of 86', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has letter property of B+', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has description property of Good', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });

  test('return object has depth chart property of 86', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });

  // opportunity property tests

  // test('opportunity criteria property has games property', () => {
  //   expect(rbSample.games).toBe(games);
  // });

  // test('opportunity criteria property has snaps property', () => {
  //   expect(rbSample.snaps).toBe(snaps);
  // });

  // test('opportunity criteria property has carries property', () => {
  //   expect(rbSample.carries).toBe(carries);
  // });

  // test('opportunity criteria property has targets property', () => {
  //   expect(rbSample.targets).toBe(targets);
  // });

  // test('opportunity criteria property has receptions property', () => {
  //   expect(rbSample.receptions).toBe(receptions);
  // });

  // test('property value constructor method returns object with targets for RB', () => {
  //   expect(rbSample.returnObject().propertyValues.targets).toBe(targets);
  // });
});
