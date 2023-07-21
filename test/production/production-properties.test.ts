import { describe, expect, test } from '@jest/globals';
import { NonRookie } from '../../src/models/production.model';

const position = 'QB';
const position2 = 'RB';
const position3 = 'WR';
const position4 = 'TE';
const games = 13;
const snaps = 0;
const carries = 230;
const targets = 70;
const receptions = 45;
const rushingYards = 1006;
const receivingYards = 353;
const rushingTouchdowns = 7;
const receivingTouchdowns = 3;
const passingTouchdowns = 15;
const passingYards = 3015;

const qbSample = new NonRookie(
  position,
  games,
  snaps,
  carries,
  targets,
  passingYards,
  rushingYards,
  undefined,
  passingTouchdowns,
  rushingTouchdowns,
  undefined,
  undefined
);

const rbSample = new NonRookie(
  position2,
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

const wrSample = new NonRookie(
  position3,
  games,
  snaps,
  undefined,
  targets,
  undefined,
  rushingYards,
  receivingYards,
  undefined,
  rushingTouchdowns,
  receivingTouchdowns,
  receptions
);

const teSample = new NonRookie(
  position4,
  games,
  snaps,
  undefined,
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
    expect(rbSample.games).toBe(games);
  });

  test('opportunity criteria property has snaps property', () => {
    expect(rbSample.snaps).toBe(snaps);
  });

  test('opportunity criteria property has carries property', () => {
    expect(rbSample.carries).toBe(carries);
  });

  test('opportunity criteria property has targets property', () => {
    expect(rbSample.targets).toBe(targets);
  });

  test('opportunity criteria property has receptions property', () => {
    expect(rbSample.receptions).toBe(receptions);
  });

  // production property tests

  // QB

  test('QB production criteria property has passing yards property', () => {
    expect(qbSample.passing_yards).toBe(passingYards);
  });

  test('QB production criteria property has passing touchdowns property', () => {
    expect(qbSample.passing_touchdowns).toBe(passingTouchdowns);
  });

  test('QB production criteria property has rushing yards property', () => {
    expect(qbSample.rushing_yards).toBe(rushingYards);
  });

  test('QB production criteria property has rushing touchdowns property', () => {
    expect(qbSample.rushing_touchdowns).toBe(rushingTouchdowns);
  });

  // RB

  test('RB production criteria property has rushing yards property', () => {
    expect(rbSample.rushing_yards).toBe(rushingYards);
  });

  test('RB production criteria property has receiving yards property', () => {
    expect(rbSample.receiving_yards).toBe(receivingYards);
  });

  test('RB production criteria property has rushing touchdowns property', () => {
    expect(rbSample.rushing_touchdowns).toBe(rushingTouchdowns);
  });

  test('RB production criteria property has receiving touchdowns property', () => {
    expect(rbSample.receiving_touchdowns).toBe(receivingTouchdowns);
  });

  test('RB production criteria property has receptions property', () => {
    expect(rbSample.receptions).toBe(receptions);
  });

  // WR

  test('WR production criteria property has rushing yards property', () => {
    expect(wrSample.rushing_yards).toBe(rushingYards);
  });

  test('WR production criteria property has receiving yards property', () => {
    expect(wrSample.receiving_yards).toBe(receivingYards);
  });

  test('WR production criteria property has rushing touchdowns property', () => {
    expect(wrSample.rushing_touchdowns).toBe(rushingTouchdowns);
  });

  test('WR production criteria property has receiving touchdowns property', () => {
    expect(wrSample.receiving_touchdowns).toBe(receivingTouchdowns);
  });

  test('WR production criteria property has receptions property', () => {
    expect(wrSample.receptions).toBe(receptions);
  });

  // TE

  test('TE production criteria property has rushing yards property', () => {
    expect(teSample.rushing_yards).toBe(rushingYards);
  });

  test('TE production criteria property has receiving yards property', () => {
    expect(teSample.receiving_yards).toBe(receivingYards);
  });

  test('TE production criteria property has rushing touchdowns property', () => {
    expect(teSample.rushing_touchdowns).toBe(rushingTouchdowns);
  });

  test('TE production criteria property has receiving touchdowns property', () => {
    expect(teSample.receiving_touchdowns).toBe(receivingTouchdowns);
  });

  test('TE production criteria property has receptions property', () => {
    expect(teSample.receptions).toBe(receptions);
  });
});
