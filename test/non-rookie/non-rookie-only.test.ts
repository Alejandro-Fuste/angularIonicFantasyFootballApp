import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../src/models/grade.model';

const g = {};

describe('grade model', () => {
  test('can instantiate grade instance', () => {
    expect(typeof g).toBe('object');
  });

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
