import { describe, expect, test } from '@jest/globals';
import { Talent } from '../../../src/models/talent.model';

const velocity = 75;
const accelartion = 100;
const agility = 60;
const age = 20;
const height = `6'1"`;
const weight = `210`;
const skillPoints = 181;
const g = new Talent(
  velocity,
  accelartion,
  agility,
  age,
  height,
  weight,
  skillPoints
);

describe('talent model tests for talent properties', () => {
  test('can instantiate talent instance', () => {
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
});
