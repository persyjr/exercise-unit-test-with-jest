// importar la función sum del archivo app.js
const {sum} = require('./app.js');
const fromDollarToYen = require('./app.js');
const fromEuroToDollar = require('./app.js');
const fromYenToPound = require('./app.js');



// PROBANDO LA FUNCION SUMA
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// PROBANDO LA FUNCION EURO A DOLARES

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
// PROBANDO LA FUNCION DOLARES A YANES

test("1 dollars should be 106.58 yans ", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(127.9/1.2); //1 dollars should be 106.58 yans
})

// PROBANDO LA FUNCION YENES A LIBRAS

test("1 yen should be 0,00625 gbp ", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.8/127.9); //1 yen should be 0,00625 gbp
})