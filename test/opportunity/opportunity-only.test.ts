import { describe, expect, test } from '@jest/globals';
import { Rookie } from '../../src/models/rookie.model';

const depthChart = 86;

const rookieSample = new Rookie(depthChart);

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
});
