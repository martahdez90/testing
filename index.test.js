const { expect } = require("@jest/globals");
//install jest
//npm init
//test jest
//npm install --save-dev jest
//npm run test

describe("Test de sumas", () => {
  const sum = require("./sum"); //Arrange
  test("a-b if a>b else a+a", () => {
    expect(sum(12, 10)).toBe(2);
  });

  test("a-b if a>b else a+a", () => {
    expect(sum(10, 12)).toBe(22);
  });
});

describe("test de multiplicaciones", () => {
  const mult = require("./mult");

  it("a*b if a<b else error", () => {
    expect(mult(5, 10)).toBe(50);
  });

  test("a*b if a<b else error", () => {
    expect(mult(10, 5)).toBe(console.log("error"));
  });
});


describe("`string.includes()` determines if a string can be found inside another one", () => {
    describe("finding a single character", () => {
        it("can be done (a character is also a string, in JS)", () => {
            const searchString = 'x';
            expect("xyz".includes(searchString)).toBe(true);
        })
    })
});


describe("Fizzbuzz gives fizz is the number is multiple of 3, buzz if is multiple of 5, fizzbuzz if both are true", () => {
  const fizzBuzz = require('./fizzbuzz');

  it("n is multiple of 3", () => {
    expect(fizzBuzz(6)).toBe("fizz");
  });
  it("n is multiple of 5", () => {
    expect(fizzBuzz(20)).toBe("buzz");
  })
  it("n is multiple of 5 and 4", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  })
  it("n is not multiple of 5 nor 4", () => {
    expect(fizzBuzz(7)).toBe(7);
  })
} )
