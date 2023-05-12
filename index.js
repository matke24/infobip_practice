// ROMAN NUMERALS
const arabicToRoman = {
  1: "I",
  4: "IV",
  5: "V",
};
const breakPoints = [10, 9, 5, 4, 1];
const romans = ["X", "IX", "V", "IV", "I"];

function romanNumerals(arabicNum) {
  let result = "";
  
  for (let i = 0; i < breakPoints.length; i++) {
    let A = breakPoints[i];
    result += new Array(Math.floor(arabicNum/A)).fill(romans[i]).join('')
    arabicNum %= A
    // while (rest >= A) {
    //   result += romans[i];
    //   rest -= A;
    // }
  }
  
  return result;
}
romanNumerals(4)
module.exports = romanNumerals;
