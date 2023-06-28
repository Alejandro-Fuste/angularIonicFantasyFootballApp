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

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number;
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
    };
  }
}
