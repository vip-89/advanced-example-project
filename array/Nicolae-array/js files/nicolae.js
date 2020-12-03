const cars = ["Mercedes","Audi","BMW"];
for (let i = 0; i <cars.length ; i++) {
    console.log(cars[i]);
}



// Metoda foreach - scoate elementele




// Metoda prescurtata

cars.forEach(item => console.log (item))

// Cu ajutorul arrayului scoatem suma cifrelor!!!

const numbers = [1,2,3,4,5];
let sum = 0
numbers.forEach((item)=>sum+=item)
console.log(sum);


// meteoda cu forich nureturneaza
const elem = [1,2,3];
const inmultire = [];
for (let i = 0; i < elem.length; i++) {
    inmultire.push(elem[i] * 2);
}
console.log(inmultire);


// metoda map returneaza arrayu vech modificat (cu valoarea schimbata)
const numere = [1,2,3];
const inmultit = numere.map((element) => element * 2);
console.log(inmultit);

const cars = [
    {model: "Mercedes", pret: "Scump"},
    {model: "Dacia", pret: "Ieftin"},
];
const pret = cars.map((element) => element.pret);
console.log(pret);