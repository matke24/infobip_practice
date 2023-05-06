const sum = require("./sum"); //./nameOfOriginalFile

test("Add 1 + 2 to equal 3", () => {
 /* when(HTTP.get).thenreturn({
    id: 1,
    "temp": 17,
    ...actual_result.
  }) */
  const expect_result = 3;
  const actual_result = sum(1,2)
  expect(actual_result).toBe(expect_result);
});

test("Addition is not equal to 0", () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(sum(a,b)).not.toBe(0)
        }
            
    }
})