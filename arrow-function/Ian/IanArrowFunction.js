// //Tema pe acasa: De creat 30 functii de tip declaration cu diferite situatii
// //De creat 30 functii de tip expresion
// //De creat 40 functii de tip arrow
//
//
//
// // Functie de tip declaration
// // Declarare functie fara parametri
// // Functia de tip declaration este globala
// function sunet() {
//     console.log("DDDDD")
//
// }
//
// // Apelarea functiei
// sunet()
//
//
// // Functie de tip declaration
// // Declarare functie cu parametri
// // Functia de tip declaration este globala
// function sunet(a,b) {
//     console.log(a,b)
//
// }
//
// // Apelarea functiei
// sunet("Test",5)
//
//
// ////////////////////////////
// //Am creat functia scadere care retrneaza result
//
// function scadere(x,y,result) {
//     result = x-y;
//     return result;
// }
//
// console.log(scadere(8, 7));
//
//
// ////////////////////////////
// // Functie de tip expresion cu parametri default
//
// const suma = function (a=4,b=4) {
//     return a + b;
// }
// //apelare functie expresion
// suma();
//
//
//
// // Functie Arrow
// //cu un parametru fara paranteze
//
// const test = (a) => {
//     console.log(a);
// }
//
// //Arrow function cu un parametru si fara acolade
//
// const test1 = a=>
//
//
//     //Arrow function
//



//Creati o functie de tip arrow sortare_dupa_alfabet cu un singur parametru care va returna
//sortarea string-ului pus in argument

const sortare_dupa_alfabet = (str) => str.split('').sort().join('');
console.log(sortare_dupa_alfabet('Ian Cibotaru'));
console.log(sortare_dupa_alfabet('Cibotaru Ian'));
console.log(sortare_dupa_alfabet('cibotaruian'));



//Creari o functie inversareNumar care va primi un parametru de tip number si va returna argumentul inversat

function inversare_numar(numar) {
    return numar.toString().split('').reverse().join('');
}

console.log(inversare_numar(123456789));

// Creati o functie care are 2 parametri start, stop  va returna un ciclu care va porni de la start si se va
//opri la stop

function go(start,stop){
    for (let i = start; i < stop  ; i++) {
        console.log(i)
    }
}
go(1,10);


///////////////
"use strict"
function exit() {
    console.log()

}
