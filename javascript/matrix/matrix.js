//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.string = matrix;
  }

  get rows() {
    return this.string.split("\n").map((row) => row.split(' ').map(Number))
  }

  get columns() {
    return this.rows[0].map((_,i) => this.rows.map(r => r[i]))
  }
}