export class Talent {
  constructor(
    public velocity: number,
    public accelartion: number,
    public agility: number,
    public age: number,
    public height: string,
    public weight: string,
    public skill_points: number
  ) {
    this.velocity = velocity;
    this.accelartion = accelartion;
    this.agility = agility;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.skill_points = skill_points;
  }
}
// velocity points method -> converts velocity to points

// accelartion points method -> converts accelartion to points

// agility points method -> converts agility to points

// age points method -> converts age to points

// height grade method -> converts height input to points

// weight grade method -> converts weight input to points
