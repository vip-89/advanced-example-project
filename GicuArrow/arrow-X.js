// let asum = (x, y) => x + y
//
// function sunet() {
//     console.log("DDDDDDDDDDDD");
// }
// sunet()
//
//
// function sunet(a, b) {
//     console.log(a, b);
// }
// sunet(5,7)
//
// function scadere(x, y, result) {
//     result = x - y;
//     return result
// }
// console.log(scadere(10, 4));
//
// // functie expression
// const suma = function (a = 4, b = 5) {
//     return a + b
// }
// suma()
//
// // functie arrow cu un parametru
// const test = (a) => {
//     console.log(a);
// }
//
// // functie arrow cu un parametru fara paranteze
// const test1 = (a) => {
//     console.log(a);
// }
//
// // functie arrow cu un parametru fara paranteze
// const test2 = (a) => {
//     console.log(a);
// }
//
// const sortare_dupa_alfabet = (str)=>
//     str.split('').sort().join('')
// console.log(sortare_dupa_alfabet("pavlovgheorghe"));

// function inversare(numar) {
//   return  numar.toString().split('').reverse().join('')
//
//
// }
// console.log(inversare(1234567890));

// function anivar(start, stop) {
//     for (let i = start; i < stop; i++) {
//         console.log(i)
//     }
// }
// anivar(20,200)
//
// let obiect = [
//     {nume:'rosie', tip:'legume', cantitate: 1, pret: 56},
//     {nume:'mar', tip:'fructe', cantitate: 20, pret: 34},
//     {nume:'capsune', tip:'pomusoare', cantitate: 6, pret: 20},
//     {nume:'castravete', tip:'legume', cantitate: 30, pret: 10},
// ];

// for (let i = 0; i < obiect.length; i++) {
//     if (obiect[i].tip == "legume") {
//         legume.push(obiect[i])
//     }
//     console.log(legume);
// }




// let legume = obiect.filter((item) =>
// item.tip === "legume" && item.cantitate < 5  && item.pret > 10)
// console.log(legume);



// let obiect = [
//     45,65,456,76,345,5,4,6,44356,65,456,4,5,6,463,2,654,453,78,345,8,79,7,5756
// ];
//
// let mare = obiect.filter((item)=>
// item > 50)
// console.log(mare);


// let obiect = [
//     'andrei', "valeroncik", 'ion' , 'valea'
// ];
// let alfa = obiect.filter((item) =>
// item.length>5)
// console.log(alfa);


// const users = [
//     { id: 1, admin: true },
//     { id: 2, admin: false },
//     { id: 3, admin: false },
//     { id: 4, admin: false },
//     { id: 5, admin: true },
// ];
//
// const filteredUsers = users.filter((item)=>
// item.admin);
// console.log(filteredUsers);
