const cars = ["BMW","Dacia","Mercedes"];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// Metoda foreach

// cars.forEach(function(item,index, arr){
//     console.log(item)
// })
cars.forEach(item => console.log(item));
const numbers = [1,2,3,4,5];
// let sum = 0
// numbers.forEach((item)=>sum+=item)
// console.log(sum);
let num2 = [];
for (let i = 0; i < numbers.length ; i++) {
    num2.push(numbers[i] * 2);
}
console.log(num2);
const inmultire = numbers.map((element) => element * 2);
console.log(inmultire);
