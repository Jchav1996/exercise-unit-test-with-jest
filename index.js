// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = {fromEuroToDollar}





const sum = (a,b) => {
    return a + b
}

function euroToUsd (euro) {
    if (euro < 0) {
        console.log("You can't have negative value")
        return
    }
    return euro * 1.2
}
console.log(euroToUsd(1))

module.exports = {sum, euroToUsd}




function dollarToYen (dollar) {
    if (dollar < 0) {
        console.log("You can't have negative value")
        return
    }
    return dollar * 149.5
}
console.log(dollarToYen(1))

module.exports = {sum, dollarToYen}




function yenToPound (yen) {
    if (yen < 0) {
        console.log("You can't have negative value")
        return
    }
    return yen * 13
}
console.log(yenToPound(1))

module.exports = {sum, yenToPound, euroToUsd, dollarToYen}