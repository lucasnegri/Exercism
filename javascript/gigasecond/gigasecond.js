//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  let date = time.getTime();
  const gs = Math.pow(10, 12);
  let futureTime = date + gs;
  return new Date(futureTime)
};

