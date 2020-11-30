
function homeworkValera(a) {
    let i = 3; let b = 5; let c = 6; let d = 7;
    let e = 8; let f = 9; let g = 10; let q = 12;
    let r = 15; let l = 17;

    let  sum1, sum2, dif1, dif2 = 0;
    let multip1, multip2, rest1, rest2 = 0;

    sum1 = i + b;
    sum2 = c + d + e;
    dif1 = l - r;
    dif2 = l - q - i;
    console.log(sum1, sum2, dif1, dif2);

    multip1 = b * f * g;
    multip2 = i * l * q;
    rest1 = r / b;
    rest2 = q / c;

    console.log(multip1, multip2, rest1, rest2);
    console.log(Math.max(i, f, b));
    console.log(Math.min(l, g, i, d));
    console.log(Math.pow(i, f));

}
export {homeworkValera}

//
// var array = [5, 3, 2, 8, 1, 4],
//     indices = [];
//
// array
//     .filter((v, i) => v % 2 && indices.push(i))
//     .sort((a, b) => a - b)
//     .forEach((v, i) => array[indices[i]] = v);
//
// console.log(array);

