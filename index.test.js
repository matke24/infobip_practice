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

test("For 40 function should return XL", () =>{
    expect(romanNumerals(40)).toBe("XL");
})

test("For 50 function should return L", () =>{
    expect(romanNumerals(50)).toBe("L");
})

test("For 90 function should return XC", () =>{
    expect(romanNumerals(90)).toBe("XC");
})

test("For 100 function should return C", () =>{
    expect(romanNumerals(100)).toBe("C");
})

test("For 400 function should return CD", () =>{
    expect(romanNumerals(400)).toBe("CD");
})

test("For 500 function should return D", () =>{
    expect(romanNumerals(500)).toBe("D");
})

test("For 900 function should return CM", () =>{
    expect(romanNumerals(900)).toBe("CM");
})

test("For 1000 function should return M", () =>{
    expect(romanNumerals(1000)).toBe("M");
})

test("For 0 function should return empty string", () =>{
    expect(romanNumerals(0)).toBe("");
})

