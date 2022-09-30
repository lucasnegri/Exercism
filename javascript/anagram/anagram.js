//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, anagrams) => {
  let possibilities = [];
  let newWord = word.toLowerCase().split('').sort().join('');
  anagrams.forEach(anagram => {
    if((word.toLowerCase() !== anagram.toLowerCase()) && (anagram.toLowerCase().split('').sort().join('')=== newWord))
      possibilities.push(anagram);
  });
  return possibilities;
};
