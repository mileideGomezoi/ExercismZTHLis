export function score(x: number, y: number): number {
 // Calculate the distance from the origin using the Pythagorean theorem
  const distance = Math.sqrt(x ** 2 + y ** 2);

  // Check if the dart landed outside the target
  if (distance > 10) {
    return 0;
  }

  // Check if the dart landed in the inner circle
  if (distance <= 1) {
    return 10;
  }

  // Check if the dart landed in the middle circle
  if (distance <= 5) {
    return 5;
  }

  // Check if the dart landed in the outer circle
  if (distance <= 10) {
    return 1;
  }

  return 0;


  
}
