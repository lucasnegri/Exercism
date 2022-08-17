//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const age = (planet, age) => {
  let earthYearInSeconds = 31557600;
  let ageInYears = age / earthYearInSeconds
  function returnAge(period){
    return parseFloat((ageInYears / period).toFixed(2))
  }
  
  switch(planet){
      case('earth'): return parseFloat(ageInYears.toFixed(2))
      break;
      case('mercury'): return returnAge(0.2408467)
      break;
      case('venus'): return returnAge(0.61519726)
      break;
      case('mars'): return returnAge(1.8808158)
      break;
      case('jupiter'): return returnAge(11.862615)
      break;
      case('saturn'): return returnAge(29.447498)
      break;
      case('uranus'): return returnAge(84.016846)
      break;
      case('neptune'): return returnAge(164.79132 )
      break;
  }
};   

