//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x,y) => {
  var scr = Math.sqrt((x*x) + (y*y));
  return scr <= 1 ? 10 : scr <= 5 ? 5 : scr <= 10 ? 1 : 0;
};
