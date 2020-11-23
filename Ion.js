function Ion(a){
    console.log(a)
}

//Functia de calculare a Ariei Patratului

function ariaPatratului(L){
    alert((L*L));
}
let aria = prompt("Adauga valoare laturei patratului:")

ariaPatratului(aria);


//Functia de transformare a gradelor Fahrenheit in Celsius

function toCelsius(g){
    alert((5/9) * (g-32));
}

let valoare = prompt("Adauga valoare in grade F:")

toCelsius(valoare);



//Functia de varificare a Parolei

let parola = prompt("Verifica o parola");

function testPassword(pass) {
    let score = 0;
    let message = "";

//verificam numar caractere
    if(pass.length < 6){ score = score + 10; } else if(pass.length > 6 && pass.length < 8){
        score = score + 20
    }
    else{
        score = score + 30;
    }

//verificam daca exista caractere speciale
    if (! /[ !@#$%^&*()_+\-=\[\]{};’:”\\|,.<>\/S?]/.test(pass)) {
        score = score + 10;
    }
    else{
        score = score + 20;
    }

//verificam daca exista litere mari
    if(/[A-Z]/.test(pass)){
        score = score + 30;
    }
    else{
        score = score + 10;
    }

//pregatim mesajul
    switch(score){
        case 10: message = "Parola slaba"; break;
        case 20: message = "Parola slaba"; break;
        case 30: message = "Parola slaba"; break;
        case 40: message = "Parola medie"; break;
        case 50: message = "Parola medie"; break;
        case 60: message = "Parola medie"; break;
        case 70: message = "Parola medie"; break;
        case 80: message = "Parola sigura"; break;
        case 90: message = "Parola sigura"; break;
        case 100: message = "Parola sigura"; break;
    }
    alert(message);
}

testPassword(parola);
export {Ion,ariaPatratului,toCelsius,testPassword}