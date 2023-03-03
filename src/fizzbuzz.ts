export function fizzBuzz(nbr: number): string {
  if (isDivisibleBy3(nbr) && isDivisibleBy5(nbr)) {
    return "FizzBuzz";
  }

  if (isDivisibleBy3(nbr)) {
    return "Fizz";
  }

  if (isDivisibleBy5(nbr)) {
    return "Buzz";
  }
  return nbr.toString();
}

function isDivisibleBy(nbr: number, divisor: number): boolean {
  return nbr % divisor === 0;
}

function isDivisibleBy3(nbr: number): boolean {
  return isDivisibleBy(nbr, 3);
}

function isDivisibleBy5(nbr: number): boolean {
  return isDivisibleBy(nbr, 5);
}
