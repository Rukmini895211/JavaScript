let arr = [0,1,9,6,8,3,4,8,4,2,5,1,6,8,9,3,1];
arr = arr.sort();
console.log(arr);
for(var i = 0; i<arr.length-1; i++){
    if(arr[i] == arr[i+1]){
       arr.splice(i,1);
       i--;
    }
        
}
console.log(arr);

//(or)

// let arr = [0,1,9,6,8,3,4,8,4,2,5,1,6,8,9,3,1];
// console.log([...new Set(arr)]);

// Note: 
// Set: A Set is a built-in JavaScript object that automatically removes duplicates because it only allows unique values.
