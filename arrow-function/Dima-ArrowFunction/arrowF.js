// Tema pentru acasa: de creat 20 functii de tip Declaration cu deferite situatii
// De creat 25 functii de tip expression
// De creat 40 functii de tip arrow
//


// Declaration Function fara parametru
// Functia de tip declaration este Globala
function sunet() {
    console.log('sdfsdfsdf')
}

sunet()

// functia tip declaration cu parametrii
function sunet2(a,b) {
    console.log(a,b)
}

sunet2('asdfasdf',5)

function scadereF(x,y,result) {
result = x-y
    return console.log(result)
}

scadereF(5,4)
scadereF(10,4)

// expression funtion cu parametru default

const suma = function (a=2,b=3) {
 return  console.log(a+b)
}

suma();

// arrow function

const arrowF = (a,b) => {
    return console.log(a*b)
}

arrowF(2,4)

// creati o functia de tip arrow aortare dupa alfabet

let alfabet_Sortat = (str)=>str.split('').sort().join()

console.log(alfabet_Sortat('Dmitrii'))


//functia которая принимает один параметр tip number и return argument_invers


const revers_P = (a)=>{
    return console.log(a.toString().split('').reverse().join(''))
}

revers_P(234234234  )

const z = (start,stop)=>{
   for (let i = start; i <=stop ; i++) {
     console.log(i)
    }

}
z(2,5);
z(7,10)




