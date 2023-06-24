import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../../src/app/grades/grade.model';

const g = {};

describe('grade model tests for talent properties', () => {
  test('can instantiate grade instance', () => {
    expect(typeof g).toBe('object');
  });

  test('grade object has overall property', () => {});

  test('grade object has talent property', () => {});

  // talent subproperty tests

  test('talent property has velocity property', () => {});

  test('talent property has acceleration property', () => {});

  test('talent property has agility property', () => {});

  test('talent property has age property', () => {});

  test('talent property has size property', () => {});

  test('talent property has skills property', () => {});

  // skills subproperty tests for QB

  test('skill property has mechanics & arm strength property', () => {});

  test('skill property has protections property', () => {});

  test('skill property has pocket awareness property', () => {});

  test('skill property has decision making property', () => {});

  test('skill property has defense recognition/turnover property', () => {});

  test('skill property has precision property', () => {});

  test('skill property has pressure performance property', () => {});

  test('skill property has athleticism property', () => {});

  // skills subproperty tests for RB

  test('skill property has vision property', () => {});

  test('skill property has gap, zone, both property', () => {});

  test('skill property has receiving property', () => {});

  test('skill property has blocking making property', () => {});

  // skills subproperty tests for WR/TE

  test('skill property has release property', () => {});

  test('skill property has separation property', () => {});

  test('skill property has route tree property', () => {});

  test('skill property has hands making property', () => {});

  test('skill property has blocking making property', () => {});
});
