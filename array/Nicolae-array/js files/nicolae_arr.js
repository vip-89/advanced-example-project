// const cars = ["Mercedes","Audi","BMW"];
// for (let i = 0; i <cars.length ; i++) {
//     console.log(cars[i]);
// }
//
//
//
// // Metoda foreach - scoate elementele
//
//
//
//
// // Metoda prescurtata
//
// cars.forEach(item => console.log (item))
//
// // Cu ajutorul arrayului scoatem suma cifrelor!!!
//
// const numbers = [1,2,3,4,5];
// let sum = 0
// numbers.forEach((item)=>sum+=item)
// console.log(sum);
//
//
// // meteoda cu forich nureturneaza
// const elem = [1,2,3];
// const inmultire = [];
// for (let i = 0; i < elem.length; i++) {
//     inmultire.push(elem[i] * 2);
// }
// console.log(inmultire);
//
//
// // metoda map returneaza arrayu vech modificat (cu valoarea schimbata)
// const numere = [1,2,3];
// const inmultit = numere.map((element) => element * 2);
// console.log(inmultit);
//
// const cars = [
//     {model: "Mercedes", pret: "Scump"},
//     {model: "Dacia", pret: "Ieftin"},
// ];
// const pret = cars.map((element) => element.pret);
// console.log(pret);

// Tema pe acasa 03.12.2020
// Ex 1

// const images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 54, width: 32 }
// ];
// const areas = [];
//
// images.forEach((aria)=>
//     areas.push(aria.height*aria.width)
// );
// console.log(areas);


// Ex 2

// let trips = [
//     { distance: 34, time: 10 },
//     { distance: 90, time: 50 },
//     { distance: 59, time: 25 }
// ];
//
// let speeds = trips.map((element) => element.distance % element.time);
// console.log(speeds)

// Ex 3

// const images = [
//     { height: '34px', width: '39px' },
//     { height: '54px', width: '19px' },
//     { height: '83px', width: '75px' },
// ];
//
// const heights = images.map(function(i) {
//     return i.height;
// });
// console.log(heights);


// Exeercitiu in clasa 03.12.2020

// let produse = [
//     {nume:'rosii', tipul:'legume'},
//     {nume:'vinata', tipul:'legume'},
//     {nume:'portocala', tipul:'fructe'},
//     {nume:'ananas', tipul:'fructe'},
// ]
//
// const rezult =[]
//
// for (let i = 0; i < produse.length ; i++)  {
//   if (produse[i].tipul==="legume"){
//       rezult.push(produse[i]);
//
//   }
// }
// console.log(rezult);

// Metoda mai scurta

// let produse = [
//     {nume:'rosii', tipul:'legume'},
//     {nume:'vinata', tipul:'legume'},
//     {nume:'portocala', tipul:'fructe'},
//     {nume:'ananas', tipul:'fructe'},
// ]
//
// const legume = produse.filter((item) =>item.tipul === "legume");
// console.log(legume);


// let produse = [
//     {nume:'rosii', tipul:'legume', cantitate:7, pret:17},
//     {nume:'vinata', tipul:'legume', cantitate:1, pret:12},
//     {nume:'portocala', tipul:'fructe', cantitate:1, pret:12},
//     {nume:'ananas', tipul:'fructe', cantitate:7, pret:17},
// ]
//
// const legume = produse.filter((item) => item.tipul === "legume" && produse.cantitate > 5 && produse.pret <15 );
// console.log(legume); finisez acasa!!!

// ---------------------------------------

let numere = [12, 15, 5, 128, 46, 4, 200, 19, 1, 33];

const result = numere.filter((item) => item > 50);

console.log(result);

// -------------------------------------

let nume = ['Alexandru', 'Ion', 'Petru', 'Gicu'];

const caractere = nume.filter((item) => item.length > 6 );
console.log(caractere);

// ----------------------------------------

const users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

const admin1 = users.filter((item)=> item.admin);
console.log(admin1);