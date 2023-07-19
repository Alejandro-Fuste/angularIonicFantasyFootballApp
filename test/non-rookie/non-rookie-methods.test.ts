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

const wrSample = new NonRookie(
  position,
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
  position,
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
