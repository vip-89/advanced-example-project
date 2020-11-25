const dmitriiFunc = () => {
let x;
let y;

let result = 0;
    x = 5;
    y = 6;
result = x+y;
console.log(result)

    // Tema Pentru Acasa :
    let varNumber1 = 5;
    let varNumber2 = 7;
    let varNumber3 = 6;
    let varNumber4 = 4;
    let varNumber5 = 8;
    let numberTipString1 = '10';
    let numberTipString2 = '11';
    let numberTipString3 = '2';
    let numberTipString4 = '4';
    let numberTipString5 = '7'
    let varString1 = 'Sting1'
    let varString2 = 'String2'
    let varString3 = 'String3'
    let varString4 = 'String4'
    let varString5 = 'String5'

    //concole log stringuri de tip number :
    console.log(`${numberTipString2},${numberTipString3},${numberTipString4},${numberTipString5}`)
    //console log string :
    console.log(`${varString2},${varString4},${varString5}`)

    let calc = 0;
    calc = varNumber1 + varNumber2 - varNumber3
    console.log(calc) // o sa fie calc de mai sus
    calc = varNumber4 - varNumber2 + varNumber5
    console.log(calc) // o sa fie calc de mai sus

    // Interpolare

    console.log(`${varString1} = ${numberTipString1}, interpolare ${varNumber2} cu ${varString3} = ${varNumber2+varString3}`)
}
// acasa 30 variable dinte care 10 trebuie sa fie de tip number , 5 de tip string dar number '5' , si 5 de tip string litere
// 5 b , use strict , calculare , interpolare
export {dmitriiFunc}

// functia .Scrieți o funcție  care inversează un număr. Exemplu x = 32243; Ieșire preconizată: 34223
// nam inteles este reverse ??? trebuie sa fac ?!

let invers = (inv) =>{
    return inv.split("").reverse().join("")
}

console.log(invers('32243'))

// Scrieți o funcție care acceptă un argument și returnează tipul lui

let tipulVar = (tipV) => {
    return typeof(tipV)
}

console.log(tipulVar(true))

