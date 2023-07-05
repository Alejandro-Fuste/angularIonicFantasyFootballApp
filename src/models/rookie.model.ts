import { Grade } from './grade.model';

export class Rookie extends Grade {
  constructor(public depthChart: number) {
    super();

    this.depthChart = depthChart;
  }

  array: Array<number> = [this.depthChart];

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
