const cars = ['BMW','Dacia',"Mercedes"];

////Array
// for (let i = 0; i < cars.length ; i++) {
//     console.log(cars[i]);
// }

//MEtoda forEach

// cars.forEach(function (intem, index,arr) {
//     console.log(intem, index, arr);
// })

cars.forEach(item =>console.log(item));


// Creati un array number cu valori 1 2 3 4 5, scoateti in consola suma elementelor
const numbers= [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((item)=>sum+=item)
console.log(sum);


//creati un aray cu mai multe valori si fiecare valoare inmultita la 2
// const valoare = [5, 10 ,20];
// let inmultire = [];
// for (let i = 0; i < valoare.length; i++) {
//    inmultire.push(valoare[i]*2);
// }
// console.log(inmultire)


const valoare = [5, 10 ,20];
let inmultire = valoare.map((element)=>element * 2);
console.log(inmultire);


const masina = [
    {Model : "Mercedes",pret : "Scump",calitate : "Superioara"},
    {Model : "BMW", pret : "Scump", calitate : "Medie"},
    {Model : "Dacia" , pret : "Ieftin", calitate : "Joasa"}
];
const pret = masina.map((element)=> element.pret );
console.log(pret);
