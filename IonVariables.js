function ionVariabless(){
   let x, y;
   let result = 0;
   x = 26;
   y = 6;
   result = x+y;
    console.log(result);
}
export {ionVariabless}
//Creati 30 de variabilre dintre care 10 trebuie sa fie de tip number; 5 de tip string dar numar;
// 5 de tip string litere,text;
//diferite calculari cu number
//usestrict in fiecare calculare
//intercolarea in toate
//citim documentatia oficiala
//Alt branch homeworkIon si facem push
//
"use strict";
function ionVariables() {
   //10 variabile de tip Number
   let a = 10, b = 12, c = 15, d = 17, e = 20, f = 23, g = 25, m = 27, n = 30, o = 100;

   //5 variabile de tip string dar Number
   let stringNumber1 = "10";
   let stringNumber2 = "100";
   let stringNumber3 = "1000";
   let stringNumber4 = "10000";
   let stringNumber5 = "100000";

   //5 variabile de tip string
   let string1 = "Unu";
   let string2 = "Doi";
   let string3 = "Trei";
   let string4 = "Patru";
   let string5 = "Cinci";

   let result = 0;
   //Facem careva calculari cu number
   result = a + b;
   console.log(result);
   result = d - c;
   console.log(result);
   result = (a + o) / (e + f);
   console.log(result);
   result = (g + m) / a;
   console.log(result);
   result = o + n - f;
   console.log(result);
   result = m * n;
   console.log(result);
   result = (f * g) / o;
   console.log(result);
   result = a + b + c + d + g + m + n + o;
   console.log(result);
   result = a + b + c + d + g + m + n - o;
   console.log(result);
   result = (a + b) * (c + d) * (e + f) * (g + m) / o;
   console.log(result);
   result = o - n;
   console.log(result);

   //variabile de tip string dar Number :
   console.log(`${stringNumber1},${stringNumber2},${stringNumber3},${stringNumber4},${stringNumber5}`);
   //variabile de tip string :
   console.log(`${string1},${string2},${string3},${string4},${string5}`);
   // Interpolare
   console.log(`${string3} = ${stringNumber3}, interpolare ${b} cu ${c} = ${b+c}`);

};
ionVariables();

export {ionVariabless, ionVariables}




//Сортировка нечетных значений.
// Вам дан массив чисел.Ваша задача состоит в том, чтобы отсортировать нечетные числа по возрастанию,
// а четные оставить на их местах.Пример:
// sortArray([5, 3, 2, 8, 1, 4])
// //[1, 3, 2, 8, 5, 4]

const arr = [5, 3, 2, 8, 1, 4];

const odd = arr.filter(i => i%2 !== 0).sort();
let i = 0,
    result = [];
arr.forEach(e => {
   if (e%2 === 0) {
      result.push(e)
   } else {
      result.push(odd[i]);
      i++;
   }
});

console.log(result);

//A doua varianta
var array = [5, 3, 2, 8, 1, 4],
    indices = [];

array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

console.log(array);












































































