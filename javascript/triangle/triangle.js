//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = [...sides]
  }
    
  get isTriangle(){
    return (this.a + this.b > this.c) && (this.a + this.c > this.b) && (this.b + this.c > this.a)
  }

  get isEquilateral() {
    return (this.a === this.b && this.c) ? true : false;
  }
  
  get isIsosceles() {
    return this.isTriangle && (this.a === this.b || this.a == this.c || this.b === this.c)
  }

  get isScalene() {
    return this.isTriangle && (this.a != this.b && this.b != this.c)
  }
}
