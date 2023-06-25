import { describe, expect, test } from '@jest/globals';
import { Talent } from '../../../src/models/talent.model';

const velocity = 75;
const accelartion = 100;
const agility = 60;
const age = 20;
const height = 20;
const weight = 20;
const skillPoints = 181;
let talentSample = new Talent(
  velocity,
  accelartion,
  agility,
  age,
  height,
  weight,
  skillPoints
);

let talentSampleObject = talentSample.returnObject();

describe('talent model tests for talent properties', () => {
  test('can instantiate talent instance', () => {
    expect(typeof talentSample).toBe('object');
  });

  // talent property tests

  test('talent property has velocity property', () => {
    expect(talentSample.velocity).toBe(velocity);
  });

  test('talent property has acceleration property', () => {
    expect(talentSample.accelartion).toBe(accelartion);
  });

  test('talent property has agility property', () => {
    expect(talentSample.agility).toBe(agility);
  });

  test('talent property has age property', () => {
    expect(talentSample.age).toBe(age);
  });

  test('talent property has height property', () => {
    expect(talentSample.height).toBe(height);
  });

  test('talent property has weight property', () => {
    expect(talentSample.weight).toBe(weight);
  });

  test('talent property has skills property', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });
});

// talent method tests
describe('talent model tests for talent methods', () => {
  test('talent model returns a string representing letter grade', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });

  test('talent model returns a number representing percentage', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });

  test('talent model returns a number representing point total', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });

  test('example scenario returns a letter grade of A+', () => {
    expect(talentSampleObject.letter).toBe(skillPoints);
  });

  test('example scenario returns a 95.2 percentage', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });

  test('example scenario returns a 476 point total', () => {
    expect(talentSample.skill_points).toBe(skillPoints);
  });
});
