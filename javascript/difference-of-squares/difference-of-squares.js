//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num;
    this._sum = 0;
    this._square = 0;
  }

  get sumOfSquares() {
    for(let i=0; i<this.num+1; i++){
      this._sum = this._sum + Math.pow(i,2)
    } return this._sum  }

  get squareOfSum() {
    for(let i=0; i<this.num + 1; i++){
      this._square = this._square + i;
    }
    this._square = Math.pow(this._square,2)
    return this._square  }

  get difference() {
    return this._square - this._sum  }
}
