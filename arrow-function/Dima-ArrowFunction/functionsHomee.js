// 20 Functii Declaration

//1 Functii simple functia plus

// function plus(a,b) {
//     return console.log(a+b)
//
// }
//
// plus(2,3)
//
// //2 functia minus
//
// function minus(a,b) {
//   return console.log(a-b)
// }

// minus(8,5)
// 3 function inmultire
// function inmultire(a,b) {
//    return  console.log(a*b)
// }
// inmultire(5,3)
// //4 function delenie
// function delenie(a,b) {
//   return console.log(a/b)
// }
//
// delenie(6,2)

//5 to String

// function str(text) {
//     text.toString().split('').join()
//
// }
//
// str(234234)


//6 function checkAni your permission


// function checkAge(year,age) {
//     const x = year-age
//     if (x<18 && x >0){
//         console.log('Вам нет 18 , чтоб пить алкоголь!!!')
//     }
//     if (x>=18 && x<=40){
//         console.log('Вы можете купить алкоголь!')
//     }
//     if (x>40){
//         console.log('Задумайтесь стоит ли вам пить?!')
//     }
//     if (x<0){
//         console.log('Вы еще не родились, sorry ! ')
//     }
// }
// checkAge(2020,2021)

// 7 numai console log
// function justConsole(a) {
//     console.log(a)
// }
//
// justConsole('Hellow World')

//8 Chose Element by Prompt

// function putHTML() {
//     let el = document.createElement("div")
//     document.body.appendChild(el)
//  let x = prompt('Put a number "4"(Квадрат) or "0"(Круг)')
// if (x==='4'){
//     el.style.backgroundColor = 'blue'
//     el.style.width = '150px'
//     el.style.height = '150px'
//    el.style.padding = '2rem'
//
// }
// else if (x==='0'){
//
//     el.innerHTML = `<div style="width: 250px;height: 250px;background-color: red;border-radius: 50%">
// </div>`
//
// }
// else {alert('Wrong Number')}
// }
//
// putHTML()

// functia change some modifications

//9 Change div modifications

// function changeModifications(color,sirina,visota,text,color2) {
//     let x = document.createElement("div");
//     document.body.appendChild(x)
//     x.style.backgroundColor = color
//     x.style.width = `${sirina}`
//     x.style.height = `${visota}`
//     x.style.textAlign = 'center'
//     x.style.color = `${color2}`
//     x.innerText = `${text}`
//
// }
//
// changeModifications('green','250px','250px','GOOD DAY!','white')

// 10 .function showModifications at time out

// function showScores(name,surname) {
//
//     setTimeout(()=>{
//         console.log(`My name is :${name} My surname is : ${surname}`)
//     },5000)
//
//
// }
//
// showScores('Dmitrii','Zolotov')

// 11 function charCodes unicode of letter

// function getCode(text){
//     let x = [] ;
//     for (let i = 0; i <text.length ; i++) {
//        x.push(text.charCodeAt(i))
//     }
//
// return console.log(x)
// }
//
// getCode('text')

//gititi number 12

// function guess_the_number() {
//
//     let x = Number(prompt('Write a number from "0" and to "10"'))
//     let z = Math.floor(Math.random() * 10)
//
//
//     if (x === z) {
//         console.log(`Great Succes it was number ${z}`)
//     }
//         if (x!==z) {
//
//             console.log(`Uppss try again it was number ${z}`)
//
//         } else{
//             console.log('Something Wrong')
//         }
//
//     }
//
//
// guess_the_number()


//13 cicle funtion

// function ciclF(n) {
//     for (let i = 0; i <10 ; i++) {
//      console.log(n)
//     }
// }
//
// ciclF('a')


//14 фантазия концилась =))) boolean

// function bool(a,b) {
// if (a===b){
//     return console.log(true)
// }
// else if (a!==b){
//     return console.log(false)
// }
// else {
//     console.log('gg')
// }
// }
//
// bool(3,2)

// 15 function in functia cam callBack =)
// function fuN(a) {
//     function F1(b) {
//     console.log(b)
//     console.log(a)
// }
// F1('2')
// }
//
// fuN(1)

// 16 functia random number

// function randN(n) {
//     console.log(Math.floor(Math.random()*n))
//
// }
//
// randN(15)


//17 Data
// function datA(d) {
//     d = Date()
//     console.log(`${Date()} is ${d}`)
//
// }
//
// datA()


//18 With Defaul

// function defF(name='Dmitrii',city='Chisinau') {
//     console.log(`It's ${name} he is from ${city}`)
// }
//
// defF()

//-------------------------------------END-------------------------------------------------//


// Expression && Arrow
// 1) Radius
//expression
// let radius = function (radius) {
//   return  console.log(3.14 * radius**2);
// }
//
// radius(15)

// arrow
// let radius2 = (radius)=>console.log(3.14 * radius**2)
// radius2(5)
//
// //2 Daca number este par
//
// let inm  = function (number) {
//   if (number%2 === 0){
//     console.log('Este cifra para')
// }
//   else if (number%2 !== 0)
//   {
//     console.log('Nu este par')
//   }
//   else {
//     console.log('Something wrong')
//   }
//
// }
//
// inm(4)
//
//
// //2 arrow
//
// let inm2 = (number)=>{
//   if (number%2 === 0){
//     console.log('Este cifra para')
//   }
//   else if (number%2 !== 0)
//   {
//     console.log('Nu este par')
//   }
//   else {
//     console.log('Something wrong')
//   }
// }
//
// inm2()


// ferificare lentch

// 3let firific_lentch = function (text) {
// if (text.length>0 && text.length<=10){
//   console.log('Correct lentch')
// }
// else if (text.length<0 || text.length>10){
//   console.log('Not too many lenght')
// }
// else {
//   console.log('some error')
// }
// }
//
// firific_lentch('hello')
//
// // arrow
//
// 3let firific_lentch2 = (text)=> {
//   if (text.length>0 && text.length<=10){
//     console.log('Correct lentch')
//   }
//   else if (text.length<0 || text.length>10){
//     console.log('Not too many lenght')
//   }
//   else {
//     console.log('some error')
//   }
// }
//
// firific_lentch('hello')
// firific_lentch2('bb')


//4 contat 2 strings

//expression
// let concStings = function (first,second) {
//
//   return `${first} ${second}`
//
// }
//
// console.log(
//     concStings('hello','dmitrii')
// )
//
// //arrow
//
// let concString2 = (first,second)=>`${first} ${second}`
//
// console.log(concString2('agra','cultur'))


//5 name si age

// let getPerson = (name,age)=>{
//   let x = 2020 - age;
//
//   if (x > 0){
//     console.log(`Это ${name} ему ${x} лет` )
//   }
//   else {
//     console.log('Это будущее')
//   }
// }
//
// getPerson('Дмитрий',2017)
// getPerson('Коля',2011)
