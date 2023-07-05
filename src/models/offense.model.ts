import { Grade } from './grade.model';

export class Offense extends Grade {
  constructor(
    public quarterback: number,
    public offensive_coordinator: number,
    public offensive_line: number
  ) {
    super();

    this.quarterback = quarterback;
    this.offensive_coordinator = offensive_coordinator;
    this.offensive_line = offensive_line;
  }
}
