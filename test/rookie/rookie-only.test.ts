import { describe, expect, test } from '@jest/globals';
import { Rookie } from '../../src/models/rookie.model';

const depthChart = 85;

const rookieSample = new Rookie(depthChart);

const rookieObject = rookieSample.returnObject();

describe('opportunity tests that only apply for rookies', () => {
  test('grade object has opportunity property', () => {
    expect(rookieSample.depthChart).toBe(depthChart);
  });

  test('grade model depth chart method returns a grade for a player first in the depth chart', () => {
    expect(rookieObject.propertyValues.depthChart).toBe(depthChart);
  });
});
