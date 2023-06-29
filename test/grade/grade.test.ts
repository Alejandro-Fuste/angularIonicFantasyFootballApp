import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../src/models/grade.model';

const g = {};

describe('grade model', () => {
  test('can instantiate grade instance', () => {
    expect(typeof g).toBe('object');
  });
});
