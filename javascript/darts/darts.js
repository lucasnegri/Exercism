//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x,y) => {
  var scr = Math.sqrt((x*x) + (y*y));
  if (scr > 10) return 0;
  if (scr > 5) return 1;
  if (scr > 1) return 5;
  if (scr <= 1) return 10;
};
