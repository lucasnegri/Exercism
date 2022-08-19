//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num, step = 0) => {
  if(num < 1) throw new Error('Only positive numbers are allowed');
  if(num === 1) return step;

  num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  return steps(num, ++step)
};
