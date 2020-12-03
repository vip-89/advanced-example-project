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