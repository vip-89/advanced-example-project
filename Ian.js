function Ian(best){
    console.log(best)
}


// func nume prenume virsrta, daca virsta e mai mica de 18 ani, atunci in consola apare sunteti prea mic ,
//     daca virsta e intre 18 40 anumit tip de baururi,daca e peste 40 serviti mai putin alcool

function bautura(){
    let nume = prompt("Nume");
    let prenume = prompt("Prenume");
    let virsta = prompt("Virsta");
    if (virsta < 18) {
        console.log("Esti prea mic, mai bea laptic");
    } else if (virsta == 18 && virsta <= 40) {
        console.log("Ce vei servi astazi");
    } else if (virsta > 40) {
        console.log("Mai mult de 2 nu se poate)")
    } else {
        console.log("Error!!!")
    }
}
export{Ian, bautura};
