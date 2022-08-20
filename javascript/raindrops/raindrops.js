//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let sound = '';
  number % 3 === 0 ? sound += 'Pling' : sound;
  number % 5 === 0 ? sound += 'Plang' : sound;
  number % 7 === 0 ? sound += 'Plong' : sound;
  return sound ? sound : number + ''
};
