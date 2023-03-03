import { fizzBuzz } from "../src/fizzbuzz";

describe("FizzBuzz", () => {
  it("if number is 1 then return 1", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });

  it("if number is 2 then return 2", () => {
    expect(fizzBuzz(2)).toEqual("2");
  });

  it("if number is 3 then return Fizz", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("if number is 6 then return Fizz", () => {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("if number is 5 then return Buzz", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("if number is 10 then return Buzz", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });

  it("if number is 15 then return FizzBuzz", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
  
});
