function Valera(a){
    console.log(a)
}
export {Valera}

let x =prompt('Cind vati nascut?');
function virsta() {
    let y = 2020;
    let z = y - x;
    console.log(`Dumneavoastra aveti ${z} ani`)
}
virsta();