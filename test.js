test("3.5 euro should be 4.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
     expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("3.5 Dollar should be around 373 Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const dollars = fromDollarToYen(3.5)
    expect(fromDollarToYen(3.5)).toBeGreaterThanOrEqual(373);
});

test("100 Yan should be around 11,17 Pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const dollars = fromYenToPound (100)
     expect(fromYenToPound (100)).toBeGreaterThanOrEqual(0.62);
});


