import { Grade } from './grade.model';

export class NonRookie extends Grade {
  constructor(
    public position: string,
    public games: number,
    public snaps: number,
    public carries?: number,
    public targets?: number,
    public passing_yards?: number,
    public rushing_yards?: number,
    public receiving_yards?: number,
    public passing_touchdowns?: number,
    public rushing_touchdowns?: number,
    public receiving_touchdowns?: number,
    public receptions?: number
  ) {
    super();

    this.position = position;
    this.games = games;
    this.snaps = snaps;
    this.carries = carries;
    this.targets = targets;
    this.passing_yards = passing_yards;
    this.rushing_yards = rushing_yards;
    this.receiving_yards = receiving_yards;
    this.passing_touchdowns = passing_touchdowns;
    this.rushing_touchdowns = rushing_touchdowns;
    this.receiving_touchdowns = receiving_touchdowns;
    this.receptions = receptions;
  }
}
