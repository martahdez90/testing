let fizzBuzz = (num) => {
    let result = num;
    if (num % 3 === 0 && num % 5 != 0) {
        result = "fizz";
    } else if (num % 5 === 0 && num % 3 != 0) {
        result = "buzz";
    } else if (num % 3 === 0 && num % 5 === 0) {
        result = "FizzBuzz"
    }
    return result;
}

module.exports = fizzBuzz;