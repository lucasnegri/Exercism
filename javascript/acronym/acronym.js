//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (string) => {
  let words = string.toUpperCase().replace('_', '').match(/\w+('\w+)?/g)
  let acronym = [];
  for(let i=0; i<words.length; i++){
    acronym.push(words[i][0])
  }
  return acronym.join('')
};
