//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  const isDivisibleBy4 = year % 4 == 0;
  const isDivisibleBy100 = year % 100 == 0;
  const isDivisibleBy400 = year % 400 == 0;
  return isDivisibleBy4 && !isDivisibleBy100 || isDivisibleBy400 ? true : false;
};
