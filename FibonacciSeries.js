// let num = 10;
// let n1 = 0;
// let n2 = 1;
// let n = 0;
// console.log(n1 +'\n'+n2);
// for(var i = 2; i<num;i++){
//     n = n1 + n2;
//     n1 = n2;
//     n2 = n; 
//     console.log(n);
// }

// (or)

let fibSeries = [0,1];
let n = 5;
for(var i=2; i<n; i++){
    fibSeries.push( fibSeries[i-2] + fibSeries[i-1]);
}
console.log(fibSeries);