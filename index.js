// ROMAN NUMERALS
const breakPoints = [1000, 900, 500, 400,100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = ["M","CM","D","CD","C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function romanNumerals(arabicNum) {
  
  return breakPoints.reduce((previous, A, i) => {
    previous += new Array(Math.floor(arabicNum/A)).fill(romans[i]).join('')
    arabicNum %= A
    return previous
  }, "")
//   for (let i = 0; i < breakPoints.length; i++) {
//     let A = breakPoints[i];
//     result += new Array(Math.floor(arabicNum/A)).fill(romans[i]).join('')
//     arabicNum %= A
    
//   }
  
  
}

module.exports = romanNumerals;
