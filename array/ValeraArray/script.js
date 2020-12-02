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

const inmultire = numere.map((element )=> element*2);
console.log(inmultire);

//Metoda mai noua (map) returneaza valoarea


const auto = [
    {model : "Audi", pret : "scump"},
    {model : "Bmw", pret : "ieftin" },
    {model : "Mercedes", pret : "scump" },
    {model : "Toyota", pret: 'ieftin'}
];
const masini = auto.map((element) => element.pret()) ;
console.log(masini);




