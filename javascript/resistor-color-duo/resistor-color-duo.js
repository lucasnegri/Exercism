//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([first, second]) => {
  let firstColor = COLORS.indexOf(first)
  let secondColor = COLORS.indexOf(second)
  return parseInt(`${firstColor}${secondColor}`)
};

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

