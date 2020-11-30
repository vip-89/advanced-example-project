let a = (x, y) => x+y;
// Tema pe acasa - De creat 20 functiide tip decalaration, cu diferite situatii.
// De creat 25 functii  de tip expresion;
// De creat 40 functii de tip  arrow;

//Functii de tip declaration
//Declararea functiei fara parametri
//Functia de declaration este globala
function sunet(){
    console.log("DDDDDDDD")
}
//Apelarea functiei
sunet();

//Declararea functiei cu parametri
//Functia de declaration este globala
function sunet(a, b){
    console.log(a, b)
}
//Apelarea functiei
sunet('test', 5);
//Am creat functia scadere care returneaza diferenta
function scadere(x, y, result) {
    result = x-y;
    return result
}
//Apelam functia
console.log(scadere(8, 7));

//Functie de tip expresion
const suma = function (a=4, b=5){
    return a +b;
}
//Apelarea functiei
suma();


//Arrow function cu un parametru
const test = (a)=>{
    console.log(a)
}
test();

//Arrow function fara parametru
const testdoi = (a)=>{
    console.log(a)
}

//Arrow function cu un parametru fara paranteze si se retruneaza
const testtrei = a => a;
testtrei();

//Creati o functie de tip arrow sortare dupa alfabet
//cu un singur parametru str care va returna sortarea
//stringului pus in argument


const sortare_dupa_alfabet = (str) => str.split('').sort().join('');
console.log(sortare_dupa_alfabet('Valera'));

//Creati o functie care va primi un parametru de tip number
// si va returna argumentul inversat

function reverseStr(str) {
    return str.toString().split("").reverse().join("");
}
console.log(reverseStr(987654));

//Creati o functie care are doi parametri, start si top
//Care va returna un ciclu , care se va porni de la start si sa opri la stop
function f(start, stop) {
    for (let i = start; i < stop; i++)
    {
        console.log(i)
    }
}
console.log(f(90, 95));





