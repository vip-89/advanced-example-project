//Exercitiul 1
//Este dat pseudo array-ul images cu parametrii width si height

//Aflati area imaginilor.
const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
const areas = [];
//Calculam aria imaginilor cu forEach
images.forEach(function(area){
    areas.push(area.height * area.width);
});
console.log(areas);

//Exercitiul 2
//Calculeaza viteza
const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

//Calculam viteza cu map
const speeds = trips.map(function (viteza) {
return viteza.distance / viteza.time;
});
console.log(speeds);

//Exercitiul 3
//Calculeaza Inaltimea

const image = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

//Calculam Inaltimea cu map
const heights = image.map(function(inaltime){
    return inaltime.height;
});

console.log(heights);
