import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../../src/models/talent.model';

const g = {};

describe('grade model', () => {
  test('can instantiate grade instance', () => {
    expect(typeof g).toBe('object');
  });

  test('grade object has production property', () => {});

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

  // offense criteria property tests

  test('offense criteria property has quarterback property', () => {});

  test('offense criteria property has offensive coordinator property', () => {});

  test('offense criteria property has offensive line property', () => {});

  test('offense criteria total grade methods returns a number grade', () => {});

  // opportunity property tests

  test('opportunity criteria property has games subproperty', () => {});

  test('opportunity criteria property has snaps subproperty', () => {});

  test('opportunity criteria property has carries subproperty', () => {});

  test('opportunity criteria property has targets subproperty', () => {});

  test('opportunity criteria property has receptions subproperty', () => {});

  // production property tests

  test('production criteria property has games subproperty', () => {});

  test('production criteria property has snaps subproperty', () => {});

  test('production criteria property has carries subproperty', () => {});

  test('production criteria property has targets subproperty', () => {});

  test('production criteria property has receptions subproperty', () => {});
});
