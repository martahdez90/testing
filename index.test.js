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


describe('`string.includes()` determines if a string can be found inside another one', function () {
    describe('finding a single character', function () {
        it('can be done (a character is also a string, in JS)', function () {
            const searchString = 'x';
            assert.equal('xyz'.includes(searchString), true);
        })
    })
});
