function secondsToYears(seconds: number) : number {
  const years: number =  seconds / 31556966;
  return years;
}

export function age(planet: string, seconds: number): number {
  let yearsConverted:number = secondsToYears(seconds);
  
  let earthYears:number = 0;
  
  switch(planet){
    case 'mercury':
      earthYears = yearsConverted/0.2408467;
      console.log(earthYears);
      break;
    case 'venus':
      earthYears = yearsConverted/0.61519726;
      console.log(earthYears);
      break;
    case 'mars':
      earthYears = yearsConverted/1.8808158;
      console.log(earthYears);
      break;
    case 'jupiter':
      earthYears = yearsConverted/11.862615;
      console.log(earthYears);
      break;
    case 'saturn':
      earthYears = yearsConverted/29.447498;
      console.log(earthYears);
      break;
    case 'uranus':
      earthYears = yearsConverted/84.016846;
      console.log(earthYears);
      break;
    case 'neptune':
      earthYears = yearsConverted/164.79132;
      console.log(earthYears);
      break;
    default:
      earthYears = yearsConverted/1;
      console.log(earthYears);
      break;
  }
  
  //return Math.round(earthYears * 100)/ 100;
  return(parseFloat(earthYears.toFixed(2)));
}
