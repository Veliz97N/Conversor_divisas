let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(USD){
    let EURO = USD/oneEuroIs.USD;
    let JPY =  oneEuroIs.JPY*EURO;
    return JPY;

}
function fromEuroToDollar(EURO){
    let USD = EURO*oneEuroIs.USD;
    return USD;
}
function fromYenToPound(YAN){
    let EURO = YAN/oneEuroIs.JPY;
    let GBP= EURO*oneEuroIs.GBP;
    return GBP; 
}
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3.5));
console.log(fromYenToPound(100));

module.exports={fromEuroToDollar,fromDollarToYen,fromYenToPound};
