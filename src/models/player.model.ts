export class Player {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public position: string,
    public team: string,
    public age: number,
    public height: string,
    public weight: string,
    public yearsExp: number,
    public depthChartOrder: number,
    public grades: object
  ) {}
}
