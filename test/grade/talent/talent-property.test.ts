import { describe, expect, test } from '@jest/globals';
import { Grade } from '../../../src/app/grades/grade.model';

const velocity = 75;
const accelartion = 100;
const agility = 60;
const age = 20;
const height = `6'1"`;
const weight = `210`;
const skillPoints = 181;
const g = new Grade(
  velocity,
  accelartion,
  agility,
  age,
  height,
  weight,
  skillPoints
);

describe('grade model tests for talent properties', () => {
  test('can instantiate grade instance', () => {
    expect(typeof g).toBe('object');
  });

  // talent subproperty tests

  test('talent property has velocity property', () => {
    expect(g.velocity).toBe(velocity);
  });

  test('talent property has acceleration property', () => {
    expect(g.accelartion).toBe(accelartion);
  });

  test('talent property has agility property', () => {
    expect(g.agility).toBe(agility);
  });

  test('talent property has age property', () => {
    expect(g.age).toBe(age);
  });

  test('talent property has height property', () => {
    expect(g.height).toBe(height);
  });

  test('talent property has weight property', () => {
    expect(g.weight).toBe(weight);
  });

  test('talent property has skills property', () => {
    expect(g.skill_points).toBe(skillPoints);
  });

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
