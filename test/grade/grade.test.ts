import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../src/models/grade.model';

const gradeObject = new Grade();

let badInput1 = gradeObject.badInput(undefined);

let badInput2 = gradeObject.badInput('');

let testObject = {
  zero: 0,
};

describe('grade model tests', () => {
  test('badInput method returns 0 for missing input', () => {
    expect(badInput1).toBe(testObject.zero);
  });

  test('badInput method returns 0 for string input', () => {
    expect(badInput2).toBe(testObject.zero);
  });
});
