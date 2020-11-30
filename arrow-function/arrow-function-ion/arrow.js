//Tema pe acasa: de creat 30(20) functii de tip declaration cu diferite situatii
//De creat 30(25) functii de tip expresion
//De creat 40 functii de tip Arrow


// //Functii de tip declaration
// //Este globala
// //Declararea functiei fara parametri
// function sunet() {
//    console.log(xxxxxxxxxxx)
// };
// //Apelare functiei
// sunet()
//
//
// //Functii de tip declaration
// //Declararea functiei cu parametri
// function sunet(a,b) {
//    console.log(a,b)
// };
// //Apelare functiei
// sunet()
//
// //Functii de tip declaration
// //Declararea functiei cu parametri
// function scadere(x,y,result) {
//    console.log(xxxxxxxxxxx)
// };
// //Apelare functiei
// sunet()
//
//
// //Am creat functia scadere care returneaza
// function scadere(x,y,result) {
//    result = x - y;
//    return result;
// };
// //Apelam functia scadere
// console.log(scadere(8, 7));
//
//
// ///Functii de tip expresion cu parametrii default
// //tot timpul se pune intro variabila
// const suma = function (a:number=4 ; b:number=4){
//    return a + b ;
// };
// //Apelarea functiei expresion
// suma();
//
// //Arrow function cu un parametru
// const test =(a)=>{
//    console.log(a);
// }
//
// //Arrow function cu un parametru fara paranteze
// const test = a=>{
//    console.log(a);
// }
//
// //Arrow function cu un parametru fara paranteze si fara acolade
// const test = a=>
//    console.log(a);
// }


//Creati o functie de tip arrow sortare dupa alfabetcu un singur parametru str care va returna sortare stringului
//pus in argument
// const sortare_dupa_alfabet = (str)=>str.split('').sort().join('');
// console.log(sortare_dupa_alfabet("ionBondari"));
// console.log(sortare_dupa_alfabet("BondariIon"));
// console.log(sortare_dupa_alfabet("Vitalii"));

// Creati o functie inversare numar care va primi un parametru de tip number
// si va returna argumentul inversat

// function inversare_numar(numar) {
//   return numar.toString().split('').reverse().join('');
// }
// console.log(inversare_numar(69461667));
//


//Creati o functie care are 2 parametri start si stop
//Va returna un ciclu care va porni de la start si va opri la stop

function goo(start,stop){
for (let i =start; i <stop; i++) {
   console.log(i)}
}
goo(1,100)







