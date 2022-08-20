//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  string = string.toLowerCase().match(/\w+('\w+)?/g);
    let words = {}
    string.forEach((word) => {
        words[word] === undefined ? words[word] = 1 : words[word] += 1;
    })
    return words
};
