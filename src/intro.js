// Lesson: Writing your first tests
export function max(a, b) {
 return (a > b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0 ) {
    return NaN;
  } 
  const sum = numbers.reduce((sum, currentVal) => sum + currentVal, 0)
  return sum/numbers.length
}

export function factorial(el) {
  const sum = 1
  if (el > 1) {
     return el * factorial(el - 1)
  }
  if (el < 0) {
    return undefined
 }  
  return 1
}