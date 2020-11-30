// // Tema pe acasa: de creat 20 functii de tip declaeation cu diferite situatii.
// // De creat 25 functii de tip expresion.
// // De creat 40 functii de tip arrow
// // Studiem linkurile crelea dat Viorel si data viitoare ne intreaba ce este call back function
//
// //Functii de tip declaration
// //Declararea functiei fara parametri
// //Functia de tip declaration esteglobala
// function sunet() {
//     console.log("DDDDDDDDDD")
// }
//
// //Apearea dunctiei
// sunet()
//
//
// //Functii de tip declaration
// //Declararea functiei cu parametri
// //Functia de tip declaration esteglobala
// function sunet(a,b) {
//     console.log(s,b)
// }
//
// //Apearea dunctiei
// sunet("test", "6")
//
// //Am creat functia scadere care returneaza
// function scadere(x,y,result) {
//
//     result = x - y;
//     return result
//
// }
// //apelam functia scadere
// console.log(scadere(7,6));
//
// //Functie de tip expresion
//
// const suma = function (a=4,b=4) {
//     return a + b;
// }
//
// //Apelare functiei expresion
// suma();
//
//
//  //Arrow function cu un parametru
//
// const test = (a)=>{
//     console.log(a)
// }
//
// //Arrow function cu un parametru fara paranteze
//
// const test = a => console.log(a)
//
//
// //Arrow function cu un parametru fara paranteze si acualade se returneaza fara aculade
//
// const test = (a)=>{
//     console.log(a)
// }
//
// //Arrow function cu un parametru fara paranteze si acualade se returneaza fara aculade
//
// const test = (a)=>{
//     console.log(a)
// }

//Creati o functie de tip arrow sortare dupa alfabet cu un singur parametru str
//care va returna sortarea stringului pus in argument.
const sortare_dupa_lfaet = (str) =>
    str.split('').sort().join('');
console.log(sortare_dupa_lfaet("nicolae"));

//Creati o functie care va primi un parametru de tip number si va returna argumentul inversat

function inversa_numar(numar){
    return numar.toString().split('').reverse().join('');
}

console.log(inversa_numar(4567));

//Creati o functie care are doi parametri start si stop va 
//returna un ciclu lare va porni la start si se va opri la stop

const n = (start,stop) => {
    for (let i = start; i <stop; i++) {
        console.log(i)
    }
}
console.log(n(30, 60));