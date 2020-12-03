// let cars  = ['Toyota', 'Audi', 'Renault','Mercedes'];
// //
// // for (let i = 0; i <cars.length ; i++) {
// //     console.log(cars[i])
// // }
//
// cars.forEach((el,index,arr)=>console.log(el))


// let numbers = [1,2,3,4,5]
// let sum = 0 ;
// numbers.forEach((el)=>{
//     sum+=el
//
// })
//
// console.log(sum)
//
// let num = [1,2,3]


// num.forEach((el)=>{
//     num2.push(el*2)
// })
//
// console.log(num2)

// let num2 = num.map((el)=>{
//     return el*2
// })
//
// console.log(num2)

// for (let i = 0; i <num.length ; i++) {
//     num2.push(num[i]*2)
// }
//
// console.log(num2)

//



// let images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 54, width: 32 }
// ];
// let areas = [];
//
//

// Image area cu ForEach()

// images.forEach((el)=>{
//     areas.push(el.height*2 + el.height*2)
// })
//
// console.log(areas)

//Image Area cu MAP()

// let imagesArea = images.map((el)=>(el.height*2 + el.width*2))
//
// console.log(imagesArea)
//
// // Pseudo array
// let arrayPseudoCars = [
//     {
//         model: 'BWM',
//         pretul: 'Scump'}
// ]
//
// console.log(arrayPseudoCars)
//
// let pret = arrayPseudoCars.filter(el=>el.pretul)
// console.log(pret)
//
// let pretFilter = arrayPseudoCars.map(el=>el.pretul)
// console.log(pretFilter)


//calculare vitezei  speed = distance/time

let trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

let speeds;

// cu for each :

trips.forEach(el=>{

    speeds=(el.distance/el.time)
    console.log(speeds)
})

// cu map

let knowSpeed = trips.map(el=>el.distance/el.time)

console.log(knowSpeed)


// inaltime nam inteles ce trebie aici :

let imagess = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

let height = imagess.map(el=>el.height)
console.log(height)
