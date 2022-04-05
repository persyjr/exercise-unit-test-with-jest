const sum = (a,b) => {
    return a + b
}
console.log(sum(14,9))

//1 EUR (Euro) = 1.2 USD (US Dollar)
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromDollarToYen =(amount)=>{
let euro=amount/oneEuroIs.USD
let yen =euro*oneEuroIs.JPY
return yen;
}
console.log(fromDollarToYen(1))

const fromEuroToDollar =(amount)=>{
   
    return amount*oneEuroIs.USD;
}
console.log(fromEuroToDollar(1))
const fromYenToPound =(amount)=>{
    let gbp=amount*((oneEuroIs.GBP)/(oneEuroIs.JPY))
    return gbp;
}
console.log(fromYenToPound(1))

module.exports={
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
}
