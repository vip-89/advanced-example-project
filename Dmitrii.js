function dmitrii(a) {
    console.log(`Hello ${a}`)
}


// Function Verific password 6 litere Console 'error password it's too ma. if 'password error'

function password() {
    let x = prompt('enter password')
    let bb = /[A-Z]/
if (x.length > 6 || x.firstChild === bb ){
    console.log('All correct')
}
else {
    console.log('Error Words or First Latter')
}
}


password()



//Functia inmultire
function inmultire(x) {

    for (let i = 0; i <=10 ; i++) {
        console.log(`${x} * ${i} = ${x*i} `)
    }

}




// Age alchogol function
function virsta(year,age) {
 let x = year-age;
 if (x<18){
     console.log('Вам нет 18 , чтоб пить алкоголь!!!')
 }
 if (x>=18 && x<=40){
     console.log('Вы можете купить алкоголь!')
 }
 if (x>40){
     console.log('Задумайтесь стоит ли вам пить?!')
 }
 if (x<0){
     console.log('Вы еще не родились, sorry ! ')
 }

}
export {virsta}
export {inmultire}
export {password}
export  {dmitrii}