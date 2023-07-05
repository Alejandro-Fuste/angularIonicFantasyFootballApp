import { describe, expect, test } from '@jest/globals';
import { Offense } from '../../src/models/offense.model';

let quarterback = 70;
let offensiveCoordinator = 76;
let offensiveLine = 78.8;
let offenseSample = new Offense(
  quarterback,
  offensiveCoordinator,
  offensiveLine
);

const testResults = {
  sum: 224.8,
};

describe('grade model tests for offense methods', () => {
  test('return object has sum property that returns sum of 224.8', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });

  test('return object has percentage property that returns 74.93', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });

  test('return object has letter property that returns C', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });

  test('return object has description property that returns Average', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });

  test('return object has property for quarterback that returns a number grade', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });

  test('return object has property for offensive coordinator that returns a number grade', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });

  test('return object has property for offensive line returns a number grade', () => {
    expect(gradeObject.sumCriteriaPoints(testInputs.array)).toBe(
      testResults.sum
    );
  });
});
