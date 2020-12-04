const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

let speeds = trips.map((element) => element.distance % element.time);
console.log(speeds)

const images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

const heights = images.map(function(i) {
    return i.height;
});
console.log(heights);