//Calculeaza viteza
const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

const speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});
console.log(speeds);

//Calculeaza Inaltimea


const images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

const heights = images.map(function(image){
    return image.height;
});

console.log(heights);
//Calculeaza Aria


const imag = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
const areas = [];

imag.forEach(function(image){
    areas.push(image.height * image.width);
});
console.log(areas);