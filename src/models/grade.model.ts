export class Grade {
  constructor() {}

  sumCriteriaPoints(array: Array<number>): number {
    let sum = array.reduce((a, b) => a + b);
    return sum;
  }

  criteriaGrade(totalPossiblePoints: number): object {
    return {};
  }
}
