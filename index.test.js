const romanNumerals = require("./index")

test("Function call romanNumerals", () => {
    romanNumerals(1)
})

test("For 0 function should return an empty string", () => {
    expect(romanNumerals(0)).toBe("");
})

test("For 1 function should return I", () =>{
    expect(romanNumerals(1)).toBe("I");
})

test("For 2 function should return II", () =>{
    expect(romanNumerals(2)).toBe("II");
})

test("For 4 function should return IV", () =>{
    expect(romanNumerals(4)).toBe("IV");
})

test("For 5 function should return V", () =>{
    expect(romanNumerals(5)).toBe("V");
})

test("For 6 function should return VI", () =>{
    expect(romanNumerals(6)).toBe("VI");
})

test("For 9 function should return IX", () =>{
    expect(romanNumerals(9)).toBe("IX");
})

test("For 10 function should return X", () =>{
    expect(romanNumerals(10)).toBe("X");
})

test("For 28 function should return XXVIII", () =>{
    expect(romanNumerals(28)).toBe("XXVIII");
})

