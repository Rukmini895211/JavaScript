// let arr = [1, 3, 5];
// let arr1 = [2, 4, 6];
// // but this does not work for the double digit numbers
// let res = arr.concat(arr1).sort();
// console.log(res);

//(or)

let arr = [1,13, 5];
let arr1 = [2, 14, 6];
//Without it, JavaScript may not sort numbers properly because it compares them as strings by default. 
let res = arr.concat(arr1).sort(function(a,b){return a - b});

console.log(res);
