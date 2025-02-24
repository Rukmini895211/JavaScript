// let num = 5;
// let fac = 1;

// while(num>1){
//     fac *= num;
//     num--;
// }
// console.log(fac);

// (or)

let num = 6;

const numbers = Array.from({ length: num }, (_, i) => i + 1);  // Creates an array [1, 2, 3, ..., n]
let fac = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(fac);
