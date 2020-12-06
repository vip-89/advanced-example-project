const cars = ['Audi', "Mercedes-Benz", "Ferrari", "Jeep"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Metoda foreach

cars.forEach(function (item, index, arr){
    console.log(item, index, arr)
});
cars.forEach(item=>console.log(item));


const numbers = [1, 2, 3, 4, 5];
let suma = 0;
numbers.forEach((item)=>suma+=item);
console.log(suma);


const numere = [1, 2, 3];
let dublu = [];
for (let i = 0; i < numere.length; i++) {
    dublu.push(numbers[i]*2);
}
console.log(dublu);

//Metoda foreach nu returneaza

// const inmultire = numere.map((element )=> element*2);
// console.log(inmultire);

//Metoda mai noua (map) returneaza valoarea


// const auto = [
//     {model : "Audi", pret : "scump"},
//     {model : "Bmw", pret : "ieftin" },
//     {model : "Mercedes", pret : "scump" },
//     {model : "Toyota", pret: 'ieftin'}
// ];
// const masini = auto.map((element) => element.pret()) ;
// console.log(masini);

//tema pe acasa

//.1
const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
const areas = [];

images.forEach((element)=>
    areas.push(element.height*element.width)
);
console.log(areas);

//.2
const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];
const speeds = [];

trips.forEach((element)=>speeds.push(element.distance/element.time));
console.log(speeds);

//.3

let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

const heights = images.map(function(i) {
    return i.height;
});
console.log(heights);

//











