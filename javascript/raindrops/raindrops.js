//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let string = []
  if(Number.isInteger(num/3)){string.push('Pling')}
  if(Number.isInteger(num/5)){string.push('Plang')};
  if(Number.isInteger(num/7)){string.push('Plong')};
  if(string.length === 0){
    string.push(num);
    return string.join('')
  } else {
    return string.join('')
  }
};
