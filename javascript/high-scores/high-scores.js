//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this._scores = scores,
    this._last = this._scores.length-1  }

  get scores() {
    return this._scores
  }

  get latest() {
    return this._scores[this._last]
  }

  get personalBest() {
    return this._scores.sort((a, b) => a - b)[this._last]
  }  
  
  get personalTopThree() {
    return this._scores.sort((a, b) => a - b).slice(-3).reverse()
  } 
}
