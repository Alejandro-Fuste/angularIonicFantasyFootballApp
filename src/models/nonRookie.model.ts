import { Grade } from './grade.model';

interface NonRookieProps {
  position: string;
  games: number;
  snaps: number;
  carries?: number;
  targets?: number;
  passing_yards?: number;
  rushing_yards?: number;
  receiving_yards?: number;
  passing_touchdowns?: number;
  rushing_touchdowns?: number;
  receiving_touchdowns?: number;
  receptions?: number;
}

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

  possibleTotalPoints: number = 0;

  baseArray: Array<number | undefined> = [
    this.games,
    this.snaps,
    this.carries,
    this.rushing_yards,
    this.rushing_touchdowns,
  ];

  baseObject: any = {
    games: this.games,
    snaps: this.snaps,
    carries: this.carries,
    rushing_yards: this.rushing_yards,
    rushing_touchdowns: this.rushing_touchdowns,
  };

  arrayConstructor(position: string): Array<number | undefined> {
    let array!: Array<number | undefined>;
    if (position === 'QB') {
      array = [...this.baseArray, this.passing_yards, this.passing_touchdowns];
    } else if (position === 'RB') {
      array = [
        ...this.baseArray,
        this.targets,
        this.receiving_yards,
        this.receiving_touchdowns,
        this.receptions,
      ];
    } else if (position === 'WR') {
      array = [
        ...this.baseArray,
        this.targets,
        this.receiving_yards,
        this.receiving_touchdowns,
        this.receptions,
      ];
    } else if (position === 'TE') {
      array = [
        ...this.baseArray,
        this.targets,
        this.receiving_yards,
        this.receiving_touchdowns,
        this.receptions,
      ];
    }
    return (array = []);
  }

  propertyValueConstructor(position: string): NonRookieProps {
    let object!: NonRookieProps;
    if (position === 'QB') {
      object = {
        ...this.baseObject,
        passing_yards: this.passing_yards,
        passing_touchdowns: this.passing_touchdowns,
      };
    } else if (position === 'RB') {
      object = {
        ...this.baseObject,
        targets: this.targets,
        receiving_yards: this.receiving_yards,
        receiving_touchdowns: this.receiving_touchdowns,
        receptions: this.receptions,
      };
    } else if (position === 'WR') {
      object = {
        ...this.baseObject,
        targets: this.targets,
        receiving_yards: this.receiving_yards,
        receiving_touchdowns: this.receiving_touchdowns,
        receptions: this.receptions,
      };
    } else if (position === 'TE') {
      object = {
        ...this.baseObject,
        targets: this.targets,
        receiving_yards: this.receiving_yards,
        receiving_touchdowns: this.receiving_touchdowns,
        receptions: this.receptions,
      };
    }
    return (object = { ...this.baseObject });
  }

  array: Array<number | undefined> = this.arrayConstructor(this.position);

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number | string;
    propertyValues: NonRookieProps;
  } {
    let percentage = super.percentage(
      super.sumCriteriaPoints(this.array),
      this.possibleTotalPoints
    );

    let letterObject = super.criteriaGrade(percentage);

    return {
      points: super.sumCriteriaPoints(this.array),
      percentage,
      letter: letterObject.letter,
      description: letterObject.description,
      propertyValues: this.propertyValueConstructor(this.position),
    };
  }
}
