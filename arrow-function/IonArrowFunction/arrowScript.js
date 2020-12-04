// //Tema pe acasa: De creat 30 functii de tip declaration cu diferite situatii
// //De creat 30 functii de tip expresion
// //De creat 40 functii de tip arrow

//Function Declaration
function greet() {
    console.log('hello there')
};

// Apelarea functiei
greet();

//Functii cu calcule matimatici elementare:adunare, scadere, inmultire, inpartire;
//Adunare
function adunare(a,b) {
    return console.log(a+b)
};
// Apelarea functiei
adunare(15,10);
adunare(15,20);
adunare(25,30);
adunare(35,40);

//Scadere
function scadere(a,b) {
    return console.log(a-b)
};
// Apelarea functiei
scadere(15,10);
scadere(20,14);
scadere(25,18);
scadere(35,29);

//Inmultire
function inmultire(a,b) {
    return console.log(a*b)
};
// Apelarea functiei
inmultire(2,10);
inmultire(4,15);
inmultire(7,9);
inmultire(9,12);

//Impartire
function impartire(a,b) {
    return console.log(a/b)
};
// Apelarea functiei
impartire(15,2);
impartire(33,1.5);
impartire(25,4.9);
impartire(35,9.9);





//Function Expression
const speak = function(){
    console.log('good day!')
};

// Apelarea functiei
speak();



const getRectArea = function(width, height) {
    return width * height;
};

console.log(getRectArea(3, 4));


//Function Declaration
function add(a,b) {return a + b};
//Function Expression
var add = function(a,b) {return a + b};

//Function Expression
var sayHello = alert.curry("hello!");








//Function Arrow
// regular function
const calcArea = function (radius) {
return 3.14 * radius**2;
}

// arrow function
const calcArea = radius => 3.14 * radius**2;



const area = calcArea(5);
console.log('area is:', area);


//practise arrow functions
//regular function
const greet = function () {
return 'hello, world'
};
//arrow function
const greet = () => 'hello, world';
const result = greet();
console.log(result);


//regular function
const bill = function (products, tax) {
let total =  0;
for (let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
}
return total;
};


//arrow function
const bill = (products, tax) => {
    let total =  0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));