// TEMA PE ACASA: DE CREAT 20   functii de tip de claration cu diferite situatiii
// De creat 25 functii de tip expresion
// DE creat 40 functii de tip arrow

sunet()

//Functii de tip declaration
// Declararea functie fara parametri
// Functia de tip declaration este globala
function  sunet(){
    console.log("DDDDDDDDDD")
}

// Apelarea functiei
sunet()

//Functii de tip declaration
// Declararea functie cu parametri
// Functia de tip declaration este globala
function  sunet(a,b){
    console.log(a,b)
}

// Apelarea functiei
sunet("Test",5)
//Am creat functi scadere care returneaza
function scadere(x,y,result){
    result = x - y;
    return result
}
//apelam functia scadere
console.log(scadere(8, 7));
// Functii de tip expresion cu parametri default

const suma = function(a=4,b=4){
    return a +b
}

//Apelarrea functiei expresion
suma();
// Arrow function cu un parametru
const test = (a)=>{
    console.log(a)
}
// Arrow function cu un parametru fara paranteze
const test1 = a =>{
    console.log(a)
}
// Arrow function cu un parametru fara paranteze si fara acualade
const test2 = a => console.log(a)

// Arrow function cu un parametru fara paranteze si se returneaza
const test3 = a =>{
    return a;
}
// Arrow function cu un parametru fara paranteze si se returneaza fara acualade
const test4 = a => a;
// Arrow function cu un parametru fara paranteze si se returneaza fara acualade
const sum = (a, b) => a + b;
//Creati o functie de tip arrow sortare_dupa_alfabet cu un
// singur parametru str care va returna sortarea stringului pus
// in argument

const sortare_dupa_alfabet = (str)=>
    str.split('').sort().join('');
console.log(sortare_dupa_alfabet("viorel"));
// Creati o functie inversare_numar care va
// primi un parametru de tip number
// si va returna argumentul inversat
function inversare_numar( numar){
   return numar.toString().split('').reverse().join('')
}

console.log(inversare_numar(4567));
