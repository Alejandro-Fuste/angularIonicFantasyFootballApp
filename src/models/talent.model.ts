import { Grade } from './grade.model';

export class Talent extends Grade {
  constructor(
    public velocity: number,
    public accelartion: number,
    public agility: number,
    public age: number,
    public height: number,
    public weight: number,
    public skill_points: number
  ) {
    super();

    this.velocity = velocity;
    this.accelartion = accelartion;
    this.agility = agility;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.skill_points = skill_points;
  }

  array: Array<number> = [
    this.velocity,
    this.accelartion,
    this.agility,
    this.age,
    this.height,
    this.weight,
    this.skill_points,
  ];

  possibleTotalPoints: number = 550;

  sumPoints(array: Array<number>): number {
    return super.sumCriteriaPoints(array);
  }

  gradeObject(): object {
    return {};
  }
}

// method to return letter grade and points for talent property
