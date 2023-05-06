const numberEquivalent = ["FIZZ", "BUZZ", "SUZZ"]; 
const numbersWithEquivalence = [{num:3, eq:"FIZZ"}, {num:5, eq:"BUZZ"}, {num:7, eq:"SUZZ"}]

function fizzbuzz(n){
    //let result = "";
    let mappedResult = numbersWithEquivalence.map(item => {
        if(n%item.num == 0) return item.eq;
        return "";
    });
    return mappedResult.join("");
    /* numbers.forEach((num, i) => {
        if(n % num == 0)
            result += numberEquivalent[i];
    });

    return result;*/
    
}

module.exports = fizzbuzz;