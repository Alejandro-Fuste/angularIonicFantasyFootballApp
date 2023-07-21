import { Grade } from './grade.model';

export class Opportunity extends Grade {
  constructor(
    public experience: number,
    public depthChart: number,
    public position: string,
    public games?: number,
    public snaps?: number,
    public carries?: number,
    public targets?: number
  ) {
    super();

    this.experience = experience;
    this.depthChart = depthChart;
    this.position = position;
    this.games = games;
    this.snaps = snaps;
    this.carries = carries;
    this.targets = targets;
  }

  array: Array<number | undefined> = [
    this.depthChart,
    this.games,
    this.snaps,
    this.carries,
  ];

  possibleTotalPoints: number = 100;

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number | string;
    propertyValues: {
      depthChart: number;
    };
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
      propertyValues: {
        depthChart: this.depthChart,
      },
    };
  }
}
