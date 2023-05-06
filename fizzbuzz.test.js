const fizzbuzz = require('./fizzbuzz');

test("FizzBuzz", () => {
    fizzbuzz();
});

test("Number divisible by 3 should return: FIZZ", () => {
    const number = 3;
    expect(fizzbuzz(number)).toEqual("FIZZ");
})

test("Is number 8 divisible by 3", () => {
    expect(fizzbuzz(8)).toEqual("");
})

test("Number divisible by 5 should return: BUZZ", () => {
    expect(fizzbuzz(5)).toEqual("BUZZ");
})

test("Number divisible by 5 and 3 should return: FIZZBUZZ", () => {
    expect(fizzbuzz(15)).toEqual("FIZZBUZZ");
})
