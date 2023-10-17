// import the function sum from the app.js file
const { sum, euroToUsd } = require('./index.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("sum, and euroToUsd", () => {
    expect(euroToUsd(5)).toBe(6);
})



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { euroToUsd } = require('./index.js')

    // use the function like its suppoed to be used
    const dollars = euroToUsd(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(euroToUsd(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})




test("One Dollar should be 149.5 Yen", function(){
    //import the function from app.js
    const { dollarToYen } = require('./index.js')

    // use the function like its suppoed to be used
    const dollar = dollarToYen(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 149.5; 
    
    // this is the comparison for the unit test
     expect(dollarToYen(3.5)).toBe(523.25); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})





test("One Yen should be 13 Pound", function(){
    //import the function from app.js
    const { yenToPound } = require('./index.js')

    // use the function like its suppoed to be used
    const Yen = yenToPound(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 13; 
    
    // this is the comparison for the unit test
     expect(yenToPound(3.5)).toBe(45.5); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})