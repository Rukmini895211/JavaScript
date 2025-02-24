let arr1 = [3,7];
let arr2 = [3];

let sum = 0;
arr1 = arr1.sort().concat(arr2.sort());
for ( var i = 0; i < arr1.length ; i++){
    sum += arr1[i];
}
console.log((sum/arr1.length).toFixed(2));
