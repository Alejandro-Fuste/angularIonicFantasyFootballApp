export class Grade {
  constructor() {}

  sumCriteriaPoints(array: Array<number>): number {
    let sum = array.reduce((a, b) => a + b);
    return sum;
  }

  percentage(sum: number, total: number): number {
    let result = (sum / total) * 100;
    return parseFloat(result.toFixed(2));
  }

  criteriaGrade(value: number): { letter: string; description: string } {
    if (value >= 96) {
      return { letter: 'A+', description: 'Elite' };
    } else if (value >= 90 && value <= 95.99) {
      return { letter: 'A', description: 'Great' };
    } else if (value >= 86 && value <= 89.99) {
      return { letter: 'B+', description: 'Good' };
    } else if (value >= 80 && value <= 85.99) {
      return { letter: 'B', description: 'Above Average' };
    } else if (value >= 70 || value <= 79.99) {
      return { letter: 'C', description: 'Average' };
    } else if (value >= 60 || value <= 69.99) {
      return { letter: 'D', description: 'Good' };
    } else if (value > 59.99) {
      return { letter: 'F', description: 'Not Good Enough' };
    } else {
      return { letter: 'N/A', description: 'Could not calculate grade' };
    }
  }
}
