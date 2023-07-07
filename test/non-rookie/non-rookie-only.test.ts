import { describe, expect, test } from '@jest/globals';
import { NonRookie } from '../../src/models/nonRookie.model';

const position = 'RB';
const games = 13;
const snaps = 0;
const carries = 230;
const targets = 70;
const receptions = 45;
const rushingYards = 1006;
const receivingYards = 353;
const rushingTouchdowns = 7;
const receivingTouchdowns = 3;

const nonRookieSample = new NonRookie(
  position,
  games,
  snaps,
  carries,
  targets,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  rushingTouchdowns,
  receivingTouchdowns,
  receptions
);

describe('non-rookie model tests', () => {
  // opportunity property tests

  test('opportunity criteria property has games property', () => {
    expect(nonRookieSample.games).toBe(games);
  });

  test('opportunity criteria property has snaps property', () => {
    expect(nonRookieSample.snaps).toBe(snaps);
  });

  test('opportunity criteria property has carries property', () => {
    expect(nonRookieSample.carries).toBe(carries);
  });

  test('opportunity criteria property has targets property', () => {
    expect(nonRookieSample.targets).toBe(targets);
  });

  test('opportunity criteria property has receptions property', () => {
    expect(nonRookieSample.receptions).toBe(receptions);
  });

  // production property tests

  // RB

  test('RB production criteria property has rushing yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('RB production criteria property has receiving yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('RB production criteria property has rushing touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('RB production criteria property has receiving touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('RB production criteria property has receptions property', () => {
    expect(offenseObject.points).toBe(games);
  });

  // QB

  test('QB production criteria property has passing yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('QB production criteria property has passing touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('QB production criteria property has rushing yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('QB production criteria property has passing touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  // WR

  test('WR production criteria property has rushing yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('WR production criteria property has receiving yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('WR production criteria property has rushing touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('WR production criteria property has receiving touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('WR production criteria property has receptions property', () => {
    expect(offenseObject.points).toBe(games);
  });

  // TE

  test('TE production criteria property has rushing yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('TE production criteria property has receiving yards property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('TE production criteria property has rushing touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('TE production criteria property has receiving touchdowns property', () => {
    expect(offenseObject.points).toBe(games);
  });

  test('TE production criteria property has receptions property', () => {
    expect(offenseObject.points).toBe(games);
  });
});
