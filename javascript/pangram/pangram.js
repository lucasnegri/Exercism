//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = () => {
  return new Set(string.toUpperCase().match(/[A-Z]/g)).size === 26;
};
