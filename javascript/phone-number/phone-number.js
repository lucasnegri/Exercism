//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  if(number.match(/[a-zA-Z]+/g)){throw new Error('Letters not permitted')}
  if(number.match(/[!?@:[\]^_`{|}~]/g)){throw new Error('Punctuations not permitted')};
  let numbers = number.replace(/[^0-9]/g,'').split('');
  if(numbers.length < 10){ throw new Error('Incorrect number of digits')}
  if(numbers.length === 10){
      if(numbers[0] == 0){throw new Error('Area code cannot start with zero')}
      if(numbers[0] == 1){throw new Error('Area code cannot start with one')}
      if(numbers[3] == 0){throw new Error('Exchange code cannot start with zero')}
      if(numbers[3] == 1){throw new Error('Exchange code cannot start with one')}
      return numbers.join('')} 
  if(numbers.length === 11){
      if(numbers[0] != 1){throw new Error('11 digits must start with 1')}
      if(numbers[1] == 0){throw new Error('Area code cannot start with zero')}
      if(numbers[1] == 1){throw new Error('Area code cannot start with one')}
      if(numbers[4] == 0){throw new Error('Exchange code cannot start with zero')}
      if(numbers[4] == 1){throw new Error('Exchange code cannot start with one')}
      else{return numbers.slice(1, numbers.length).join('')}}
  if(numbers.length > 11){throw new Error('More than 11 digits')}
};
