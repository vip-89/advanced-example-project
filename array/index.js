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

